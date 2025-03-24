import {
    DerivativesTradingPortfolioMarginPro,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL,
};
const client = new DerivativesTradingPortfolioMarginPro({ configurationRestAPI });

async function getPortfolioMarginAssetLeverage() {
    try {
        const response = await client.restAPI.getPortfolioMarginAssetLeverage();

        const rateLimits = response.rateLimits!;
        console.log('getPortfolioMarginAssetLeverage() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getPortfolioMarginAssetLeverage() response:', data);
    } catch (error) {
        console.error('getPortfolioMarginAssetLeverage() error:', error);
    }
}

getPortfolioMarginAssetLeverage();
