import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function queryIsolatedMarginAccountInfo() {
    try {
        const response = await client.restAPI.queryIsolatedMarginAccountInfo();

        const rateLimits = response.rateLimits!;
        console.log('queryIsolatedMarginAccountInfo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryIsolatedMarginAccountInfo() response:', data);
    } catch (error) {
        console.error('queryIsolatedMarginAccountInfo() error:', error);
    }
}

queryIsolatedMarginAccountInfo();
