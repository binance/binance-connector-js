import { Stocks, StocksRestAPI, STOCKS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCKS_REST_API_PROD_URL,
};
const client = new Stocks({ configurationRestAPI });

async function placeEquityOrder() {
    try {
        const response = await client.restAPI.placeEquityOrder({
            symbol: 'AAPL',
            side: StocksRestAPI.PlaceEquityOrderSideEnum.BUY,
            orderType: StocksRestAPI.PlaceEquityOrderOrderTypeEnum.LIMIT,
        });

        const rateLimits = response.rateLimits!;
        console.log('placeEquityOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('placeEquityOrder() response:', data);
    } catch (error) {
        console.error('placeEquityOrder() error:', error);
    }
}

placeEquityOrder();
