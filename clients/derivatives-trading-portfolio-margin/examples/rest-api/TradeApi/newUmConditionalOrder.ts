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

async function newUmConditionalOrder() {
    try {
        const response = await client.restAPI.newUmConditionalOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingPortfolioMarginRestAPI.NewUmConditionalOrderSideEnum.BUY,
            strategyType:
                DerivativesTradingPortfolioMarginRestAPI.NewUmConditionalOrderStrategyTypeEnum.STOP,
        });

        const rateLimits = response.rateLimits!;
        console.log('newUmConditionalOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('newUmConditionalOrder() response:', data);
    } catch (error) {
        console.error('newUmConditionalOrder() error:', error);
    }
}

newUmConditionalOrder();
