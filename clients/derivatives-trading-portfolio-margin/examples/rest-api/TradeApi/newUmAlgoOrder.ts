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

async function newUmAlgoOrder() {
    try {
        const response = await client.restAPI.newUmAlgoOrder({
            algoType:
                DerivativesTradingPortfolioMarginRestAPI.NewUmAlgoOrderAlgoTypeEnum.CONDITIONAL,
            symbol: 'BNBUSDT',
            side: DerivativesTradingPortfolioMarginRestAPI.NewUmAlgoOrderSideEnum.SELL,
            type: DerivativesTradingPortfolioMarginRestAPI.NewUmAlgoOrderTypeEnum.TAKE_PROFIT,
            quantity: 0.01,
        });

        const rateLimits = response.rateLimits!;
        console.log('newUmAlgoOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('newUmAlgoOrder() response:', data);
    } catch (error) {
        console.error('newUmAlgoOrder() error:', error);
    }
}

newUmAlgoOrder();
