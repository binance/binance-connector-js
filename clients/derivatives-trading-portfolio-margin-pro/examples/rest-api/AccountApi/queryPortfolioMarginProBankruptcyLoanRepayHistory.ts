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

async function queryPortfolioMarginProBankruptcyLoanRepayHistory() {
    try {
        const response = await client.restAPI.queryPortfolioMarginProBankruptcyLoanRepayHistory();

        const rateLimits = response.rateLimits!;
        console.log('queryPortfolioMarginProBankruptcyLoanRepayHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryPortfolioMarginProBankruptcyLoanRepayHistory() response:', data);
    } catch (error) {
        console.error('queryPortfolioMarginProBankruptcyLoanRepayHistory() error:', error);
    }
}

queryPortfolioMarginProBankruptcyLoanRepayHistory();
