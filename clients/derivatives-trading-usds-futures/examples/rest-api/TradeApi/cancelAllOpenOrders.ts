import {
    DerivativesTradingUsdsFutures,
    DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
};
const client = new DerivativesTradingUsdsFutures({ configurationRestAPI });

async function cancelAllOpenOrders() {
    try {
        const response = await client.restAPI.cancelAllOpenOrders({
            symbol: 'symbol_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('cancelAllOpenOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cancelAllOpenOrders() response:', data);
    } catch (error) {
        console.error('cancelAllOpenOrders() error:', error);
    }
}

cancelAllOpenOrders();
