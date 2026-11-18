import { StockOptions, STOCK_OPTIONS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCK_OPTIONS_REST_API_PROD_URL,
};
const client = new StockOptions({ configurationRestAPI });

async function optionOrderDetail() {
    try {
        const response = await client.restAPI.optionOrderDetail();

        const rateLimits = response.rateLimits!;
        console.log('optionOrderDetail() rate limits:', rateLimits);

        const data = await response.data();
        console.log('optionOrderDetail() response:', data);
    } catch (error) {
        console.error('optionOrderDetail() error:', error);
    }
}

optionOrderDetail();
