import { Spot, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function openOrderListsStatus() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.openOrderListsStatus();

        const rateLimits = response.rateLimits!;
        console.log('openOrderListsStatus() rate limits:', rateLimits);

        const data = response.data;
        console.log('openOrderListsStatus() response:', data);
    } catch (error) {
        console.error('openOrderListsStatus() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

openOrderListsStatus();
