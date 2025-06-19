import { Algo, ALGO_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALGO_REST_API_PROD_URL,
};
const client = new Algo({ configurationRestAPI });

async function timeWeightedAveragePriceSpotAlgo() {
    try {
        const response = await client.restAPI.timeWeightedAveragePriceSpotAlgo({
            symbol: 'BTCUSDT',
            side: 'BUY',
            quantity: 1.0,
            duration: 5000,
        });

        const rateLimits = response.rateLimits!;
        console.log('timeWeightedAveragePriceSpotAlgo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('timeWeightedAveragePriceSpotAlgo() response:', data);
    } catch (error) {
        console.error('timeWeightedAveragePriceSpotAlgo() error:', error);
    }
}

timeWeightedAveragePriceSpotAlgo();
