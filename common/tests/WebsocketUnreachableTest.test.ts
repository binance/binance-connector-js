import net from 'net';
import { setImmediate as nextTick } from 'timers/promises';
import { expect, describe, it, beforeEach, afterEach, jest } from '@jest/globals';
import { WebsocketAPIBase, WebsocketStreamsBase } from '../src';

async function getClosedPort(): Promise<number> {
    return new Promise((resolve, reject) => {
        const server = net.createServer();

        server.once('error', reject);
        server.listen(0, '127.0.0.1', () => {
            const { port } = server.address() as net.AddressInfo;
            server.close(() => resolve(port));
        });
    });
}

describe('Websocket connection to an unreachable server', () => {
    const uncaught: unknown[] = [];
    const onUncaught = (err: unknown) => uncaught.push(err);
    let clients: Array<WebsocketAPIBase | WebsocketStreamsBase> = [];

    beforeEach(() => {
        jest.spyOn(console, 'info').mockImplementation(() => undefined);
        jest.spyOn(console, 'warn').mockImplementation(() => undefined);
        jest.spyOn(console, 'error').mockImplementation(() => undefined);
        process.removeAllListeners('uncaughtException');
        process.on('uncaughtException', onUncaught);
    });

    afterEach(() => {
        process.off('uncaughtException', onUncaught);

        for (const client of clients) {
            const timers = (
                client as unknown as {
                    connectionTimers: Map<unknown, Set<{ timer?: NodeJS.Timeout }>>;
                }
            ).connectionTimers;

            for (const records of timers.values())
                for (const { timer } of records) clearTimeout(timer);
        }

        clients = [];
        uncaught.length = 0;
        jest.restoreAllMocks();
    });

    it('rejects WebsocketAPIBase.connect() without an uncaught error event', async () => {
        const port = await getClosedPort();
        const client = new WebsocketAPIBase({
            wsURL: `ws://127.0.0.1:${port}`,
            apiKey: 'x',
            apiSecret: 'x',
            reconnectDelay: 60000,
            timeout: 5000,
        });
        clients.push(client);

        await expect(client.connect()).rejects.toMatchObject({ code: 'ECONNREFUSED' });
        await nextTick();
        expect(uncaught).toEqual([]);
    });

    it('rejects WebsocketStreamsBase.connect() without an uncaught error event', async () => {
        const port = await getClosedPort();
        const client = new WebsocketStreamsBase({
            wsURL: `ws://127.0.0.1:${port}`,
            reconnectDelay: 60000,
        });
        clients.push(client);

        await expect(client.connect('btcusdt@trade')).rejects.toMatchObject({
            code: 'ECONNREFUSED',
        });

        await nextTick();
        expect(uncaught).toEqual([]);
    });
});
