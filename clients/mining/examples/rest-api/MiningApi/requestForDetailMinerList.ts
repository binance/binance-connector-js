import { Mining, MINING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MINING_REST_API_PROD_URL,
};
const client = new Mining({ configurationRestAPI });

async function requestForDetailMinerList() {
    try {
        const response = await client.restAPI.requestForDetailMinerList({
            algo: 'algo_example',
            userName: 'userName_example',
            workerName: 'workerName_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('requestForDetailMinerList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('requestForDetailMinerList() response:', data);
    } catch (error) {
        console.error('requestForDetailMinerList() error:', error);
    }
}

requestForDetailMinerList();
