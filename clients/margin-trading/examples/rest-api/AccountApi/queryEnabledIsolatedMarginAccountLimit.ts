import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function queryEnabledIsolatedMarginAccountLimit() {
    try {
        const response = await client.restAPI.queryEnabledIsolatedMarginAccountLimit();

        const rateLimits = response.rateLimits!;
        console.log('queryEnabledIsolatedMarginAccountLimit() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryEnabledIsolatedMarginAccountLimit() response:', data);
    } catch (error) {
        console.error('queryEnabledIsolatedMarginAccountLimit() error:', error);
    }
}

queryEnabledIsolatedMarginAccountLimit();
