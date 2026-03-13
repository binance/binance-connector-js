import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function referencePrice() {
    try {
        const response = await client.restAPI.referencePrice({
            symbol: 'BNBUSDT',
        });

        const rateLimits = response.rateLimits!;
        console.log('referencePrice() rate limits:', rateLimits);

        const data = await response.data();
        console.log('referencePrice() response:', data);
    } catch (error) {
        console.error('referencePrice() error:', error);
    }
}

referencePrice();
