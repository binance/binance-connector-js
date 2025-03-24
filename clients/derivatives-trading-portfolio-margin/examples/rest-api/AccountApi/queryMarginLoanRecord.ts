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

async function queryMarginLoanRecord() {
    try {
        const response = await client.restAPI.queryMarginLoanRecord({
            asset: 'asset_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryMarginLoanRecord() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryMarginLoanRecord() response:', data);
    } catch (error) {
        console.error('queryMarginLoanRecord() error:', error);
    }
}

queryMarginLoanRecord();
