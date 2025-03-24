import { Algo, ALGO_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALGO_REST_API_PROD_URL,
};
const client = new Algo({ configurationRestAPI });

async function queryCurrentAlgoOpenOrdersFutureAlgo() {
    try {
        const response = await client.restAPI.queryCurrentAlgoOpenOrdersFutureAlgo();

        const rateLimits = response.rateLimits!;
        console.log('queryCurrentAlgoOpenOrdersFutureAlgo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryCurrentAlgoOpenOrdersFutureAlgo() response:', data);
    } catch (error) {
        console.error('queryCurrentAlgoOpenOrdersFutureAlgo() error:', error);
    }
}

queryCurrentAlgoOpenOrdersFutureAlgo();
