import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function getSoftStakingRewardsHistory() {
    try {
        const response = await client.restAPI.getSoftStakingRewardsHistory();

        const rateLimits = response.rateLimits!;
        console.log('getSoftStakingRewardsHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getSoftStakingRewardsHistory() response:', data);
    } catch (error) {
        console.error('getSoftStakingRewardsHistory() error:', error);
    }
}

getSoftStakingRewardsHistory();
