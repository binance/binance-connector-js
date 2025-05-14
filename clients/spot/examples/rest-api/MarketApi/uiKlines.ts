import { Spot, SpotRestAPI, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function uiKlines() {
    try {
        const response = await client.restAPI.uiKlines({
            symbol: 'BNBUSDT',
            interval: SpotRestAPI.UiKlinesIntervalEnum.INTERVAL_1s,
        });

        const rateLimits = response.rateLimits!;
        console.log('uiKlines() rate limits:', rateLimits);

        const data = await response.data();
        console.log('uiKlines() response:', data);
    } catch (error) {
        console.error('uiKlines() error:', error);
    }
}

uiKlines();
