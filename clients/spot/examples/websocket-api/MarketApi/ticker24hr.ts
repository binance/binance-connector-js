import { Spot, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function ticker24hr() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.ticker24hr();

        const rateLimits = response.rateLimits!;
        console.log('ticker24hr() rate limits:', rateLimits);

        const data = response.data;
        console.log('ticker24hr() response:', data);
    } catch (error) {
        console.error('ticker24hr() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

ticker24hr();
