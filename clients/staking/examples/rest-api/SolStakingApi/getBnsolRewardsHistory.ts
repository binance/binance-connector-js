import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function getBnsolRewardsHistory() {
    try {
        const response = await client.restAPI.getBnsolRewardsHistory();

        const rateLimits = response.rateLimits!;
        console.log('getBnsolRewardsHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getBnsolRewardsHistory() response:', data);
    } catch (error) {
        console.error('getBnsolRewardsHistory() error:', error);
    }
}

getBnsolRewardsHistory();
