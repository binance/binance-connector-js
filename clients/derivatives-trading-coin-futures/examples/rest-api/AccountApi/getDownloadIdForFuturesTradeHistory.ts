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

async function getDownloadIdForFuturesTradeHistory() {
    try {
        const response = await client.restAPI.getDownloadIdForFuturesTradeHistory({
            startTime: 1623319461670,
            endTime: 1641782889000,
        });

        const rateLimits = response.rateLimits!;
        console.log('getDownloadIdForFuturesTradeHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getDownloadIdForFuturesTradeHistory() response:', data);
    } catch (error) {
        console.error('getDownloadIdForFuturesTradeHistory() error:', error);
    }
}

getDownloadIdForFuturesTradeHistory();
