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

async function transferLdusdtRwusdForPortfolioMargin() {
    try {
        const response = await client.restAPI.transferLdusdtRwusdForPortfolioMargin({
            asset: 'asset_example',
            transferType: 'transferType_example',
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('transferLdusdtRwusdForPortfolioMargin() rate limits:', rateLimits);

        const data = await response.data();
        console.log('transferLdusdtRwusdForPortfolioMargin() response:', data);
    } catch (error) {
        console.error('transferLdusdtRwusdForPortfolioMargin() error:', error);
    }
}

transferLdusdtRwusdForPortfolioMargin();
