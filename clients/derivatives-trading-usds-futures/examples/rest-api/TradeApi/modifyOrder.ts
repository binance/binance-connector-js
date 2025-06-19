import {
    DerivativesTradingUsdsFutures,
    DerivativesTradingUsdsFuturesRestAPI,
    DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
};
const client = new DerivativesTradingUsdsFutures({ configurationRestAPI });

async function modifyOrder() {
    try {
        const response = await client.restAPI.modifyOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingUsdsFuturesRestAPI.ModifyOrderSideEnum.BUY,
            quantity: 1.0,
            price: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('modifyOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('modifyOrder() response:', data);
    } catch (error) {
        console.error('modifyOrder() error:', error);
    }
}

modifyOrder();
