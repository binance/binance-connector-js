import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function orderListOtoco() {
    try {
        const response = await client.restAPI.orderListOtoco({
            symbol: 'BNBUSDT',
            workingPrice: 1,
            workingQuantity: 1,
            pendingQuantity: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListOtoco() rate limits:', rateLimits);

        const data = await response.data();
        console.log('orderListOtoco() response:', data);
    } catch (error) {
        console.error('orderListOtoco() error:', error);
    }
}

orderListOtoco();
