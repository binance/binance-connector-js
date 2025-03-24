import {
    DerivativesTradingOptions,
    DerivativesTradingOptionsRestAPI,
    DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
};
const client = new DerivativesTradingOptions({ configurationRestAPI });

async function newBlockTradeOrder() {
    try {
        const response = await client.restAPI.newBlockTradeOrder({
            liquidity: 'liquidity_example',
            legs: [],
            symbol: 'symbol_example',
            side: DerivativesTradingOptionsRestAPI.NewBlockTradeOrderSideEnum.BUY,
            price: 1,
            quantity: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('newBlockTradeOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('newBlockTradeOrder() response:', data);
    } catch (error) {
        console.error('newBlockTradeOrder() error:', error);
    }
}

newBlockTradeOrder();
