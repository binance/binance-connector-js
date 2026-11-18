import { StockOptions, STOCK_OPTIONS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCK_OPTIONS_REST_API_PROD_URL,
};
const client = new StockOptions({ configurationRestAPI });

async function cancelOptionOrder() {
    try {
        const response = await client.restAPI.cancelOptionOrder({
            orderId: 'c3c58f49-7b0d-4b9e-a2db-1a2f9a3b8c71',
        });

        const rateLimits = response.rateLimits!;
        console.log('cancelOptionOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cancelOptionOrder() response:', data);
    } catch (error) {
        console.error('cancelOptionOrder() error:', error);
    }
}

cancelOptionOrder();
