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

async function getCurrentPositionMode() {
    try {
        const response = await client.restAPI.getCurrentPositionMode();

        const rateLimits = response.rateLimits!;
        console.log('getCurrentPositionMode() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getCurrentPositionMode() response:', data);
    } catch (error) {
        console.error('getCurrentPositionMode() error:', error);
    }
}

getCurrentPositionMode();
