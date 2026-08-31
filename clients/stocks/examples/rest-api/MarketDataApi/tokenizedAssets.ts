import { Stocks, STOCKS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCKS_REST_API_PROD_URL,
};
const client = new Stocks({ configurationRestAPI });

async function tokenizedAssets() {
    try {
        const response = await client.restAPI.tokenizedAssets();

        const rateLimits = response.rateLimits!;
        console.log('tokenizedAssets() rate limits:', rateLimits);

        const data = await response.data();
        console.log('tokenizedAssets() response:', data);
    } catch (error) {
        console.error('tokenizedAssets() error:', error);
    }
}

tokenizedAssets();
