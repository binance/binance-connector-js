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

async function usersForceOrders() {
    try {
        const response = await client.restAPI.usersForceOrders();

        const rateLimits = response.rateLimits!;
        console.log('usersForceOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('usersForceOrders() response:', data);
    } catch (error) {
        console.error('usersForceOrders() error:', error);
    }
}

usersForceOrders();
