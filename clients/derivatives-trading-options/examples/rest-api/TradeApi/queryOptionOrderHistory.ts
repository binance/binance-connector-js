import {
    DerivativesTradingOptions,
    DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
};
const client = new DerivativesTradingOptions({ configurationRestAPI });

async function queryOptionOrderHistory() {
    try {
        const response = await client.restAPI.queryOptionOrderHistory({
            symbol: 'symbol_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryOptionOrderHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryOptionOrderHistory() response:', data);
    } catch (error) {
        console.error('queryOptionOrderHistory() error:', error);
    }
}

queryOptionOrderHistory();
