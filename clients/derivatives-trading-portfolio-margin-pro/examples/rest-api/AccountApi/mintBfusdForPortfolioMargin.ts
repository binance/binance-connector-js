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

async function mintBfusdForPortfolioMargin() {
    try {
        const response = await client.restAPI.mintBfusdForPortfolioMargin({
            fromAsset: 'fromAsset_example',
            targetAsset: 'targetAsset_example',
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('mintBfusdForPortfolioMargin() rate limits:', rateLimits);

        const data = await response.data();
        console.log('mintBfusdForPortfolioMargin() response:', data);
    } catch (error) {
        console.error('mintBfusdForPortfolioMargin() error:', error);
    }
}

mintBfusdForPortfolioMargin();
