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

async function getPortfolioMarginProSpanAccountInfo() {
    try {
        const response = await client.restAPI.getPortfolioMarginProSpanAccountInfo();

        const rateLimits = response.rateLimits!;
        console.log('getPortfolioMarginProSpanAccountInfo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getPortfolioMarginProSpanAccountInfo() response:', data);
    } catch (error) {
        console.error('getPortfolioMarginProSpanAccountInfo() error:', error);
    }
}

getPortfolioMarginProSpanAccountInfo();
