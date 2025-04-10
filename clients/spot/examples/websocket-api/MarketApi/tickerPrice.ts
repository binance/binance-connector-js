import { Spot, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function tickerPrice() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.tickerPrice();

        const rateLimits = response.rateLimits!;
        console.log('tickerPrice() rate limits:', rateLimits);

        const data = response.data;
        console.log('tickerPrice() response:', data);
    } catch (error) {
        console.error('tickerPrice() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

tickerPrice();
