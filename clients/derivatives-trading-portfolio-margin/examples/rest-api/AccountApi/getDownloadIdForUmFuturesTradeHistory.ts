import {
    DerivativesTradingPortfolioMargin,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL,
};
const client = new DerivativesTradingPortfolioMargin({ configurationRestAPI });

async function getDownloadIdForUmFuturesTradeHistory() {
    try {
        const response = await client.restAPI.getDownloadIdForUmFuturesTradeHistory({
            startTime: 1623319461670,
            endTime: 1641782889000,
        });

        const rateLimits = response.rateLimits!;
        console.log('getDownloadIdForUmFuturesTradeHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getDownloadIdForUmFuturesTradeHistory() response:', data);
    } catch (error) {
        console.error('getDownloadIdForUmFuturesTradeHistory() error:', error);
    }
}

getDownloadIdForUmFuturesTradeHistory();
