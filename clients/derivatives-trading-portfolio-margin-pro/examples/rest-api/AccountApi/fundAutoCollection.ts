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

async function fundAutoCollection() {
    try {
        const response = await client.restAPI.fundAutoCollection();

        const rateLimits = response.rateLimits!;
        console.log('fundAutoCollection() rate limits:', rateLimits);

        const data = await response.data();
        console.log('fundAutoCollection() response:', data);
    } catch (error) {
        console.error('fundAutoCollection() error:', error);
    }
}

fundAutoCollection();
