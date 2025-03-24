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

async function repayFuturesNegativeBalance() {
    try {
        const response = await client.restAPI.repayFuturesNegativeBalance();

        const rateLimits = response.rateLimits!;
        console.log('repayFuturesNegativeBalance() rate limits:', rateLimits);

        const data = await response.data();
        console.log('repayFuturesNegativeBalance() response:', data);
    } catch (error) {
        console.error('repayFuturesNegativeBalance() error:', error);
    }
}

repayFuturesNegativeBalance();
