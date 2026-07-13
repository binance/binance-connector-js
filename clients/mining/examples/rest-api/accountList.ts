import { Mining, MINING_REST_API_PROD_URL } from '../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MINING_REST_API_PROD_URL,
};
const client = new Mining({ configurationRestAPI });

async function accountList() {
    try {
        const response = await client.restAPI.accountList({
            algo: 'sha256',
            userName: 'test',
        });

        const rateLimits = response.rateLimits!;
        console.log('accountList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('accountList() response:', data);
    } catch (error) {
        console.error('accountList() error:', error);
    }
}

accountList();
