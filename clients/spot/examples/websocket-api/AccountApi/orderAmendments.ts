import { Spot, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function orderAmendments() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.orderAmendments({
            symbol: 'BNBUSDT',
            orderId: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderAmendments() rate limits:', rateLimits);

        const data = response.data;
        console.log('orderAmendments() response:', data);
    } catch (error) {
        console.error('orderAmendments() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

orderAmendments();
