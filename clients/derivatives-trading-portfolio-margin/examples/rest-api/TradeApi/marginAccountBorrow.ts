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

async function marginAccountBorrow() {
    try {
        const response = await client.restAPI.marginAccountBorrow({
            asset: 'asset_example',
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('marginAccountBorrow() rate limits:', rateLimits);

        const data = await response.data();
        console.log('marginAccountBorrow() response:', data);
    } catch (error) {
        console.error('marginAccountBorrow() error:', error);
    }
}

marginAccountBorrow();
