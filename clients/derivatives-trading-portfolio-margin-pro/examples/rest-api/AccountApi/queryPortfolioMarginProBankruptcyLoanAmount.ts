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

async function queryPortfolioMarginProBankruptcyLoanAmount() {
    try {
        const response = await client.restAPI.queryPortfolioMarginProBankruptcyLoanAmount();

        const rateLimits = response.rateLimits!;
        console.log('queryPortfolioMarginProBankruptcyLoanAmount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryPortfolioMarginProBankruptcyLoanAmount() response:', data);
    } catch (error) {
        console.error('queryPortfolioMarginProBankruptcyLoanAmount() error:', error);
    }
}

queryPortfolioMarginProBankruptcyLoanAmount();
