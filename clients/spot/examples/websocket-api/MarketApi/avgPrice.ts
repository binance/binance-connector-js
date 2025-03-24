import { Spot, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function avgPrice() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.avgPrice({
            symbol: 'BNBUSDT',
        });

        const rateLimits = response.rateLimits!;
        console.log('avgPrice() rate limits:', rateLimits);

        const data = response.data;
        console.log('avgPrice() response:', data);
    } catch (error) {
        console.error('avgPrice() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

avgPrice();
