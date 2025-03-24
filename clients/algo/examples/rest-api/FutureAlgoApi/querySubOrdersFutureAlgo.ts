import { Algo, ALGO_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALGO_REST_API_PROD_URL,
};
const client = new Algo({ configurationRestAPI });

async function querySubOrdersFutureAlgo() {
    try {
        const response = await client.restAPI.querySubOrdersFutureAlgo({
            algoId: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('querySubOrdersFutureAlgo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('querySubOrdersFutureAlgo() response:', data);
    } catch (error) {
        console.error('querySubOrdersFutureAlgo() error:', error);
    }
}

querySubOrdersFutureAlgo();
