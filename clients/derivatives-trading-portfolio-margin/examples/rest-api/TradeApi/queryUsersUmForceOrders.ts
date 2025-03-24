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

async function queryUsersUmForceOrders() {
    try {
        const response = await client.restAPI.queryUsersUmForceOrders();

        const rateLimits = response.rateLimits!;
        console.log('queryUsersUmForceOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryUsersUmForceOrders() response:', data);
    } catch (error) {
        console.error('queryUsersUmForceOrders() error:', error);
    }
}

queryUsersUmForceOrders();
