import { Convert, CONVERT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CONVERT_REST_API_PROD_URL,
};
const client = new Convert({ configurationRestAPI });

async function queryLimitOpenOrders() {
    try {
        const response = await client.restAPI.queryLimitOpenOrders();

        const rateLimits = response.rateLimits!;
        console.log('queryLimitOpenOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryLimitOpenOrders() response:', data);
    } catch (error) {
        console.error('queryLimitOpenOrders() error:', error);
    }
}

queryLimitOpenOrders();
