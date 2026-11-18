import { StockOptions, STOCK_OPTIONS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCK_OPTIONS_REST_API_PROD_URL,
};
const client = new StockOptions({ configurationRestAPI });

async function currentOpenOptionOrders() {
    try {
        const response = await client.restAPI.currentOpenOptionOrders();

        const rateLimits = response.rateLimits!;
        console.log('currentOpenOptionOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('currentOpenOptionOrders() response:', data);
    } catch (error) {
        console.error('currentOpenOptionOrders() error:', error);
    }
}

currentOpenOptionOrders();
