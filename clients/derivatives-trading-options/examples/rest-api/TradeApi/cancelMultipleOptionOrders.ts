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

async function cancelMultipleOptionOrders() {
    try {
        const response = await client.restAPI.cancelMultipleOptionOrders({
            symbol: 'symbol_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('cancelMultipleOptionOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cancelMultipleOptionOrders() response:', data);
    } catch (error) {
        console.error('cancelMultipleOptionOrders() error:', error);
    }
}

cancelMultipleOptionOrders();
