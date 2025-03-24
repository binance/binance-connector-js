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

async function modifyCmOrder() {
    try {
        const response = await client.restAPI.modifyCmOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingPortfolioMarginRestAPI.ModifyCmOrderSideEnum.BUY,
            quantity: 1,
            price: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('modifyCmOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('modifyCmOrder() response:', data);
    } catch (error) {
        console.error('modifyCmOrder() error:', error);
    }
}

modifyCmOrder();
