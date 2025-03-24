import { Algo, ALGO_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALGO_REST_API_PROD_URL,
};
const client = new Algo({ configurationRestAPI });

async function queryHistoricalAlgoOrdersSpotAlgo() {
    try {
        const response = await client.restAPI.queryHistoricalAlgoOrdersSpotAlgo();

        const rateLimits = response.rateLimits!;
        console.log('queryHistoricalAlgoOrdersSpotAlgo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryHistoricalAlgoOrdersSpotAlgo() response:', data);
    } catch (error) {
        console.error('queryHistoricalAlgoOrdersSpotAlgo() error:', error);
    }
}

queryHistoricalAlgoOrdersSpotAlgo();
