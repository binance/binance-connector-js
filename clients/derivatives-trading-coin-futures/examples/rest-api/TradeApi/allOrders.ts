import {
    DerivativesTradingCoinFutures,
    DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL,
};
const client = new DerivativesTradingCoinFutures({ configurationRestAPI });

async function allOrders() {
    try {
        const response = await client.restAPI.allOrders();

        const rateLimits = response.rateLimits!;
        console.log('allOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('allOrders() response:', data);
    } catch (error) {
        console.error('allOrders() error:', error);
    }
}

allOrders();
