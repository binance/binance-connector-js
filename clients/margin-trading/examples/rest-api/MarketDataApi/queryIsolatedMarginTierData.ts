import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function queryIsolatedMarginTierData() {
    try {
        const response = await client.restAPI.queryIsolatedMarginTierData({
            symbol: 'symbol_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryIsolatedMarginTierData() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryIsolatedMarginTierData() response:', data);
    } catch (error) {
        console.error('queryIsolatedMarginTierData() error:', error);
    }
}

queryIsolatedMarginTierData();
