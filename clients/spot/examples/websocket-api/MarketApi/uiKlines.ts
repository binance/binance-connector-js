import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function uiKlines() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.uiKlines({
            symbol: 'BNBUSDT',
            interval: SpotWebsocketAPI.UiKlinesIntervalEnum.INTERVAL_1s,
        });

        const rateLimits = response.rateLimits!;
        console.log('uiKlines() rate limits:', rateLimits);

        const data = response.data;
        console.log('uiKlines() response:', data);
    } catch (error) {
        console.error('uiKlines() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

uiKlines();
