import { Mining, MINING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MINING_REST_API_PROD_URL,
};
const client = new Mining({ configurationRestAPI });

async function earningsList() {
    try {
        const response = await client.restAPI.earningsList({
            algo: 'algo_example',
            userName: 'userName_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('earningsList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('earningsList() response:', data);
    } catch (error) {
        console.error('earningsList() error:', error);
    }
}

earningsList();
