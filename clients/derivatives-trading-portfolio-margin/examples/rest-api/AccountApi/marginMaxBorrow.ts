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

async function marginMaxBorrow() {
    try {
        const response = await client.restAPI.marginMaxBorrow({
            asset: 'asset_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('marginMaxBorrow() rate limits:', rateLimits);

        const data = await response.data();
        console.log('marginMaxBorrow() response:', data);
    } catch (error) {
        console.error('marginMaxBorrow() error:', error);
    }
}

marginMaxBorrow();
