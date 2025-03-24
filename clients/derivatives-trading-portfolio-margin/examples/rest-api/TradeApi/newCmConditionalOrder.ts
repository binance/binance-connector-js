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

async function newCmConditionalOrder() {
    try {
        const response = await client.restAPI.newCmConditionalOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingPortfolioMarginRestAPI.NewCmConditionalOrderSideEnum.BUY,
            strategyType:
                DerivativesTradingPortfolioMarginRestAPI.NewCmConditionalOrderStrategyTypeEnum.STOP,
        });

        const rateLimits = response.rateLimits!;
        console.log('newCmConditionalOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('newCmConditionalOrder() response:', data);
    } catch (error) {
        console.error('newCmConditionalOrder() error:', error);
    }
}

newCmConditionalOrder();
