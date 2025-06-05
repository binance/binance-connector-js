import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function allOrders() {
    try {
        const response = await client.restAPI.allOrders({
            symbol: 'BNBUSDT',
        });

        const rateLimits = response.rateLimits!;
        console.log('allOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('allOrders() response:', data);
    } catch (error) {
        console.error('allOrders() error:', error);
    }
}

allOrders();
