import { Spot, SpotRestAPI, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function sorOrder() {
    try {
        const response = await client.restAPI.sorOrder({
            symbol: 'BNBUSDT',
            side: SpotRestAPI.SorOrderSideEnum.BUY,
            type: SpotRestAPI.SorOrderTypeEnum.MARKET,
            quantity: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('sorOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('sorOrder() response:', data);
    } catch (error) {
        console.error('sorOrder() error:', error);
    }
}

sorOrder();
