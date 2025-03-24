import {
    DerivativesTradingPortfolioMargin,
    DerivativesTradingPortfolioMarginRestAPI,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL,
};
const client = new DerivativesTradingPortfolioMargin({ configurationRestAPI });

async function newMarginOrder() {
    try {
        const response = await client.restAPI.newMarginOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingPortfolioMarginRestAPI.NewMarginOrderSideEnum.BUY,
            type: DerivativesTradingPortfolioMarginRestAPI.NewMarginOrderTypeEnum.LIMIT,
        });

        const rateLimits = response.rateLimits!;
        console.log('newMarginOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('newMarginOrder() response:', data);
    } catch (error) {
        console.error('newMarginOrder() error:', error);
    }
}

newMarginOrder();
