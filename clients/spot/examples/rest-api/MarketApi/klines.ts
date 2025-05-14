import { Spot, SpotRestAPI, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function klines() {
    try {
        const response = await client.restAPI.klines({
            symbol: 'BNBUSDT',
            interval: SpotRestAPI.KlinesIntervalEnum.INTERVAL_1s,
        });

        const rateLimits = response.rateLimits!;
        console.log('klines() rate limits:', rateLimits);

        const data = await response.data();
        console.log('klines() response:', data);
    } catch (error) {
        console.error('klines() error:', error);
    }
}

klines();
