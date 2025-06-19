import { Algo, ALGO_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALGO_REST_API_PROD_URL,
};
const client = new Algo({ configurationRestAPI });

async function timeWeightedAveragePriceFutureAlgo() {
    try {
        const response = await client.restAPI.timeWeightedAveragePriceFutureAlgo({
            symbol: 'BTCUSDT',
            side: 'BUY',
            quantity: 1.0,
            duration: 5000,
        });

        const rateLimits = response.rateLimits!;
        console.log('timeWeightedAveragePriceFutureAlgo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('timeWeightedAveragePriceFutureAlgo() response:', data);
    } catch (error) {
        console.error('timeWeightedAveragePriceFutureAlgo() error:', error);
    }
}

timeWeightedAveragePriceFutureAlgo();
