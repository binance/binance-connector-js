import { Algo, ALGO_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALGO_REST_API_PROD_URL,
};
const client = new Algo({ configurationRestAPI });

async function cancelAlgoOrderSpotAlgo() {
    try {
        const response = await client.restAPI.cancelAlgoOrderSpotAlgo({
            algoId: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('cancelAlgoOrderSpotAlgo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cancelAlgoOrderSpotAlgo() response:', data);
    } catch (error) {
        console.error('cancelAlgoOrderSpotAlgo() error:', error);
    }
}

cancelAlgoOrderSpotAlgo();
