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

async function getFuturesTradeDownloadLinkById() {
    try {
        const response = await client.restAPI.getFuturesTradeDownloadLinkById({
            downloadId: '1',
        });

        const rateLimits = response.rateLimits!;
        console.log('getFuturesTradeDownloadLinkById() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getFuturesTradeDownloadLinkById() response:', data);
    } catch (error) {
        console.error('getFuturesTradeDownloadLinkById() error:', error);
    }
}

getFuturesTradeDownloadLinkById();
