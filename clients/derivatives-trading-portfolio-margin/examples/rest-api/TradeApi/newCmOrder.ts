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

async function newCmOrder() {
    try {
        const response = await client.restAPI.newCmOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingPortfolioMarginRestAPI.NewCmOrderSideEnum.BUY,
            type: DerivativesTradingPortfolioMarginRestAPI.NewCmOrderTypeEnum.LIMIT,
        });

        const rateLimits = response.rateLimits!;
        console.log('newCmOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('newCmOrder() response:', data);
    } catch (error) {
        console.error('newCmOrder() error:', error);
    }
}

newCmOrder();
