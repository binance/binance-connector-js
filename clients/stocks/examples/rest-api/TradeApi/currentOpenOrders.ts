import { Stocks, STOCKS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCKS_REST_API_PROD_URL,
};
const client = new Stocks({ configurationRestAPI });

async function currentOpenOrders() {
    try {
        const response = await client.restAPI.currentOpenOrders();

        const rateLimits = response.rateLimits!;
        console.log('currentOpenOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('currentOpenOrders() response:', data);
    } catch (error) {
        console.error('currentOpenOrders() error:', error);
    }
}

currentOpenOrders();
