import { Pay, PAY_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? PAY_REST_API_PROD_URL,
};
const client = new Pay({ configurationRestAPI });

async function getPayTradeHistory() {
    try {
        const response = await client.restAPI.getPayTradeHistory();

        const rateLimits = response.rateLimits!;
        console.log('getPayTradeHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getPayTradeHistory() response:', data);
    } catch (error) {
        console.error('getPayTradeHistory() error:', error);
    }
}

getPayTradeHistory();
