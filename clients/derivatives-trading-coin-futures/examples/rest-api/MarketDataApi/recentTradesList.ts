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

async function recentTradesList() {
    try {
        const response = await client.restAPI.recentTradesList({
            symbol: 'symbol_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('recentTradesList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('recentTradesList() response:', data);
    } catch (error) {
        console.error('recentTradesList() error:', error);
    }
}

recentTradesList();
