import { Mining, MINING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MINING_REST_API_PROD_URL,
};
const client = new Mining({ configurationRestAPI });

async function hashrateResaleRequest() {
    try {
        const response = await client.restAPI.hashrateResaleRequest({
            userName: 'userName_example',
            algo: 'algo_example',
            endDate: 789,
            startDate: 789,
            toPoolUser: 'toPoolUser_example',
            hashRate: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('hashrateResaleRequest() rate limits:', rateLimits);

        const data = await response.data();
        console.log('hashrateResaleRequest() response:', data);
    } catch (error) {
        console.error('hashrateResaleRequest() error:', error);
    }
}

hashrateResaleRequest();
