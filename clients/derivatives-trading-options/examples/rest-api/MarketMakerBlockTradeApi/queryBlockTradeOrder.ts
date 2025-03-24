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

async function queryBlockTradeOrder() {
    try {
        const response = await client.restAPI.queryBlockTradeOrder();

        const rateLimits = response.rateLimits!;
        console.log('queryBlockTradeOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryBlockTradeOrder() response:', data);
    } catch (error) {
        console.error('queryBlockTradeOrder() error:', error);
    }
}

queryBlockTradeOrder();
