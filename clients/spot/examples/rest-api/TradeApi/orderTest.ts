import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function orderTest() {
    try {
        const response = await client.restAPI.orderTest();

        const rateLimits = response.rateLimits!;
        console.log('orderTest() rate limits:', rateLimits);

        const data = await response.data();
        console.log('orderTest() response:', data);
    } catch (error) {
        console.error('orderTest() error:', error);
    }
}

orderTest();
