import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function orderOco() {
    try {
        const response = await client.restAPI.orderOco({
            symbol: 'BNBUSDT',
            quantity: 1.0,
            price: 1.0,
            stopPrice: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderOco() rate limits:', rateLimits);

        const data = await response.data();
        console.log('orderOco() response:', data);
    } catch (error) {
        console.error('orderOco() error:', error);
    }
}

orderOco();
