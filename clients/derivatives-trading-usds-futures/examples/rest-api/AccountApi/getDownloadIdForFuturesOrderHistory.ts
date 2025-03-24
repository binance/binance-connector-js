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

async function getDownloadIdForFuturesOrderHistory() {
    try {
        const response = await client.restAPI.getDownloadIdForFuturesOrderHistory({
            startTime: 1623319461670,
            endTime: 1641782889000,
        });

        const rateLimits = response.rateLimits!;
        console.log('getDownloadIdForFuturesOrderHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getDownloadIdForFuturesOrderHistory() response:', data);
    } catch (error) {
        console.error('getDownloadIdForFuturesOrderHistory() error:', error);
    }
}

getDownloadIdForFuturesOrderHistory();
