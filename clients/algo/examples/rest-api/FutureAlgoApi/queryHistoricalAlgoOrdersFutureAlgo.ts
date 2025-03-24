import { Algo, ALGO_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALGO_REST_API_PROD_URL,
};
const client = new Algo({ configurationRestAPI });

async function queryHistoricalAlgoOrdersFutureAlgo() {
    try {
        const response = await client.restAPI.queryHistoricalAlgoOrdersFutureAlgo();

        const rateLimits = response.rateLimits!;
        console.log('queryHistoricalAlgoOrdersFutureAlgo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryHistoricalAlgoOrdersFutureAlgo() response:', data);
    } catch (error) {
        console.error('queryHistoricalAlgoOrdersFutureAlgo() error:', error);
    }
}

queryHistoricalAlgoOrdersFutureAlgo();
