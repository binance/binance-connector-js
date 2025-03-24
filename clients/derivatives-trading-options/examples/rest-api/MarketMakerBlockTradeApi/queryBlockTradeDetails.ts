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

async function queryBlockTradeDetails() {
    try {
        const response = await client.restAPI.queryBlockTradeDetails({
            blockOrderMatchingKey: 'blockOrderMatchingKey_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryBlockTradeDetails() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryBlockTradeDetails() response:', data);
    } catch (error) {
        console.error('queryBlockTradeDetails() error:', error);
    }
}

queryBlockTradeDetails();
