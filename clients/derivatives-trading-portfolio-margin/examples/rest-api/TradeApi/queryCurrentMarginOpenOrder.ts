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

async function queryCurrentMarginOpenOrder() {
    try {
        const response = await client.restAPI.queryCurrentMarginOpenOrder({
            symbol: 'symbol_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryCurrentMarginOpenOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryCurrentMarginOpenOrder() response:', data);
    } catch (error) {
        console.error('queryCurrentMarginOpenOrder() error:', error);
    }
}

queryCurrentMarginOpenOrder();
