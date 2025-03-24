import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function getRateHistory() {
    try {
        const response = await client.restAPI.getRateHistory({
            productId: '1',
        });

        const rateLimits = response.rateLimits!;
        console.log('getRateHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getRateHistory() response:', data);
    } catch (error) {
        console.error('getRateHistory() error:', error);
    }
}

getRateHistory();
