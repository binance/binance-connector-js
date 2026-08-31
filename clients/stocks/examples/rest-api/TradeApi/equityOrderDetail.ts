import { Stocks, STOCKS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCKS_REST_API_PROD_URL,
};
const client = new Stocks({ configurationRestAPI });

async function equityOrderDetail() {
    try {
        const response = await client.restAPI.equityOrderDetail();

        const rateLimits = response.rateLimits!;
        console.log('equityOrderDetail() rate limits:', rateLimits);

        const data = await response.data();
        console.log('equityOrderDetail() response:', data);
    } catch (error) {
        console.error('equityOrderDetail() error:', error);
    }
}

equityOrderDetail();
