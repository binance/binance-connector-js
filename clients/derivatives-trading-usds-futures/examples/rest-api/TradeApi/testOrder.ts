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

async function testOrder() {
    try {
        const response = await client.restAPI.testOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingUsdsFuturesRestAPI.TestOrderSideEnum.BUY,
            type: 'type_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('testOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('testOrder() response:', data);
    } catch (error) {
        console.error('testOrder() error:', error);
    }
}

testOrder();
