import { Mining, MINING_REST_API_PROD_URL } from '../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MINING_REST_API_PROD_URL,
};
const client = new Mining({ configurationRestAPI });

async function requestForMinerList() {
    try {
        const response = await client.restAPI.requestForMinerList({
            algo: 'sha256',
            userName: 'test',
        });

        const rateLimits = response.rateLimits!;
        console.log('requestForMinerList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('requestForMinerList() response:', data);
    } catch (error) {
        console.error('requestForMinerList() error:', error);
    }
}

requestForMinerList();
