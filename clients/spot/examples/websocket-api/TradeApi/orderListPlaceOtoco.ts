import { Spot, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function orderListPlaceOtoco() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.orderListPlaceOtoco({
            symbol: 'BNBUSDT',
            workingPrice: 1,
            workingQuantity: 1,
            pendingQuantity: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListPlaceOtoco() rate limits:', rateLimits);

        const data = response.data;
        console.log('orderListPlaceOtoco() response:', data);
    } catch (error) {
        console.error('orderListPlaceOtoco() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

orderListPlaceOtoco();
