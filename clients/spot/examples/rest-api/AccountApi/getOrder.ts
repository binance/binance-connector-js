import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function getOrder() {
    try {
        const response = await client.restAPI.getOrder({
            symbol: 'BNBUSDT',
        });

        const rateLimits = response.rateLimits!;
        console.log('getOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getOrder() response:', data);
    } catch (error) {
        console.error('getOrder() error:', error);
    }
}

getOrder();
