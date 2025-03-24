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

async function getDownloadIdForFuturesTransactionHistory() {
    try {
        const response = await client.restAPI.getDownloadIdForFuturesTransactionHistory({
            startTime: 1623319461670,
            endTime: 1641782889000,
        });

        const rateLimits = response.rateLimits!;
        console.log('getDownloadIdForFuturesTransactionHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getDownloadIdForFuturesTransactionHistory() response:', data);
    } catch (error) {
        console.error('getDownloadIdForFuturesTransactionHistory() error:', error);
    }
}

getDownloadIdForFuturesTransactionHistory();
