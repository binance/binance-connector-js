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

async function redeemBfusdForPortfolioMargin() {
    try {
        const response = await client.restAPI.redeemBfusdForPortfolioMargin({
            fromAsset: 'fromAsset_example',
            targetAsset: 'targetAsset_example',
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('redeemBfusdForPortfolioMargin() rate limits:', rateLimits);

        const data = await response.data();
        console.log('redeemBfusdForPortfolioMargin() response:', data);
    } catch (error) {
        console.error('redeemBfusdForPortfolioMargin() error:', error);
    }
}

redeemBfusdForPortfolioMargin();
