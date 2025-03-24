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

async function accountBlockTradeList() {
    try {
        const response = await client.restAPI.accountBlockTradeList();

        const rateLimits = response.rateLimits!;
        console.log('accountBlockTradeList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('accountBlockTradeList() response:', data);
    } catch (error) {
        console.error('accountBlockTradeList() error:', error);
    }
}

accountBlockTradeList();
