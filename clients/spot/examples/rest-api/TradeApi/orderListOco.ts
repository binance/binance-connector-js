import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function orderListOco() {
    try {
        const response = await client.restAPI.orderListOco({
            symbol: 'BNBUSDT',
            quantity: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListOco() rate limits:', rateLimits);

        const data = await response.data();
        console.log('orderListOco() response:', data);
    } catch (error) {
        console.error('orderListOco() error:', error);
    }
}

orderListOco();
