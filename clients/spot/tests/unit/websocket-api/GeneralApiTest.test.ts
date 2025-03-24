/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Binance Public Spot WebSocket API
 *
 * OpenAPI Specifications for the Binance Public Spot WebSocket API
 *
 * API documents:
 * - [Github web-socket-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-api.md)
 * - [General API information for web-socket-api on website](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/general-api-information)
 *
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import WebSocketClient from 'ws';
import { EventEmitter } from 'events';
import { jest, expect, beforeEach, afterEach, describe, it } from '@jest/globals';
import { ConfigurationWebsocketAPI, WebsocketAPIBase, randomString } from '@binance/common';

import { GeneralApi } from '../../../src/websocket-api';
import { ExchangeInfoRequest } from '../../../src/websocket-api';

jest.mock('ws');

describe('GeneralApi', () => {
    let websocketBase: WebsocketAPIBase;
    let websocketAPIClient: GeneralApi;
    let mockWs: jest.Mocked<WebSocketClient> & EventEmitter;
    let mockResponse: {
        id?: string;
        status?: number;
        result?: object | null;
        response?: object | null;
        error?: {
            code?: number;
            msg?: string;
        };
        rateLimits?: object[];
    } = {};

    describe('exchangeInfo()', () => {
        beforeEach(async () => {
            mockWs = Object.assign(new EventEmitter(), {
                close: jest.fn(),
                ping: jest.fn(),
                pong: jest.fn(),
                send: jest.fn(),
                readyState: WebSocketClient.OPEN,
                OPEN: WebSocket.OPEN,
                CLOSED: WebSocket.CLOSED,
            }) as unknown as jest.Mocked<WebSocketClient> & EventEmitter;

            (WebSocketClient as jest.MockedClass<typeof WebSocketClient>).mockImplementation(
                () => mockWs
            );

            const config = new ConfigurationWebsocketAPI({
                apiKey: 'test-api-key',
                apiSecret: 'test-api-secret',
                wsURL: 'ws://localhost:3000',
                timeout: 1000,
            });

            websocketBase = new WebsocketAPIBase(config);
            websocketBase.connect();
        });

        afterEach(async () => {
            if (websocketBase) {
                await websocketBase.disconnect();
            }
            jest.clearAllMocks();
            jest.clearAllTimers();
        });

        it('should execute exchangeInfo() successfully', async () => {
            mockResponse = {
                id: '5494febb-d167-46a2-996d-70533eb4d976',
                status: 200,
                result: {
                    timezone: 'UTC',
                    serverTime: 1655969291181,
                    rateLimits: [
                        {
                            rateLimitType: 'REQUEST_WEIGHT',
                            interval: 'MINUTE',
                            intervalNum: 1,
                            limit: 6000,
                        },
                        { rateLimitType: 'ORDERS', interval: 'SECOND', intervalNum: 10, limit: 50 },
                        { rateLimitType: 'ORDERS', interval: 'DAY', intervalNum: 1, limit: 160000 },
                        {
                            rateLimitType: 'CONNECTIONS',
                            interval: 'MINUTE',
                            intervalNum: 5,
                            limit: 300,
                        },
                    ],
                    exchangeFilters: [],
                    symbols: [
                        {
                            symbol: 'BNBBTC',
                            status: 'TRADING',
                            baseAsset: 'BNB',
                            baseAssetPrecision: 8,
                            quoteAsset: 'BTC',
                            quotePrecision: 8,
                            quoteAssetPrecision: 8,
                            baseCommissionPrecision: 8,
                            quoteCommissionPrecision: 8,
                            orderTypes: [
                                'LIMIT LIMIT_MAKER MARKET STOP_LOSS_LIMIT TAKE_PROFIT_LIMIT',
                            ],
                            icebergAllowed: true,
                            ocoAllowed: true,
                            otoAllowed: true,
                            quoteOrderQtyMarketAllowed: true,
                            allowTrailingStop: true,
                            cancelReplaceAllowed: true,
                            isSpotTradingAllowed: true,
                            isMarginTradingAllowed: true,
                            filters: [
                                {
                                    filterType: 'PRICE_FILTER',
                                    minPrice: '0.00000100',
                                    maxPrice: '100000.00000000',
                                    tickSize: '0.00000100',
                                },
                                {
                                    filterType: 'LOT_SIZE',
                                    minQty: '0.00100000',
                                    maxQty: '100000.00000000',
                                    stepSize: '0.00100000',
                                },
                            ],
                            permissions: [],
                            permissionSets: [['SPOT', 'MARGIN', 'TRD_GRP_004']],
                            defaultSelfTradePreventionMode: 'NONE',
                            allowedSelfTradePreventionModes: ['NONE'],
                        },
                    ],
                    sors: [{ baseAsset: 'BTC', symbols: ['BTCUSDT BTCUSDC'] }],
                },
                rateLimits: [
                    {
                        rateLimitType: 'REQUEST_WEIGHT',
                        interval: 'MINUTE',
                        intervalNum: 1,
                        limit: 6000,
                        count: 20,
                    },
                ],
            };
            mockResponse.id = randomString();

            const params: ExchangeInfoRequest = {
                symbol: 'BNBUSDT',
            };

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new GeneralApi(conn);
                    const sendMsgSpy = jest.spyOn(conn, 'sendMessage');
                    const responsePromise = websocketAPIClient.exchangeInfo({
                        id: mockResponse?.id,
                        ...params,
                    });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    const response = await responsePromise;
                    expect(response.data).toEqual(mockResponse.result);
                    expect(response.rateLimits).toEqual(mockResponse.rateLimits);
                    expect(sendMsgSpy).toHaveBeenCalledWith('/exchangeInfo'.slice(1), params, {
                        isSigned: false,
                        withApiKey: false,
                    });
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle server error responses gracefully', async () => {
            mockResponse = {
                id: randomString(),
                status: 400,
                error: {
                    code: -2010,
                    msg: 'Account has insufficient balance for requested action.',
                },
                rateLimits: [
                    {
                        rateLimitType: 'ORDERS',
                        interval: 'SECOND',
                        intervalNum: 10,
                        limit: 50,
                        count: 13,
                    },
                ],
            };

            const params: ExchangeInfoRequest = {
                symbol: 'BNBUSDT',
            };

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new GeneralApi(conn);
                    const responsePromise = websocketAPIClient.exchangeInfo({
                        id: mockResponse?.id,
                        ...params,
                    });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    await expect(responsePromise).rejects.toMatchObject(mockResponse.error!);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle request timeout gracefully', async () => {
            jest.useRealTimers();

            const params: ExchangeInfoRequest = {
                symbol: 'BNBUSDT',
            };

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new GeneralApi(websocketBase);
                    const responsePromise = websocketAPIClient.exchangeInfo(params);
                    await expect(responsePromise).rejects.toThrow(/^Request timeout for id:/);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        }, 10000);
    });

    describe('ping()', () => {
        beforeEach(async () => {
            mockWs = Object.assign(new EventEmitter(), {
                close: jest.fn(),
                ping: jest.fn(),
                pong: jest.fn(),
                send: jest.fn(),
                readyState: WebSocketClient.OPEN,
                OPEN: WebSocket.OPEN,
                CLOSED: WebSocket.CLOSED,
            }) as unknown as jest.Mocked<WebSocketClient> & EventEmitter;

            (WebSocketClient as jest.MockedClass<typeof WebSocketClient>).mockImplementation(
                () => mockWs
            );

            const config = new ConfigurationWebsocketAPI({
                apiKey: 'test-api-key',
                apiSecret: 'test-api-secret',
                wsURL: 'ws://localhost:3000',
                timeout: 1000,
            });

            websocketBase = new WebsocketAPIBase(config);
            websocketBase.connect();
        });

        afterEach(async () => {
            if (websocketBase) {
                await websocketBase.disconnect();
            }
            jest.clearAllMocks();
            jest.clearAllTimers();
        });

        it('should execute ping() successfully', async () => {
            mockResponse.id = randomString();

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new GeneralApi(conn);
                    const sendMsgSpy = jest.spyOn(conn, 'sendMessage');
                    const responsePromise = websocketAPIClient.ping({ id: mockResponse?.id });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    const response = await responsePromise;
                    expect(response.data).toEqual(mockResponse.result);
                    expect(response.rateLimits).toEqual(mockResponse.rateLimits);
                    expect(sendMsgSpy).toHaveBeenCalledWith('/ping'.slice(1), expect.any(Object), {
                        isSigned: false,
                        withApiKey: false,
                    });
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle server error responses gracefully', async () => {
            mockResponse = {
                id: randomString(),
                status: 400,
                error: {
                    code: -2010,
                    msg: 'Account has insufficient balance for requested action.',
                },
                rateLimits: [
                    {
                        rateLimitType: 'ORDERS',
                        interval: 'SECOND',
                        intervalNum: 10,
                        limit: 50,
                        count: 13,
                    },
                ],
            };

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new GeneralApi(conn);
                    const responsePromise = websocketAPIClient.ping({ id: mockResponse?.id });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    await expect(responsePromise).rejects.toMatchObject(mockResponse.error!);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle request timeout gracefully', async () => {
            jest.useRealTimers();

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new GeneralApi(websocketBase);
                    const responsePromise = websocketAPIClient.ping();
                    await expect(responsePromise).rejects.toThrow(/^Request timeout for id:/);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        }, 10000);
    });

    describe('time()', () => {
        beforeEach(async () => {
            mockWs = Object.assign(new EventEmitter(), {
                close: jest.fn(),
                ping: jest.fn(),
                pong: jest.fn(),
                send: jest.fn(),
                readyState: WebSocketClient.OPEN,
                OPEN: WebSocket.OPEN,
                CLOSED: WebSocket.CLOSED,
            }) as unknown as jest.Mocked<WebSocketClient> & EventEmitter;

            (WebSocketClient as jest.MockedClass<typeof WebSocketClient>).mockImplementation(
                () => mockWs
            );

            const config = new ConfigurationWebsocketAPI({
                apiKey: 'test-api-key',
                apiSecret: 'test-api-secret',
                wsURL: 'ws://localhost:3000',
                timeout: 1000,
            });

            websocketBase = new WebsocketAPIBase(config);
            websocketBase.connect();
        });

        afterEach(async () => {
            if (websocketBase) {
                await websocketBase.disconnect();
            }
            jest.clearAllMocks();
            jest.clearAllTimers();
        });

        it('should execute time() successfully', async () => {
            mockResponse = {
                id: '187d3cb2-942d-484c-8271-4e2141bbadb1',
                status: 200,
                result: { serverTime: 1656400526260 },
                rateLimits: [
                    {
                        rateLimitType: 'REQUEST_WEIGHT',
                        interval: 'MINUTE',
                        intervalNum: 1,
                        limit: 6000,
                        count: 1,
                    },
                ],
            };
            mockResponse.id = randomString();

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new GeneralApi(conn);
                    const sendMsgSpy = jest.spyOn(conn, 'sendMessage');
                    const responsePromise = websocketAPIClient.time({ id: mockResponse?.id });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    const response = await responsePromise;
                    expect(response.data).toEqual(mockResponse.result);
                    expect(response.rateLimits).toEqual(mockResponse.rateLimits);
                    expect(sendMsgSpy).toHaveBeenCalledWith('/time'.slice(1), expect.any(Object), {
                        isSigned: false,
                        withApiKey: false,
                    });
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle server error responses gracefully', async () => {
            mockResponse = {
                id: randomString(),
                status: 400,
                error: {
                    code: -2010,
                    msg: 'Account has insufficient balance for requested action.',
                },
                rateLimits: [
                    {
                        rateLimitType: 'ORDERS',
                        interval: 'SECOND',
                        intervalNum: 10,
                        limit: 50,
                        count: 13,
                    },
                ],
            };

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new GeneralApi(conn);
                    const responsePromise = websocketAPIClient.time({ id: mockResponse?.id });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    await expect(responsePromise).rejects.toMatchObject(mockResponse.error!);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle request timeout gracefully', async () => {
            jest.useRealTimers();

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new GeneralApi(websocketBase);
                    const responsePromise = websocketAPIClient.time();
                    await expect(responsePromise).rejects.toThrow(/^Request timeout for id:/);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        }, 10000);
    });
});
