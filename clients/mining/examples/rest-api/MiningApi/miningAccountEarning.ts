import { Mining, MINING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MINING_REST_API_PROD_URL,
};
const client = new Mining({ configurationRestAPI });

async function miningAccountEarning() {
    try {
        const response = await client.restAPI.miningAccountEarning({
            algo: 'algo_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('miningAccountEarning() rate limits:', rateLimits);

        const data = await response.data();
        console.log('miningAccountEarning() response:', data);
    } catch (error) {
        console.error('miningAccountEarning() error:', error);
    }
}

miningAccountEarning();
