import WebSocketClient from 'ws';
import crypto from 'crypto';
import { expect, beforeEach, afterEach, describe, it, jest } from '@jest/globals';
import { EventEmitter } from 'events';
import {
    WebsocketAPIBase,
    WebsocketStreamsBase,
    ConfigurationWebsocketAPI,
    ConfigurationWebsocketStreams,
    WebsocketCommon,
    WebsocketConnection,
    WebsocketApiResponse,
    Logger,
    delay,
} from '../src';

jest.mock('ws');
jest.mock('../src/logger');

class TestWebsocketCommon extends WebsocketCommon {
    public testInitConnect(
        url: string,
        isRenewal: boolean = false,
        connection?: WebsocketConnection
    ): void {
        this.initConnect(url, isRenewal, connection);
    }

    public testGetConnection(allowNonEstablishedWebsockets: boolean = false): WebsocketConnection {
        return this.getConnection(allowNonEstablishedWebsockets);
    }

    public async testConnectPool(url: string): Promise<void> {
        return await this.connectPool(url);
    }

    public testSend<T = unknown>(
        payload: string,
        id?: string,
        promiseBased: boolean = true,
        timeout: number = 5000,
        connection?: WebsocketConnection
    ): Promise<WebsocketApiResponse<T>> | void {
        return this.send(payload, id, promiseBased, timeout, connection);
    }
}

const createMockWebSocket = (state: number) =>
    Object.assign(new EventEmitter(), {
        close: jest.fn(),
        ping: jest.fn(),
        pong: jest.fn(),
        send: jest.fn((data: string | Buffer, cb?: (err?: Error) => void) => {
            if (cb) cb();
        }),
        removeAllListeners: jest.fn(),
        readyState: state,
    }) as unknown as jest.Mocked<WebSocketClient> & EventEmitter;

describe('WebsocketCommon', () => {
    let wsCommon: TestWebsocketCommon;
    let mockWs: jest.Mocked<WebSocketClient> & EventEmitter;
    let mockLogger: jest.Mocked<Logger>;
    let configuration: {
        wsURL: string;
        mode: 'single' | 'pool';
        poolSize: number;
        reconnectDelay: number;
        compression: boolean;
        agent: boolean;
    };
    let connectionPool: WebsocketConnection[];

    beforeEach(() => {
        mockWs = createMockWebSocket(WebSocketClient.OPEN);

        jest.spyOn(mockWs, 'close');
        jest.spyOn(mockWs, 'removeAllListeners');

        mockLogger = {
            info: jest.fn(),
            error: jest.fn(),
            warn: jest.fn(),
            debug: jest.fn(),
            getInstance: jest.fn().mockReturnThis(),
        } as unknown as jest.Mocked<Logger>;

        (WebSocketClient as jest.MockedClass<typeof WebSocketClient>).mockImplementation(() =>
            createMockWebSocket(WebSocketClient.OPEN)
        );

        (Logger.getInstance as jest.MockedFunction<typeof Logger.getInstance>).mockReturnValue(
            mockLogger
        );

        connectionPool = [
            {
                id: 'test-id1',
                ws: createMockWebSocket(WebSocketClient.OPEN),
                closeInitiated: false,
                reconnectionPending: false,
                renewalPending: false,
                pendingRequests: new Map(),
            },
            {
                id: 'test-id2',
                ws: createMockWebSocket(WebSocketClient.OPEN),
                closeInitiated: false,
                reconnectionPending: false,
                renewalPending: false,
                pendingRequests: new Map(),
            },
            {
                id: 'test-id3',
                ws: createMockWebSocket(WebSocketClient.CLOSED),
                closeInitiated: false,
                reconnectionPending: false,
                renewalPending: false,
                pendingRequests: new Map(),
            },
        ];

        configuration = {
            wsURL: 'wss://test.com',
            mode: 'single',
            poolSize: 3,
            reconnectDelay: 1000,
            compression: false,
            agent: false,
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    });

    describe('Initialization', () => {
        it('should initialize with a single connection in single mode', () => {
            const singleModeCommon = new TestWebsocketCommon({ wsURL: 'wss://test.com' });
            expect(singleModeCommon.connectionPool.length).toBe(1);
        });

        it('should initialize a connection pool in pool mode', () => {
            const poolModeCommon = new TestWebsocketCommon({
                wsURL: 'wss://test.com',
                mode: 'pool',
                poolSize: 3,
            });
            expect(poolModeCommon.connectionPool.length).toBe(3);
        });
    });

    describe('initConnect()', () => {
        const url = 'wss://test.com';

        beforeEach(() => {
            jest.useFakeTimers();
            wsCommon = new TestWebsocketCommon(configuration);
            wsCommon.testInitConnect(url, false);
        });

        it('should establish connection and set up event handlers', () => {
            expect(WebSocketClient).toHaveBeenCalledWith(url, {
                perMessageDeflate: false,
                agent: false,
            });
            expect(mockLogger.info).toHaveBeenCalledWith(
                `Establishing Websocket connection with id ${wsCommon.connectionPool[0].id} to: ${url}`
            );
        });

        it('should emit open event correctly', () => {
            const openListener = jest.fn();
            wsCommon.on('open', openListener);

            wsCommon.connectionPool[0].ws?.emit('open');
            expect(openListener).toHaveBeenCalledWith(wsCommon);
            expect(mockLogger.info).toHaveBeenCalledWith(
                `Connected to the Websocket Server with id ${wsCommon.connectionPool[0].id}: ${url}`
            );
        });

        it('should emit message event with connection data', () => {
            const messageListener = jest.fn();
            wsCommon.on('message', messageListener);

            const testMessage = Buffer.from('test message');
            wsCommon.connectionPool[0].ws?.emit('message', testMessage);
            expect(messageListener).toHaveBeenCalledWith(
                'test message',
                wsCommon.connectionPool[0]
            );
        });

        it('should emit ping and pong events correctly', () => {
            const pingListener = jest.fn();
            wsCommon.on('ping', pingListener);

            wsCommon.connectionPool[0].ws?.emit('ping');
            expect(pingListener).toHaveBeenCalled();
            expect(wsCommon.connectionPool[0].ws?.pong).toHaveBeenCalled();
        });

        it('should emit error event correctly', () => {
            const errorListener = jest.fn();
            wsCommon.on('error', errorListener);

            const testError = new Error('Test error');
            wsCommon.connectionPool[0].ws?.emit('error', testError);
            expect(errorListener).toHaveBeenCalledWith(testError);
        });

        it('should emit close event with correct arguments', () => {
            const closeListener = jest.fn();
            wsCommon.on('close', closeListener);

            const closeEventCode = 1000;
            const reason = 'Normal closure';
            wsCommon.connectionPool[0].ws?.emit('close', closeEventCode, reason);
            expect(closeListener).toHaveBeenCalledWith(closeEventCode, reason);
        });

        it('should handle automatic connection renewal after max connection duration', () => {
            jest.advanceTimersByTime(23 * 60 * 60 * 1000);
            expect(mockLogger.info).toHaveBeenCalledWith(
                `Renewing Websocket connection with id ${wsCommon.connectionPool[0].id}`
            );
            expect(WebSocketClient).toHaveBeenCalledTimes(2);
        });

        it('should clean up old connection and timers during connection renewal', async () => {
            const clearTimersSpy = jest.spyOn(wsCommon as never, 'clearTimers');

            const oldConnection = wsCommon.connectionPool[0].ws as WebSocketClient;

            const newConnection = createMockWebSocket(WebSocketClient.OPEN);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsCommon as any, 'createWebSocket').mockReturnValueOnce(newConnection);

            jest.advanceTimersByTime(23 * 60 * 60 * 1000);

            newConnection.emit('open');

            expect(wsCommon['connectionTimers'].size).toBe(2);

            jest.advanceTimersByTime(1000);

            jest.useRealTimers();
            await delay(2000);
            jest.useFakeTimers();

            expect(mockLogger.info).toHaveBeenCalledWith(
                `Renewing Websocket connection with id ${wsCommon.connectionPool[0].id}`
            );
            expect(oldConnection).not.toEqual(wsCommon.connectionPool[0].ws);
            expect(oldConnection.removeAllListeners).toHaveBeenCalled();
            expect(clearTimersSpy).toHaveBeenCalledWith(oldConnection);
            expect(wsCommon['connectionTimers'].size).toBe(1);
        });

        it('should not set closeInitiated during connection renewal', () => {
            wsCommon.testInitConnect(url, true);
            expect(wsCommon.connectionPool[0].closeInitiated).toBe(false);
        });

        it('should handle unexpected closure and schedule reconnection', () => {
            const reconnectDelay = configuration.reconnectDelay;
            Object.defineProperty(wsCommon.connectionPool[0].ws, 'readyState', {
                value: WebSocketClient.CLOSED,
                writable: true,
            });

            wsCommon.connectionPool[0].ws?.emit('close', 1006, 'Abnormal closure');
            jest.advanceTimersByTime(reconnectDelay);

            expect(mockLogger.info).toHaveBeenCalledWith(
                `Reconnecting conection with id ${wsCommon.connectionPool[0].id} to the server.`
            );
            expect(WebSocketClient).toHaveBeenCalledTimes(2);
        });
    });

    describe('closeConnectionGracefully()', () => {
        let connection: WebsocketConnection;

        beforeEach(() => {
            jest.useFakeTimers();
            wsCommon = new TestWebsocketCommon(configuration);
            connection = wsCommon.connectionPool[0];
        });

        it('should return early if no connection is provided', async () => {
            await wsCommon['closeConnectionGracefully'](null as never, null as never);

            expect(mockLogger.debug).not.toHaveBeenCalled();
            expect(mockWs.close).not.toHaveBeenCalled();
        });

        it('should wait for pending requests to complete before closing', async () => {
            connection.pendingRequests.set('test', { resolve: jest.fn(), reject: jest.fn() });

            const closePromise = wsCommon['closeConnectionGracefully'](mockWs, connection);

            jest.advanceTimersByTime(1000);
            expect(mockLogger.debug).toHaveBeenCalledWith(
                'Waiting for pending requests to complete before disconnecting.'
            );

            connection.pendingRequests.clear();
            jest.advanceTimersByTime(1000);

            await closePromise;

            expect(mockWs.close).toHaveBeenCalled();
            expect(mockLogger.info).toHaveBeenCalledWith('Closing Websocket connection.');
        });

        it('should force-close the connection after timeout if pending requests are not completed', async () => {
            connection.pendingRequests.set('test', { resolve: jest.fn(), reject: jest.fn() });

            const closePromise = wsCommon['closeConnectionGracefully'](mockWs, connection);

            jest.advanceTimersByTime(30000);

            await closePromise;

            expect(mockLogger.warn).toHaveBeenCalledWith(
                'Force-closing connection after 30 seconds.'
            );
            expect(mockWs.close).toHaveBeenCalled();
        });

        it('should clean up all timers after closing the connection', async () => {
            jest.spyOn(wsCommon as never, 'clearTimers');

            const closePromise = wsCommon['closeConnectionGracefully'](mockWs, connection);
            jest.advanceTimersByTime(1000);
            await closePromise;

            expect(wsCommon['clearTimers']).toHaveBeenCalledWith(mockWs);
            expect(wsCommon['connectionTimers'].get(mockWs)).toBeUndefined();
        });
    });

    describe('getConnection()', () => {
        beforeEach(() => {
            configuration.mode = 'pool';
            wsCommon = new TestWebsocketCommon(configuration, connectionPool);
        });

        it('should return the first connection in single mode', () => {
            wsCommon = new TestWebsocketCommon(
                { wsURL: 'wss://test.com', mode: 'single' },
                connectionPool
            );

            const connection = wsCommon.testGetConnection();
            expect(connection).toBe(connectionPool[0]);
        });

        it('should cycle through available connections in pool mode (round-robin)', () => {
            const firstConnection = wsCommon.testGetConnection();
            const secondConnection = wsCommon.testGetConnection();
            const thirdConnection = wsCommon.testGetConnection();

            expect(firstConnection).toBe(connectionPool[0]);
            expect(secondConnection).toBe(connectionPool[1]);
            expect(thirdConnection).toBe(connectionPool[0]);
        });

        it('should skip connections that are not open or are flagged for closure/reconnection', () => {
            Object.defineProperty(connectionPool[0].ws!, 'readyState', {
                value: WebSocketClient.CLOSING,
            });
            Object.defineProperty(connectionPool[2].ws!, 'readyState', {
                value: WebSocketClient.OPEN,
            });
            connectionPool[1].closeInitiated = true;

            const connection = wsCommon.testGetConnection();
            expect(connection).toBe(connectionPool[2]);
        });

        it('should return unopened connections when allowNonEstablishedWebsockets is true', () => {
            Object.defineProperty(connectionPool[0].ws!, 'readyState', {
                value: WebSocketClient.CLOSED,
            });
            Object.defineProperty(connectionPool[1].ws!, 'readyState', {
                value: WebSocketClient.CLOSED,
            });
            Object.defineProperty(connectionPool[2].ws!, 'readyState', {
                value: WebSocketClient.CLOSED,
            });

            const connection = wsCommon.testGetConnection(true);
            expect(connection).toBe(connectionPool[0]);
        });

        it('should throw an error if no connections are ready and allowNonEstablishedWebsockets is false', () => {
            connectionPool.forEach((connection) => {
                Object.defineProperty(connection.ws!, 'readyState', {
                    value: WebSocketClient.CLOSED,
                });
                connection.closeInitiated = true;
            });

            expect(() => wsCommon.testGetConnection()).toThrowError(
                'No available Websocket connections are ready.'
            );
        });

        it('should cycle through all connections even if some are unopened when allowNonEstablishedWebsockets is true', () => {
            Object.defineProperty(connectionPool[0].ws!, 'readyState', {
                value: WebSocketClient.CLOSED,
            });
            Object.defineProperty(connectionPool[1].ws!, 'readyState', {
                value: WebSocketClient.OPEN,
            });
            Object.defineProperty(connectionPool[2].ws!, 'readyState', {
                value: WebSocketClient.CLOSED,
            });

            const firstConnection = wsCommon.testGetConnection(true);
            const secondConnection = wsCommon.testGetConnection(true);
            const thirdConnection = wsCommon.testGetConnection(true);

            expect(firstConnection).toBe(connectionPool[0]);
            expect(secondConnection).toBe(connectionPool[1]);
            expect(thirdConnection).toBe(connectionPool[2]);
        });
    });

    describe('connectPool()', () => {
        const url = 'wss://test.com';

        beforeEach(() => {
            jest.useFakeTimers();
            configuration.mode = 'pool';
            connectionPool.forEach((connection) => {
                if (connection.ws) {
                    Object.defineProperty(connection.ws, 'readyState', {
                        value: WebSocketClient.OPEN,
                        writable: true,
                    });
                }
            });
            wsCommon = new TestWebsocketCommon(configuration, connectionPool);
        });

        it('should connect all Websocket connections in the pool', async () => {
            const openPromises = connectionPool.map((connection) => {
                return new Promise<void>((resolve) => {
                    connection.ws?.on('open', () => resolve());
                });
            });

            const connectPromise = wsCommon.testConnectPool(url);
            connectionPool.forEach((connection) => connection.ws?.emit('open'));

            await connectPromise;
            await Promise.all(openPromises);

            expect(
                connectionPool.every((conn) => conn.ws?.readyState === WebSocketClient.OPEN)
            ).toBe(true);
        });

        it('should reject if any Websocket connection emits an error', async () => {
            const connectPromise = wsCommon.testConnectPool(url);

            const error = new Error('Test connection error');
            connectionPool[1].ws?.emit('error', error);

            await expect(connectPromise).rejects.toThrowError('Test connection error');
        });

        it('should reject if any Websocket connection is closed unexpectedly', async () => {
            const connectPromise = wsCommon.testConnectPool(url);

            connectionPool[2].ws?.emit('close');

            await expect(connectPromise).rejects.toThrowError('Connection closed unexpectedly.');
        });

        it('should resolve only when all connections are open', async () => {
            const connectPromise = wsCommon.testConnectPool(url);

            connectionPool[0].ws?.emit('open');
            connectionPool[2].ws?.emit('open');

            jest.useRealTimers();
            setTimeout(() => connectionPool[1].ws?.emit('open'), 1000);
            jest.useFakeTimers();

            jest.advanceTimersByTime(1000);
            await connectPromise;

            expect(
                connectionPool.every((conn) => conn.ws?.readyState === WebSocketClient.OPEN)
            ).toBe(true);
        });

        it('should call initConnect() for each connection', async () => {
            const initConnectSpy = jest.spyOn(wsCommon as never, 'initConnect');

            const connectPromise = wsCommon.testConnectPool(url);

            connectionPool.forEach((connection) => {
                connection.ws?.emit('open');
            });

            await connectPromise;

            expect(initConnectSpy).toHaveBeenCalledTimes(connectionPool.length);
            connectionPool.forEach((connection) => {
                expect(initConnectSpy).toHaveBeenCalledWith(url, false, connection);
            });
        });
    });

    describe('isConnected()', () => {
        beforeEach(() => {
            configuration.mode = 'pool';
            wsCommon = new TestWebsocketCommon(configuration, connectionPool);
        });

        it('should return true if at least one connection in the pool is open and not reconnecting', () => {
            const isConnected = wsCommon.isConnected();
            expect(isConnected).toBe(true);
        });

        it('should return true if the specified connection is open and not reconnecting', () => {
            const isConnected = wsCommon.isConnected(connectionPool[0]);
            expect(isConnected).toBe(true);
        });

        it('should return false if all connections in the pool are closed', () => {
            connectionPool.forEach((connection) => {
                if (connection.ws) {
                    Object.defineProperty(connection.ws, 'readyState', {
                        value: WebSocketClient.CLOSED,
                    });
                }
            });

            const isConnected = wsCommon.isConnected();
            expect(isConnected).toBe(false);
        });

        it('should return false if the specified connection is closed', () => {
            const isConnected = wsCommon.isConnected(connectionPool[2]);
            expect(isConnected).toBe(false);
        });

        it('should return false if all connections in the pool are reconnecting', () => {
            connectionPool.forEach((connection) => {
                connection.reconnectionPending = true;
            });

            const isConnected = wsCommon.isConnected();
            expect(isConnected).toBe(false);
        });

        it('should return false if the specified connection is reconnecting', () => {
            connectionPool[0].reconnectionPending = true;

            const isConnected = wsCommon.isConnected(connectionPool[0]);
            expect(isConnected).toBe(false);
        });

        it('should ignore connections marked as `closeInitiated` in the pool', () => {
            connectionPool[0].closeInitiated = true;

            const isConnected = wsCommon.isConnected();
            expect(isConnected).toBe(true);
        });

        it('should ignore a specific connection marked as `closeInitiated`', () => {
            connectionPool[0].closeInitiated = true;

            const isConnected = wsCommon.isConnected(connectionPool[0]);
            expect(isConnected).toBe(false);
        });

        it('should return false if no connections in the pool are open or valid', () => {
            connectionPool.forEach((connection) => {
                Object.defineProperty(connection.ws, 'readyState', {
                    value: WebSocketClient.CLOSING,
                });
            });

            const isConnected = wsCommon.isConnected();
            expect(isConnected).toBe(false);
        });

        it('should return false if the specified connection is not valid', () => {
            Object.defineProperty(connectionPool[0].ws, 'readyState', {
                value: WebSocketClient.CLOSING,
            });

            const isConnected = wsCommon.isConnected(connectionPool[0]);
            expect(isConnected).toBe(false);
        });
    });

    describe('disconnect()', () => {
        beforeEach(() => {
            jest.useFakeTimers();

            configuration.mode = 'pool';
            wsCommon = new TestWebsocketCommon(configuration, connectionPool);
        });

        it('should close all connections when connected', async () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);
            const closeConnectionGracefullySpy = jest.spyOn(
                wsCommon as never,
                'closeConnectionGracefully'
            );

            const disconnectPromise = wsCommon.disconnect();

            jest.advanceTimersByTime(3000);

            await disconnectPromise;

            connectionPool.forEach((connection) => {
                expect(connection.closeInitiated).toBe(true);
            });
            expect(closeConnectionGracefullySpy).toHaveBeenCalledTimes(connectionPool.length);
            connectionPool.forEach((connection) => {
                expect(closeConnectionGracefullySpy).toHaveBeenCalledWith(
                    connection.ws,
                    connection
                );
            });
            expect(mockLogger.info).toHaveBeenCalledWith(
                'Disconnected with Binance Websocket Server'
            );
        });

        it('should log a warning if no connections are open', async () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(false);

            const disconnectPromise = wsCommon.disconnect();

            jest.advanceTimersByTime(3000);

            await disconnectPromise;

            expect(mockLogger.warn).toHaveBeenCalledWith('No connection to close.');
        });

        it('should mark connections with closeInitiated before disconnecting', async () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);

            const disconnectPromise = wsCommon.disconnect();

            jest.advanceTimersByTime(3000);

            await disconnectPromise;

            connectionPool.forEach((connection) => {
                expect(connection.closeInitiated).toBe(true);
            });
        });

        it('should log a message when all connections are disconnected', async () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);

            const disconnectPromise = wsCommon.disconnect();

            jest.advanceTimersByTime(3000);

            await disconnectPromise;

            expect(mockLogger.info).toHaveBeenCalledWith(
                'Disconnected with Binance Websocket Server'
            );
        });

        it('should handle an empty connection pool gracefully', async () => {
            wsCommon = new TestWebsocketCommon({
                wsURL: 'wss://test.com',
                mode: 'pool',
                poolSize: 0,
            });

            await expect(wsCommon.disconnect()).resolves.toBeUndefined();
            expect(mockLogger.warn).toHaveBeenCalledWith('No connection to close.');
        });

        it('should not throw an error if a connection is missing its Websocket', async () => {
            connectionPool[0].ws = undefined;

            const disconnectPromise = wsCommon.disconnect();

            jest.advanceTimersByTime(3000);

            await disconnectPromise;

            expect(mockLogger.warn).not.toHaveBeenCalledWith(expect.stringContaining('Error'));
        });
    });

    describe('pingServer()', () => {
        beforeEach(() => {
            wsCommon = new TestWebsocketCommon(configuration, connectionPool);
        });

        it('should send ping to all ready connections', () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);

            wsCommon.pingServer();

            connectionPool.forEach((connection) => {
                if (connection.ws?.readyState === WebSocketClient.OPEN) {
                    expect(connection.ws.ping).toHaveBeenCalled();
                }
            });

            expect(mockLogger.info).toHaveBeenCalledWith(
                'Sending PING to all connected Websocket servers.'
            );
        });

        it('should log a warning if no connections are ready', () => {
            connectionPool.forEach((connection) => {
                Object.defineProperty(connection.ws!, 'readyState', {
                    value: WebSocketClient.CLOSED,
                });
            });

            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(false);

            wsCommon.pingServer();

            expect(mockLogger.warn).toHaveBeenCalledWith(
                'Ping only can be sent when connection is ready.'
            );
            connectionPool.forEach((connection) => {
                expect(connection.ws?.ping).not.toHaveBeenCalled();
            });
        });

        it('should send ping to only ready connections when some are not ready', () => {
            const readyConnection = connectionPool[0];
            const notReadyConnection = connectionPool[1];
            Object.defineProperty(notReadyConnection.ws!, 'readyState', {
                value: WebSocketClient.CLOSING,
            });

            wsCommon.pingServer();

            expect(readyConnection.ws?.ping).toHaveBeenCalled();
            expect(notReadyConnection.ws?.ping).not.toHaveBeenCalled();

            expect(mockLogger.info).toHaveBeenCalledWith(
                'Sending PING to all connected Websocket servers.'
            );
        });

        it('should not send ping if reconnection is pending for any connection', () => {
            connectionPool.forEach((connection) => {
                connection.reconnectionPending = true;
            });

            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(false);

            wsCommon.pingServer();

            expect(mockLogger.warn).toHaveBeenCalledWith(
                'Ping only can be sent when connection is ready.'
            );
            connectionPool.forEach((connection) => {
                expect(connection.ws?.ping).not.toHaveBeenCalled();
            });
        });
    });

    describe('send()', () => {
        const testPayload = 'test payload';
        const testId = 'test-id';

        beforeEach(() => {
            jest.useFakeTimers();

            configuration.mode = 'pool';
            wsCommon = new TestWebsocketCommon(configuration, connectionPool);
        });

        it('should send payload on a specific connection in sync mode', () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);
            const specificConnection = wsCommon.connectionPool[1];
            wsCommon.testSend(testPayload, testId, false, 5000, specificConnection);

            expect(specificConnection.ws?.send).toHaveBeenCalledWith(testPayload);
        });

        it('should throw an error if specific connection is not ready', () => {
            const specificConnection = wsCommon.connectionPool[1];
            Object.defineProperty(specificConnection.ws!, 'readyState', {
                value: WebSocketClient.CLOSING,
            });

            expect(() =>
                wsCommon.testSend(testPayload, testId, false, 5000, specificConnection)
            ).toThrowError('Send can only be sent when connection is ready.');
        });

        it('should send payload when connected in sync mode without a specific connection', () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);
            wsCommon.testSend(testPayload, testId, false);

            expect(connectionPool[0].ws?.send).toHaveBeenCalledWith(testPayload);
        });

        it('should send payload on a specific connection in promise-based mode', async () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);
            const specificConnection = wsCommon.connectionPool[1];

            const sendPromise = wsCommon.testSend(
                testPayload,
                testId,
                true,
                5000,
                specificConnection
            );

            expect(specificConnection.ws?.send).toHaveBeenCalledWith(testPayload);

            const pendingRequest = specificConnection.pendingRequests.get(testId);
            pendingRequest?.resolve('test response');

            await expect(sendPromise).resolves.toEqual('test response');
        });

        it('should send payload in promise-based mode without a specific connection', async () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);

            const sendPromise = wsCommon.testSend(testPayload, testId, true);

            expect(connectionPool[0].ws?.send).toHaveBeenCalledWith(testPayload);

            const connection = wsCommon.connectionPool[0];
            const pendingRequest = connection.pendingRequests.get(testId);
            pendingRequest?.resolve('test response');

            await expect(sendPromise).resolves.toEqual('test response');
        });

        it('should reject with an error if not connected in promise-based mode', async () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(false);

            await expect(wsCommon.testSend(testPayload, testId, true, 5000)).rejects.toThrowError(
                'Send can only be sent when connection is ready.'
            );
        });

        it('should reject with an error if id is not provided in promise-based mode', async () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);

            await expect(
                wsCommon.testSend(testPayload, undefined, true, 5000)
            ).rejects.toThrowError('id is required for promise-based sending.');

            expect(connectionPool[0].ws?.send).toHaveBeenCalledWith(testPayload);
        });

        it('should reject the promise after timeout if no response is received', async () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);

            const sendPromise = wsCommon.testSend(testPayload, testId, true, 1000);

            expect(connectionPool[0].ws?.send).toHaveBeenCalledWith(testPayload);

            jest.advanceTimersByTime(1000);

            await expect(sendPromise).rejects.toThrowError(`Request timeout for id: ${testId}`);

            const connection = wsCommon.connectionPool[0];
            expect(connection.pendingRequests.has(testId)).toBe(false);
        });

        it('should handle multiple connections and pending requests correctly with specific connections defined', async () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);

            const connection1 = wsCommon.connectionPool[0];
            const connection2 = wsCommon.connectionPool[1];

            const sendPromise1 = wsCommon.testSend(testPayload, 'id1', true, 5000);
            const sendPromise2 = wsCommon.testSend(testPayload, 'id2', true, 5000);

            expect(connection1.ws?.send).toHaveBeenCalledWith(testPayload);
            expect(connection2.ws?.send).toHaveBeenCalledWith(testPayload);

            connection1.pendingRequests.get('id1')?.resolve('response1');
            connection2.pendingRequests.get('id2')?.resolve('response2');

            await expect(sendPromise1).resolves.toEqual('response1');
            await expect(sendPromise2).resolves.toEqual('response2');
        });

        it('should handle multiple connections and pending requests correctly with specific connections defined', async () => {
            jest.spyOn(wsCommon, 'isConnected').mockReturnValue(true);

            const connection1 = wsCommon.connectionPool[0];
            const connection2 = wsCommon.connectionPool[1];

            const sendPromise1 = wsCommon.testSend(testPayload, 'id1', true, 5000, connection1);
            const sendPromise2 = wsCommon.testSend(testPayload, 'id2', true, 5000, connection2);

            expect(connection1.ws?.send).toHaveBeenCalledWith(testPayload);
            expect(connection2.ws?.send).toHaveBeenCalledWith(testPayload);

            connection1.pendingRequests.get('id1')?.resolve('response1');
            connection2.pendingRequests.get('id2')?.resolve('response2');

            await expect(sendPromise1).resolves.toEqual('response1');
            await expect(sendPromise2).resolves.toEqual('response2');
        });
    });

    describe('processQueue()', () => {
        const url = 'wss://test.com';
        const throttleRate = 1000;

        beforeEach(() => {
            jest.useRealTimers();
            wsCommon = new TestWebsocketCommon(configuration);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsCommon as any, 'initConnect').mockImplementation(async () =>
                Promise.resolve()
            );
        });

        it('should process all items in the queue sequentially', async () => {
            connectionPool.forEach((connection) =>
                wsCommon['connectionQueue'].push({ connection, url, isRenewal: false })
            );

            await wsCommon['processQueue'](throttleRate);

            connectionPool.forEach((connection) => {
                expect(wsCommon['initConnect']).toHaveBeenCalledWith(url, false, connection);
            });

            expect(wsCommon['connectionQueue'].length).toBe(0);
        });

        it('should throttle the queue processing based on the throttleRate', async () => {
            jest.spyOn(global, 'setTimeout');

            connectionPool.forEach((connection) =>
                wsCommon['connectionQueue'].push({ connection, url, isRenewal: false })
            );

            await wsCommon['processQueue'](throttleRate);

            expect(setTimeout).toHaveBeenCalledTimes(connectionPool.length);
            expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), throttleRate);
        });

        it('should not start processing if queueProcessing is already true', async () => {
            wsCommon['queueProcessing'] = true;

            await wsCommon['processQueue'](throttleRate);

            expect(wsCommon['initConnect']).not.toHaveBeenCalled();
        });

        it('should reset queueProcessing to false after processing', async () => {
            connectionPool.forEach((connection) =>
                wsCommon['connectionQueue'].push({ connection, url, isRenewal: false })
            );

            await wsCommon['processQueue'](throttleRate);

            expect(wsCommon['queueProcessing']).toBe(false);
        });
    });

    describe('enqueueReconnection()', () => {
        const url = 'wss://test.com';
        const throttleRate = 1000;

        beforeEach(() => {
            jest.useRealTimers();
            wsCommon = new TestWebsocketCommon(configuration, connectionPool);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsCommon as any, 'initConnect').mockImplementation(async () =>
                Promise.resolve()
            );
        });

        it('should add reconnection to the queue and trigger processQueue', async () => {
            const processQueueSpy = jest
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .spyOn(wsCommon as any, 'processQueue')
                .mockImplementation(async () => Promise.resolve());

            wsCommon['enqueueReconnection'](connectionPool[0], url, false);

            expect(wsCommon['connectionQueue']).toEqual([
                { connection: connectionPool[0], url, isRenewal: false },
            ]);

            expect(processQueueSpy).toHaveBeenCalled();
        });

        it('should handle multiple enqueued reconnections correctly', async () => {
            const processQueueSpy = jest
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .spyOn(wsCommon as any, 'processQueue')
                .mockImplementation(async () => Promise.resolve());

            connectionPool.forEach((connection) => {
                wsCommon['enqueueReconnection'](connection, url, false);
            });

            expect(wsCommon['connectionQueue'].length).toBe(connectionPool.length);

            expect(processQueueSpy).toHaveBeenCalledTimes(3);
        });

        it('should handle renewals correctly', async () => {
            wsCommon['enqueueReconnection'](connectionPool[0], url, true);

            await wsCommon['processQueue'](throttleRate);

            expect(wsCommon['initConnect']).toHaveBeenCalledWith(url, true, connectionPool[0]);
        });
    });

    describe('Reconnection on single mode', () => {
        const url = 'wss://test.com';

        beforeEach(() => {
            jest.useFakeTimers();
            wsCommon = new TestWebsocketCommon(configuration);
            wsCommon.testInitConnect(url, false);
        });

        it('should reconnect every 23 hours', () => {
            jest.advanceTimersByTime(23 * 60 * 60 * 1000);

            expect(mockLogger.info).toHaveBeenCalledWith(
                `Renewing Websocket connection with id ${wsCommon.connectionPool[0].id}`
            );
            expect(WebSocketClient).toHaveBeenCalledWith(url, {
                perMessageDeflate: false,
                agent: false,
            });
        });

        it('should avoid downtime by maintaining old connection during reconnection', () => {
            jest.advanceTimersByTime(23 * 60 * 60 * 1000);

            const newConnection = wsCommon.connectionPool[0].ws;

            expect(newConnection).toBeDefined();
            expect(wsCommon.connectionPool[0].renewalPending).toBe(true);
        });

        it('should route new traffic to the new connection after it opens', () => {
            jest.advanceTimersByTime(23 * 60 * 60 * 1000);

            const oldConnection = wsCommon.connectionPool[0].ws;
            const newConnection = createMockWebSocket(WebSocketClient.OPEN);
            wsCommon.connectionPool[0].ws = newConnection;

            newConnection.emit('open');

            expect(wsCommon.connectionPool[0].ws).toBe(newConnection);
            expect(oldConnection).not.toEqual(newConnection);
        });

        it('should close the old connection only after all pending requests are completed', async () => {
            const clearTimersSpy = jest.spyOn(wsCommon as never, 'clearTimers');
            const oldConnection = wsCommon.connectionPool[0].ws as WebSocketClient;

            const newConnection = createMockWebSocket(WebSocketClient.OPEN);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsCommon as any, 'createWebSocket').mockReturnValueOnce(newConnection);

            wsCommon.connectionPool[0].pendingRequests.set('req1', {
                resolve: jest.fn(),
                reject: jest.fn(),
            });

            jest.advanceTimersByTime(23 * 60 * 60 * 1000);

            newConnection.emit('open');

            wsCommon.connectionPool[0].pendingRequests.clear();

            jest.advanceTimersByTime(1000);

            jest.useRealTimers();
            await delay(2000);
            jest.useFakeTimers();

            expect(oldConnection).not.toEqual(wsCommon.connectionPool[0].ws);
            expect(oldConnection.removeAllListeners).toHaveBeenCalled();
            expect(clearTimersSpy).toHaveBeenCalled();
        });

        it('should force close the old connection if pending requests do not complete within timeout', async () => {
            const clearTimersSpy = jest.spyOn(wsCommon as never, 'clearTimers');
            const oldConnection = wsCommon.connectionPool[0].ws as WebSocketClient;

            const newConnection = createMockWebSocket(WebSocketClient.OPEN);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsCommon as any, 'createWebSocket').mockReturnValueOnce(newConnection);

            wsCommon.connectionPool[0].pendingRequests.set('req1', {
                resolve: jest.fn(),
                reject: jest.fn(),
            });

            jest.advanceTimersByTime(23 * 60 * 60 * 1000);

            newConnection.emit('open');

            jest.advanceTimersByTime(31000);

            jest.useRealTimers();
            await delay(1000);
            jest.useFakeTimers();

            expect(oldConnection).not.toEqual(wsCommon.connectionPool[0].ws);
            expect(oldConnection.removeAllListeners).toHaveBeenCalled();
            expect(clearTimersSpy).toHaveBeenCalled();
            expect(mockLogger.warn).toHaveBeenCalledWith(
                'Force-closing connection after 30 seconds.'
            );
        });
    });

    describe('Reconnection on pool mode', () => {
        const url = 'wss://test.com';

        beforeEach(() => {
            jest.useFakeTimers();

            wsCommon = new TestWebsocketCommon(configuration, connectionPool);

            wsCommon.connectionPool.forEach((connection) => {
                delete connection.ws;
                wsCommon.testInitConnect(url, false, connection);
            });
        });

        it('should reconnect all connections every 23 hours', async () => {
            jest.advanceTimersByTime(23 * 60 * 60 * 1000);

            await jest.runAllTimersAsync();

            wsCommon.connectionPool.forEach((connection) => {
                expect(connection.ws).toBeDefined();
            });
        });

        it('should maintain old connections during reconnection', async () => {
            jest.advanceTimersByTime(23 * 60 * 60 * 1000);

            await jest.runAllTimersAsync();

            wsCommon.connectionPool.forEach((connection) => {
                expect(connection.renewalPending).toBe(true);
            });
        });

        it('should route new traffic to new connections after they open', async () => {
            jest.advanceTimersByTime(23 * 60 * 60 * 1000);

            await jest.runAllTimersAsync();

            wsCommon.connectionPool.forEach((connection, index) => {
                const oldConnection = connection.ws;
                const newConnection = createMockWebSocket(WebSocketClient.OPEN);

                connection.ws = newConnection;
                newConnection.emit('open');

                expect(wsCommon.connectionPool[index].ws).toBe(newConnection);
                expect(oldConnection).not.toEqual(newConnection);
            });
        });
    });

    describe('Reconnection on Close', () => {
        const url = 'wss://test.com';

        beforeEach(() => {
            jest.useFakeTimers();
            wsCommon = new TestWebsocketCommon(configuration);
            wsCommon.testInitConnect(url);
        });

        it('should reconnect automatically if the server closes the connection', async () => {
            wsCommon.connectionPool[0].ws?.emit('close', 1000, 'Normal closure');

            jest.advanceTimersByTime(configuration.reconnectDelay);

            jest.useRealTimers();
            await delay(1000);
            jest.useFakeTimers();

            expect(mockLogger.info).toHaveBeenCalledWith(
                `Reconnecting conection with id ${wsCommon.connectionPool[0].id} to the server.`
            );
            expect(WebSocketClient).toHaveBeenCalledWith(url, {
                perMessageDeflate: false,
                agent: false,
            });
        });

        it('should not reconnect if manually disconnected', async () => {
            jest.useRealTimers();
            await delay(1000);
            jest.useFakeTimers();

            wsCommon.disconnect();

            wsCommon.connectionPool[0].ws?.emit('close', 1000, 'Normal closure');

            jest.advanceTimersByTime(configuration.reconnectDelay);

            expect(mockLogger.info).not.toHaveBeenCalledWith(
                `Reconnecting conection with id ${wsCommon.connectionPool[0].id} to the server.`
            );
            expect(WebSocketClient).toHaveBeenCalledTimes(1);
        });
    });
});

describe('WebsocketAPIBase', () => {
    jest.mock('crypto');

    let wsAPI: WebsocketAPIBase;
    let connectionPool: WebsocketConnection[];
    let mockLogger: jest.Mocked<Logger>;
    let configuration: ConfigurationWebsocketAPI;

    beforeEach(() => {
        jest.useFakeTimers();

        mockLogger = {
            info: jest.fn(),
            warn: jest.fn(),
            error: jest.fn(),
            debug: jest.fn(),
            getInstance: jest.fn().mockReturnThis(),
        } as unknown as jest.Mocked<Logger>;
        (Logger.getInstance as jest.MockedFunction<typeof Logger.getInstance>).mockReturnValue(
            mockLogger
        );

        jest.spyOn(crypto, 'randomBytes').mockImplementation(() =>
            Buffer.from('mocked_random_bytes')
        );

        connectionPool = [
            {
                id: 'test-id',
                ws: Object.assign(new EventEmitter(), {
                    close: jest.fn(),
                    ping: jest.fn(),
                    pong: jest.fn(),
                    send: jest.fn((data: string | Buffer, cb?: (err?: Error) => void) => {
                        if (cb) cb();
                    }),
                    removeAllListeners: jest.fn(),
                    readyState: WebSocketClient.OPEN,
                }) as unknown as jest.Mocked<WebSocketClient> & EventEmitter,
                closeInitiated: false,
                reconnectionPending: false,
                renewalPending: false,
                pendingRequests: new Map(),
            },
        ];

        configuration = {
            wsURL: 'wss://ws-api.binance.com:443/ws-api/v3',
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            timeout: 10000,
        };

        wsAPI = new WebsocketAPIBase(configuration, connectionPool);
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    });

    describe('connect()', () => {
        it('should establish a WebSocket connection if not already connected', async () => {
            jest.spyOn(wsAPI, 'isConnected').mockReturnValue(false);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsAPI as any, 'connectPool').mockResolvedValue({});

            await wsAPI.connect();

            expect(mockLogger.info).not.toHaveBeenCalledWith(
                'WebSocket connection already established'
            );
        });

        it('should not establish a new connection if already connected', async () => {
            jest.spyOn(wsAPI, 'isConnected').mockReturnValue(true);

            await wsAPI.connect();

            expect(mockLogger.info).toHaveBeenCalledWith(
                'WebSocket connection already established'
            );
        });

        it('should reject with an error if connectPool is failing', async () => {
            jest.spyOn(wsAPI, 'isConnected').mockReturnValue(false);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsAPI as any, 'connectPool').mockRejectedValue(
                new Error('Connection failed')
            );

            await expect(wsAPI.connect()).rejects.toThrowError('Connection failed');
        });

        it('should handle connection timeout correctly', async () => {
            jest.spyOn(wsAPI, 'isConnected').mockReturnValue(false);

            const connectPromise = wsAPI.connect();

            jest.advanceTimersByTime(10000);

            await expect(connectPromise).rejects.toThrowError('Websocket connection timed out');
        });
    });

    describe('sendMessage()', () => {
        beforeEach(() => {
            jest.spyOn(wsAPI, 'isConnected').mockReturnValue(true);
            jest.spyOn(crypto, 'createHmac').mockReturnValue({
                update: jest.fn().mockReturnThis(),
                digest: jest.fn().mockReturnValue('mock-signature'),
            } as unknown as crypto.Hmac);
        });

        it('should send an unsigned message to the WebSocket server', async () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const sendSpy = jest.spyOn(wsAPI as any, 'send').mockResolvedValue('mockResponse');

            const method = 'testMethod';
            const options = { param1: 'value1' };
            const response = await wsAPI.sendMessage(method, options);

            expect(sendSpy).toHaveBeenCalledWith(
                expect.any(String),
                expect.any(String),
                true,
                configuration.timeout
            );
            expect(response).toBe('mockResponse');
        });

        it('should send a message with an API key', async () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const sendSpy = jest.spyOn(wsAPI as any, 'send').mockResolvedValue('mockResponse');

            const method = 'testMethod';
            const options = { param1: 'value1' };
            const response = await wsAPI.sendMessage(method, options, { withApiKey: true });

            const sentPayload = JSON.parse(sendSpy.mock.calls[0][0] as string);
            expect(sentPayload.params.apiKey).toBe(configuration.apiKey);

            expect(sendSpy).toHaveBeenCalledWith(
                expect.any(String),
                expect.any(String),
                true,
                configuration.timeout
            );
            expect(response).toBe('mockResponse');
        });
        it('should send a signed message to the WebSocket server', async () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const sendSpy = jest.spyOn(wsAPI as any, 'send').mockResolvedValue('mockResponse');

            const method = 'testMethod';
            const options = { param1: 'value1' };
            const response = await wsAPI.sendMessage(method, options, { isSigned: true });

            const sentPayload = JSON.parse(sendSpy.mock.calls[0][0] as string);
            expect(sentPayload.params.timestamp).toBeDefined();
            expect(sentPayload.params.signature).toBe('mock-signature');

            expect(sendSpy).toHaveBeenCalledWith(
                expect.any(String),
                expect.any(String),
                true,
                configuration.timeout
            );
            expect(response).toBe('mockResponse');
        });

        it('should send a signed message with an API key', async () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const sendSpy = jest.spyOn(wsAPI as any, 'send').mockResolvedValue('mockResponse');

            const method = 'testMethod';
            const options = { param1: 'value1' };
            const response = await wsAPI.sendMessage(method, options, {
                withApiKey: true,
                isSigned: true,
            });

            const sentPayload = JSON.parse(sendSpy.mock.calls[0][0] as string);
            expect(sentPayload.params.apiKey).toBe(configuration.apiKey);
            expect(sentPayload.params.timestamp).toBeDefined();
            expect(sentPayload.params.signature).toBe('mock-signature');

            expect(sendSpy).toHaveBeenCalledWith(
                expect.any(String),
                expect.any(String),
                true,
                configuration.timeout
            );
            expect(response).toBe('mockResponse');
        });

        it('should throw an error if not connected', async () => {
            jest.spyOn(wsAPI, 'isConnected').mockReturnValue(false);

            await expect(wsAPI.sendMessage('testMethod')).rejects.toThrowError('Not connected');
        });
    });

    describe('onMessage()', () => {
        it('should resolve pending requests with a valid response', () => {
            const connection = connectionPool[0];
            connection.pendingRequests.set('test-id', {
                resolve: jest.fn(),
                reject: jest.fn(),
            });

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (wsAPI as any).onMessage(
                JSON.stringify({ id: 'test-id', status: 200, data: 'success' }),
                connection
            );

            const pendingRequest = connection.pendingRequests.get('test-id');
            expect(pendingRequest).toBeUndefined();
        });

        it('should resolve with data from `result` when present', () => {
            const connection = connectionPool[0];
            const mockResolve = jest.fn();
            const mockReject = jest.fn();
            connection.pendingRequests.set('test-id', { resolve: mockResolve, reject: mockReject });

            const testResult = { foo: 'bar' };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (wsAPI as any).onMessage(
                JSON.stringify({ id: 'test-id', status: 200, result: testResult }),
                connection
            );

            expect(mockResolve).toHaveBeenCalledTimes(1);
            expect(mockResolve).toHaveBeenCalledWith({ data: testResult });

            expect(mockReject).not.toHaveBeenCalled();
        });

        it('should resolve with data from `response` when `result` is missing', () => {
            const connection = connectionPool[0];
            const mockResolve = jest.fn();
            const mockReject = jest.fn();
            connection.pendingRequests.set('test-id', { resolve: mockResolve, reject: mockReject });

            const testResponse = [1, 2, 3];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (wsAPI as any).onMessage(
                JSON.stringify({ id: 'test-id', status: 200, response: testResponse }),
                connection
            );

            expect(mockResolve).toHaveBeenCalledTimes(1);
            expect(mockResolve).toHaveBeenCalledWith({ data: testResponse });
            expect(mockReject).not.toHaveBeenCalled();
        });

        it('should include `rateLimits` in the resolved value when provided', () => {
            const connection = connectionPool[0];
            const mockResolve = jest.fn();
            connection.pendingRequests.set('test-id', { resolve: mockResolve, reject: jest.fn() });

            const rl = [
                {
                    rateLimitType: 'REQUEST_WEIGHT',
                    interval: 'MINUTE',
                    intervalNum: 1,
                    limit: 1200,
                },
            ];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (wsAPI as any).onMessage(
                JSON.stringify({ id: 'test-id', status: 200, result: 'ok', rateLimits: rl }),
                connection
            );

            expect(mockResolve).toHaveBeenCalledWith({
                data: 'ok',
                rateLimits: rl,
            });
        });

        it('should reject pending requests with an error response', () => {
            const connection = connectionPool[0];
            connection.pendingRequests.set('test-id', {
                resolve: jest.fn(),
                reject: jest.fn(),
            });

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (wsAPI as any).onMessage(
                JSON.stringify({ id: 'test-id', status: 400, message: 'Error occurred' }),
                connection
            );

            const pendingRequest = connection.pendingRequests.get('test-id');
            expect(pendingRequest).toBeUndefined();
        });

        it('should log a warning for unknown responses', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (wsAPI as any).onMessage(
                JSON.stringify({ id: 'unknown-id', status: 200, data: 'success' }),
                connectionPool[0]
            );

            expect(mockLogger.warn).toHaveBeenCalledWith(
                'Received response for unknown or timed-out request:',
                expect.objectContaining({ id: 'unknown-id' })
            );
        });

        it('should log an error for invalid JSON messages', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (wsAPI as any).onMessage('invalid-json', connectionPool[0]);

            expect(mockLogger.error).toHaveBeenCalledWith(
                'Failed to parse WebSocket message:',
                'invalid-json',
                expect.any(SyntaxError)
            );
        });
    });

    describe('prepareURL()', () => {
        it('should return the base WebSocket URL if no timeUnit is configured', () => {
            const wsURL = 'wss://ws-api.binance.com:443/ws-api/v3';
            const result = wsAPI['prepareURL'](wsURL);

            expect(result).toBe(wsURL);
        });

        it('should append the timeUnit parameter to the URL if configured', () => {
            wsAPI.configuration.timeUnit = 'MILLISECOND';
            const wsURL = 'wss://ws-api.binance.com:443/ws-api/v3';
            const result = wsAPI['prepareURL'](wsURL);

            expect(result).toBe(`${wsURL}?timeUnit=MILLISECOND`);
        });

        it('should handle URLs that already have query parameters', () => {
            wsAPI.configuration.timeUnit = 'MILLISECOND';
            const wsURL = 'wss://ws-api.binance.com:443/ws-api/v3?existingParam=value';
            const result = wsAPI['prepareURL'](wsURL);

            expect(result).toBe(`${wsURL}&timeUnit=MILLISECOND`);
        });

        it('should log an error if timeUnit validation fails', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (wsAPI.configuration as any).timeUnit = 'invalid';

            const wsURL = 'wss://ws-api.binance.com:443/ws-api/v3';
            const result = wsAPI['prepareURL'](wsURL);

            expect(result).toBe(wsURL);
            expect(mockLogger.error).toHaveBeenCalledWith(expect.any(Error));
        });
    });
});

describe('WebsocketStreamsBase', () => {
    let wsStreams: WebsocketStreamsBase;
    let mockLogger: jest.Mocked<Logger>;
    let connectionPool: WebsocketConnection[];
    let mockWs: jest.Mocked<WebSocketClient> & EventEmitter;
    let configuration: ConfigurationWebsocketStreams;

    beforeEach(() => {
        jest.useFakeTimers();

        mockWs = createMockWebSocket(WebSocketClient.OPEN);

        mockLogger = {
            info: jest.fn(),
            error: jest.fn(),
            warn: jest.fn(),
            debug: jest.fn(),
            getInstance: jest.fn().mockReturnThis(),
        } as unknown as jest.Mocked<Logger>;

        (Logger.getInstance as jest.MockedFunction<typeof Logger.getInstance>).mockReturnValue(
            mockLogger
        );

        (WebSocketClient as jest.MockedClass<typeof WebSocketClient>).mockImplementation(() =>
            createMockWebSocket(WebSocketClient.OPEN)
        );

        connectionPool = [
            {
                id: 'b72e4deb66bf22b97b6193f688d233151',
                ws: createMockWebSocket(WebSocketClient.CLOSED),
                closeInitiated: false,
                reconnectionPending: false,
                renewalPending: false,
                pendingRequests: new Map(),
                pendingSubscriptions: [],
            },
            {
                id: 'b72e4deb66bf22b97b6193f688d233152',
                ws: createMockWebSocket(WebSocketClient.CLOSED),
                closeInitiated: false,
                reconnectionPending: false,
                renewalPending: false,
                pendingRequests: new Map(),
                pendingSubscriptions: [],
            },
        ];

        configuration = { wsURL: 'wss://test.com', mode: 'pool', poolSize: 2 };

        wsStreams = new WebsocketStreamsBase(configuration);
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    });

    describe('subscribe()', () => {
        beforeEach(() => {
            wsStreams.connectionPool.forEach((connection) => {
                connection.ws = createMockWebSocket(WebSocketClient.OPEN);
            });
        });

        it('should assign streams to connections and initiate subscriptions', () => {
            wsStreams.subscribe('stream1');
            wsStreams.subscribe('stream2');

            expect(wsStreams['streamConnectionMap'].get('stream1')).toBe(
                wsStreams.connectionPool[0]
            );
            expect(wsStreams['streamConnectionMap'].get('stream2')).toBe(
                wsStreams.connectionPool[1]
            );
            expect(wsStreams.connectionPool[0].pendingSubscriptions?.length).toBe(0);
            expect(wsStreams.connectionPool[1].pendingSubscriptions?.length).toBe(0);
        });

        it('should queue subscriptions for connections not ready', () => {
            wsStreams.connectionPool[0].ws = createMockWebSocket(WebSocketClient.CONNECTING);

            wsStreams.subscribe('stream1');

            expect(wsStreams.connectionPool[0].pendingSubscriptions).toEqual(['stream1']);
            expect(mockLogger.info).toHaveBeenCalledWith(
                'Connection is not ready. Queuing subscription for streams: stream1'
            );
        });

        it('should process queued subscriptions once connection is open', () => {
            wsStreams.subscribe(['stream1', 'stream2']);
            wsStreams.connectionPool[0].ws?.emit('open');

            expect(wsStreams.connectionPool[0].pendingSubscriptions).toEqual([]);
        });

        it('should send subscription payload for active connections', () => {
            wsStreams.subscribe('stream1');
            jest.advanceTimersByTime(1000);
            wsStreams.subscribe('stream2');
            jest.advanceTimersByTime(1000);
            wsStreams.subscribe('stream3');

            expect(mockLogger.info).toHaveBeenCalledTimes(3);
            expect(mockLogger.info).toHaveBeenCalledWith('SUBSCRIBE', expect.any(Object));
        });

        it('should send subscription payload for active connections with a custom id', () => {
            wsStreams.subscribe('stream1', 'b72e4deb66bf22b97b6193f688d23315');

            expect(mockLogger.info).toHaveBeenCalledTimes(1);
            expect(mockLogger.info).toHaveBeenCalledWith('SUBSCRIBE', {
                id: 'b72e4deb66bf22b97b6193f688d23315',
                method: 'SUBSCRIBE',
                params: ['stream1'],
            });
        });

        it('should handle bulk subscriptions efficiently', () => {
            const streams = Array.from({ length: 100 }, (_, i) => `stream${i}`);
            wsStreams.subscribe(streams);

            streams.forEach((stream) => {
                expect(wsStreams['streamConnectionMap'].has(stream)).toBe(true);
            });
        });

        it('should handle empty subscriptions gracefully', () => {
            wsStreams.subscribe([]);
            expect(mockLogger.info).not.toHaveBeenCalledWith('SUBSCRIBE', expect.any(Object));
        });

        it('should not send duplicate subscription requests for the same stream', () => {
            wsStreams.subscribe('stream1');
            wsStreams.subscribe('stream1');

            expect(wsStreams['streamConnectionMap'].get('stream1')).toBeDefined();
            expect(mockLogger.info).toHaveBeenCalledTimes(1);
        });
    });

    describe('unsubscribe()', () => {
        it('should send an unsubscribe payload for active connections', () => {
            wsStreams['streamConnectionMap'].set('stream1', connectionPool[0]);
            Object.defineProperty(connectionPool[0].ws, 'readyState', {
                value: WebSocketClient.OPEN,
            });

            wsStreams.unsubscribe('stream1');

            expect(mockLogger.info).toHaveBeenCalledWith('UNSUBSCRIBE', expect.any(Object));
            expect(wsStreams['streamConnectionMap'].has('stream1')).toBe(false);
        });

        it('should send an unsubscribe payload for active connections with a custom id', () => {
            wsStreams['streamConnectionMap'].set('stream1', connectionPool[0]);
            Object.defineProperty(connectionPool[0].ws, 'readyState', {
                value: WebSocketClient.OPEN,
            });

            wsStreams.unsubscribe('stream1', 'b72e4deb66bf22b97b6193f688d23315');

            expect(mockLogger.info).toHaveBeenCalledWith('UNSUBSCRIBE', {
                id: 'b72e4deb66bf22b97b6193f688d23315',
                method: 'UNSUBSCRIBE',
                params: ['stream1'],
            });
            expect(wsStreams['streamConnectionMap'].has('stream1')).toBe(false);
        });

        it('should not send an unsubscribe payload if stream in subscribed twice and callbacks exist', () => {
            wsStreams['streamConnectionMap'].set('stream1', connectionPool[0]);
            wsStreams['streamCallbackMap'].set('stream1', new Set());
            wsStreams['streamCallbackMap'].get('stream1')?.add(jest.fn());
            wsStreams['streamCallbackMap'].get('stream1')?.add(jest.fn());

            Object.defineProperty(connectionPool[0].ws, 'readyState', {
                value: WebSocketClient.OPEN,
            });

            wsStreams.unsubscribe('stream1');

            expect(mockLogger.info).not.toHaveBeenCalledWith('UNSUBSCRIBE', expect.any(Object));
            expect(wsStreams['streamConnectionMap'].has('stream1')).toBe(true);
            expect(wsStreams['streamCallbackMap'].has('stream1')).toBe(true);
        });

        it('should log a warning for streams not associated with active connections', () => {
            wsStreams.unsubscribe('stream1');

            expect(mockLogger.warn).toHaveBeenCalledWith(
                'Stream stream1 not associated with an active connection.'
            );
        });
    });

    describe('prepareURL()', () => {
        it('should construct a valid WebSocket URL with streams', () => {
            const streams = ['stream1', 'stream2'];
            const url = wsStreams['prepareURL'](streams);

            expect(url).toContain('stream?streams=stream1/stream2');
        });

        it('should append timeUnit if provided in configuration', () => {
            wsStreams['configuration'].timeUnit = 'MILLISECOND';
            const streams = ['stream1', 'stream2'];
            const url = wsStreams['prepareURL'](streams);

            expect(url).toContain('timeUnit=MILLISECOND');
        });
    });

    describe('handleStreamAssignment()', () => {
        beforeEach(() => {
            wsStreams = new WebsocketStreamsBase(configuration, connectionPool);

            Object.defineProperty(connectionPool[0].ws, 'readyState', {
                value: WebSocketClient.OPEN,
            });

            Object.defineProperty(connectionPool[1].ws, 'readyState', {
                value: WebSocketClient.OPEN,
            });
        });

        it('should assign streams to new connections if no existing assignment exists', () => {
            const connectionStreamMap = wsStreams['handleStreamAssignment'](['stream1', 'stream2']);

            expect(connectionStreamMap.get(connectionPool[0])).toEqual(['stream1']);
            expect(connectionStreamMap.get(connectionPool[1])).toEqual(['stream2']);
        });

        it('should reuse existing connections for previously assigned streams', () => {
            wsStreams['streamConnectionMap'].set('stream1', connectionPool[0]);

            const connectionStreamMap = wsStreams['handleStreamAssignment'](['stream1', 'stream2']);

            expect(connectionStreamMap.get(connectionPool[0])).toEqual(['stream1', 'stream2']);
            expect(connectionStreamMap.get(connectionPool[1])).toBeUndefined();
        });
    });

    describe('processPendingSubscriptions()', () => {
        it('should send all pending subscriptions and clear the queue', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsStreams as any, 'sendSubscriptionPayload').mockReturnValue({});
            connectionPool[0].pendingSubscriptions = ['stream1', 'stream2'];
            wsStreams['processPendingSubscriptions'](connectionPool[0]);

            expect(wsStreams['sendSubscriptionPayload']).toHaveBeenCalledWith(connectionPool[0], [
                'stream1',
                'stream2',
            ]);
            expect(connectionPool[0].pendingSubscriptions).toEqual([]);
        });

        it('should not send payload if there are no pending subscriptions', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsStreams as any, 'sendSubscriptionPayload');
            connectionPool[0].pendingSubscriptions = [];
            wsStreams['processPendingSubscriptions'](connectionPool[0]);

            expect(wsStreams['sendSubscriptionPayload']).not.toHaveBeenCalled();
            expect(connectionPool[0].pendingSubscriptions).toEqual([]);
        });
    });

    describe('sendSubscriptionPayload()', () => {
        it('should send a subscription payload for the specified streams', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsStreams as any, 'send').mockReturnValue({});

            const streams = ['stream1', 'stream2'];

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (wsStreams as any).sendSubscriptionPayload(connectionPool[0], streams);

            expect(wsStreams.logger.info).toHaveBeenCalledWith('SUBSCRIBE', {
                method: 'SUBSCRIBE',
                params: streams,
                id: expect.any(String),
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect((wsStreams as any).send).toHaveBeenCalledWith(
                expect.any(String),
                undefined,
                false,
                0,
                connectionPool[0]
            );
        });

        it('should send a subscription payload for the specified streams with a custom id', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsStreams as any, 'send').mockReturnValue({});

            const streams = ['stream1', 'stream2'];

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (wsStreams as any).sendSubscriptionPayload(
                connectionPool[0],
                streams,
                'b72e4deb66bf22b97b6193f688d23315'
            );

            expect(wsStreams.logger.info).toHaveBeenCalledWith('SUBSCRIBE', {
                method: 'SUBSCRIBE',
                params: streams,
                id: 'b72e4deb66bf22b97b6193f688d23315',
            });

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect((wsStreams as any).send).toHaveBeenCalledWith(
                expect.any(String),
                undefined,
                false,
                0,
                connectionPool[0]
            );
        });
    });

    describe('getReconnectURL()', () => {
        beforeEach(() => {
            wsStreams['streamConnectionMap'] = new Map([
                ['stream1', connectionPool[0]],
                ['stream2', connectionPool[0]],
                ['stream3', connectionPool[1]],
            ]);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsStreams as any, 'prepareURL');
        });

        it('should return the URL with streams assigned to the given connection', () => {
            const url = 'wss://test-url.com';

            const reconnectURL = wsStreams['getReconnectURL'](url, connectionPool[0]);

            expect(wsStreams['prepareURL']).toHaveBeenCalledWith(['stream1', 'stream2']);
            expect(reconnectURL).toContain('stream1');
            expect(reconnectURL).toContain('stream2');
            expect(reconnectURL).not.toContain('stream3');
        });

        it('should return the base URL if no streams are assigned to the given connection', () => {
            const url = 'wss://test-url.com';

            const reconnectURL = wsStreams['getReconnectURL'](url, connectionPool[2]);

            expect(wsStreams['prepareURL']).toHaveBeenCalledWith([]);
            expect(reconnectURL).toBe(wsStreams['prepareURL']([]));
        });
    });

    describe('onMessage()', () => {
        it('should invoke the correct callback for a valid stream', () => {
            const mockCallback = jest.fn();
            const mockData = JSON.stringify({ stream: 'stream1', data: { key: 'value' } });

            wsStreams.streamCallbackMap.set('stream1', new Set([mockCallback]));
            wsStreams['onMessage'](mockData, connectionPool[0]);

            expect(mockCallback).toHaveBeenCalledWith({ key: 'value' });
        });

        it('should log an error if the message is invalid JSON', () => {
            const invalidData = 'invalid-json';

            wsStreams['onMessage'](invalidData, connectionPool[0]);

            expect(mockLogger.error).toHaveBeenCalledWith(
                'Failed to parse WebSocket message:',
                invalidData,
                expect.any(SyntaxError)
            );
        });

        it('should log an error if the message does not contain a stream name', () => {
            const missingStreamData = JSON.stringify({ data: { key: 'value' } });

            wsStreams['onMessage'](missingStreamData, connectionPool[0]);

            expect(mockLogger.error).not.toHaveBeenCalled();
        });

        it('should not invoke any callback if the stream is not registered', () => {
            const mockData = JSON.stringify({
                stream: 'unregisteredStream',
                data: { key: 'value' },
            });

            wsStreams['onMessage'](mockData, connectionPool[0]);

            expect(mockLogger.error).not.toHaveBeenCalled();
        });
    });

    describe('onOpen()', () => {
        it('should process pending subscriptions when the connection opens', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsStreams as any, 'processPendingSubscriptions');

            wsStreams['onOpen']('wss://test.com', connectionPool[0], mockWs);

            expect(wsStreams['processPendingSubscriptions']).toHaveBeenCalledWith(
                connectionPool[0]
            );
        });

        it('should call the base class `onOpen` method', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const superOnOpenSpy = jest.spyOn(WebsocketStreamsBase.prototype as any, 'onOpen');

            wsStreams['onOpen']('wss://test.com', connectionPool[0], mockWs);

            expect(superOnOpenSpy).toHaveBeenCalledWith(
                'wss://test.com',
                connectionPool[0],
                mockWs
            );
        });

        it('should handle renewal connections correctly', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsStreams as any, 'processPendingSubscriptions');

            wsStreams['onOpen']('wss://test.com', connectionPool[0], mockWs);

            expect(wsStreams['processPendingSubscriptions']).toHaveBeenCalledWith(
                connectionPool[0]
            );
        });
    });

    describe('connect()', () => {
        it('should resolve when the connection pool establishes successfully', async () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsStreams as any, 'connectPool').mockResolvedValue({});

            await expect(wsStreams.connect('stream1')).resolves.toBeUndefined();
        });

        it('should reject if the connection fails', async () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsStreams as any, 'connectPool').mockRejectedValue(
                new Error('Connection failed')
            );

            await expect(wsStreams.connect('stream1')).rejects.toThrow('Connection failed');
        });

        it('should call `prepareURL` with the provided streams', async () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const prepareURLSpy = jest.spyOn(wsStreams as any, 'prepareURL');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jest.spyOn(wsStreams as any, 'connectPool').mockResolvedValue({});

            await wsStreams.connect(['stream1', 'stream2']);

            expect(prepareURLSpy).toHaveBeenCalledWith(['stream1', 'stream2']);
        });
    });

    describe('disconnect()', () => {
        it('should clear the streamCallbackMap', async () => {
            wsStreams['streamCallbackMap'].set('stream1', new Set([jest.fn()]));
            wsStreams['streamCallbackMap'].set('stream2', new Set([jest.fn()]));

            expect(wsStreams['streamCallbackMap'].size).toBe(2);

            await wsStreams.disconnect();

            expect(wsStreams['streamCallbackMap'].size).toBe(0);
        });

        it('should clear the streamConnectionMap', async () => {
            wsStreams['streamConnectionMap'].set('stream1', connectionPool[0]);
            wsStreams['streamConnectionMap'].set('stream2', connectionPool[1]);

            expect(wsStreams['streamConnectionMap'].size).toBe(2);

            await wsStreams.disconnect();

            expect(wsStreams['streamConnectionMap'].size).toBe(0);
        });

        it('should call the parent class disconnect method', async () => {
            const superDisconnectSpy = jest.spyOn(WebsocketStreamsBase.prototype, 'disconnect');

            await wsStreams.disconnect();

            expect(superDisconnectSpy).toHaveBeenCalled();
        });

        it('should handle an already empty streamCallbackMap and streamConnectionMap gracefully', async () => {
            expect(wsStreams['streamCallbackMap'].size).toBe(0);
            expect(wsStreams['streamConnectionMap'].size).toBe(0);

            await expect(wsStreams.disconnect()).resolves.not.toThrow();
        });

        it('should not throw if disconnect is called multiple times', async () => {
            await wsStreams.disconnect();
            await expect(wsStreams.disconnect()).resolves.not.toThrow();
        });
    });

    describe('isSubscribed()', () => {
        it('should return true if the stream is subscribed', () => {
            wsStreams['streamConnectionMap'].set('stream1', connectionPool[0]);

            expect(wsStreams.isSubscribed('stream1')).toBe(true);
        });

        it('should return false if the stream is not subscribed', () => {
            expect(wsStreams.isSubscribed('nonexistentStream')).toBe(false);
        });

        it('should handle edge cases with empty or invalid stream names', () => {
            expect(wsStreams.isSubscribed('')).toBe(false);
            expect(wsStreams.isSubscribed(null as never)).toBe(false);
            expect(wsStreams.isSubscribed(undefined as never)).toBe(false);
        });
    });
});
