import { Algo, ALGO_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALGO_REST_API_PROD_URL,
};
const client = new Algo({ configurationRestAPI });

async function queryCurrentAlgoOpenOrdersSpotAlgo() {
    try {
        const response = await client.restAPI.queryCurrentAlgoOpenOrdersSpotAlgo();

        const rateLimits = response.rateLimits!;
        console.log('queryCurrentAlgoOpenOrdersSpotAlgo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryCurrentAlgoOpenOrdersSpotAlgo() response:', data);
    } catch (error) {
        console.error('queryCurrentAlgoOpenOrdersSpotAlgo() error:', error);
    }
}

queryCurrentAlgoOpenOrdersSpotAlgo();
