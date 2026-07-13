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

async function cancelBlockTradeOrder() {
    try {
        const response = await client.restAPI.cancelBlockTradeOrder({
            blockOrderMatchingKey: '7d046e6e-a429-4335-ab9d-6a681febcde5',
        });

        const rateLimits = response.rateLimits!;
        console.log('cancelBlockTradeOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cancelBlockTradeOrder() response:', data);
    } catch (error) {
        console.error('cancelBlockTradeOrder() error:', error);
    }
}

cancelBlockTradeOrder();
