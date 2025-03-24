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

async function acceptBlockTradeOrder() {
    try {
        const response = await client.restAPI.acceptBlockTradeOrder({
            blockOrderMatchingKey: 'blockOrderMatchingKey_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('acceptBlockTradeOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('acceptBlockTradeOrder() response:', data);
    } catch (error) {
        console.error('acceptBlockTradeOrder() error:', error);
    }
}

acceptBlockTradeOrder();
