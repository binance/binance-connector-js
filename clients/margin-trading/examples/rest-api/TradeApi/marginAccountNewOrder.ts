import {
    MarginTrading,
    MarginTradingRestAPI,
    MARGIN_TRADING_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function marginAccountNewOrder() {
    try {
        const response = await client.restAPI.marginAccountNewOrder({
            symbol: 'symbol_example',
            side: MarginTradingRestAPI.MarginAccountNewOrderSideEnum.BUY,
            type: 'type_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('marginAccountNewOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('marginAccountNewOrder() response:', data);
    } catch (error) {
        console.error('marginAccountNewOrder() error:', error);
    }
}

marginAccountNewOrder();
