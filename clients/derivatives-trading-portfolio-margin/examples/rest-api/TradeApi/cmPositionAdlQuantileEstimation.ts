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

async function cmPositionAdlQuantileEstimation() {
    try {
        const response = await client.restAPI.cmPositionAdlQuantileEstimation();

        const rateLimits = response.rateLimits!;
        console.log('cmPositionAdlQuantileEstimation() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cmPositionAdlQuantileEstimation() response:', data);
    } catch (error) {
        console.error('cmPositionAdlQuantileEstimation() error:', error);
    }
}

cmPositionAdlQuantileEstimation();
