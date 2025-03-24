import { Spot, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function allOrderLists() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.allOrderLists();

        const rateLimits = response.rateLimits!;
        console.log('allOrderLists() rate limits:', rateLimits);

        const data = response.data;
        console.log('allOrderLists() response:', data);
    } catch (error) {
        console.error('allOrderLists() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

allOrderLists();
