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

async function getCmFuturesOrderDownloadLinkById() {
    try {
        const response = await client.restAPI.getCmFuturesOrderDownloadLinkById({
            downloadId: '545923594199212032',
        });

        const rateLimits = response.rateLimits!;
        console.log('getCmFuturesOrderDownloadLinkById() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getCmFuturesOrderDownloadLinkById() response:', data);
    } catch (error) {
        console.error('getCmFuturesOrderDownloadLinkById() error:', error);
    }
}

getCmFuturesOrderDownloadLinkById();
