import { Mining, MINING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MINING_REST_API_PROD_URL,
};
const client = new Mining({ configurationRestAPI });

async function acquiringAlgorithm() {
    try {
        const response = await client.restAPI.acquiringAlgorithm();

        const rateLimits = response.rateLimits!;
        console.log('acquiringAlgorithm() rate limits:', rateLimits);

        const data = await response.data();
        console.log('acquiringAlgorithm() response:', data);
    } catch (error) {
        console.error('acquiringAlgorithm() error:', error);
    }
}

acquiringAlgorithm();
