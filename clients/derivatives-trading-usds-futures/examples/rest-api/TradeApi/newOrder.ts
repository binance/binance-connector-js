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

async function newOrder() {
    try {
        const response = await client.restAPI.newOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingUsdsFuturesRestAPI.NewOrderSideEnum.BUY,
            type: 'type_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('newOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('newOrder() response:', data);
    } catch (error) {
        console.error('newOrder() error:', error);
    }
}

newOrder();
