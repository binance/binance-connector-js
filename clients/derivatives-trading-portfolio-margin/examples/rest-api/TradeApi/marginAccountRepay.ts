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

async function marginAccountRepay() {
    try {
        const response = await client.restAPI.marginAccountRepay({
            asset: 'asset_example',
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('marginAccountRepay() rate limits:', rateLimits);

        const data = await response.data();
        console.log('marginAccountRepay() response:', data);
    } catch (error) {
        console.error('marginAccountRepay() error:', error);
    }
}

marginAccountRepay();
