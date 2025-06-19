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

async function modifyUmOrder() {
    try {
        const response = await client.restAPI.modifyUmOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingPortfolioMarginRestAPI.ModifyUmOrderSideEnum.BUY,
            quantity: 1.0,
            price: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('modifyUmOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('modifyUmOrder() response:', data);
    } catch (error) {
        console.error('modifyUmOrder() error:', error);
    }
}

modifyUmOrder();
