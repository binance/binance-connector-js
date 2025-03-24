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

async function startUserDataStream() {
    try {
        const response = await client.restAPI.startUserDataStream();

        const rateLimits = response.rateLimits!;
        console.log('startUserDataStream() rate limits:', rateLimits);

        const data = await response.data();
        console.log('startUserDataStream() response:', data);
    } catch (error) {
        console.error('startUserDataStream() error:', error);
    }
}

startUserDataStream();
