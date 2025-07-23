import { Spot, SpotRestAPI, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function sorOrderTest() {
    try {
        const response = await client.restAPI.sorOrderTest({
            symbol: 'BNBUSDT',
            side: SpotRestAPI.SorOrderTestSideEnum.BUY,
            type: SpotRestAPI.SorOrderTestTypeEnum.MARKET,
            quantity: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('sorOrderTest() rate limits:', rateLimits);

        const data = await response.data();
        console.log('sorOrderTest() response:', data);
    } catch (error) {
        console.error('sorOrderTest() error:', error);
    }
}

sorOrderTest();
