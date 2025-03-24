import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function claimBoostRewards() {
    try {
        const response = await client.restAPI.claimBoostRewards();

        const rateLimits = response.rateLimits!;
        console.log('claimBoostRewards() rate limits:', rateLimits);

        const data = await response.data();
        console.log('claimBoostRewards() response:', data);
    } catch (error) {
        console.error('claimBoostRewards() error:', error);
    }
}

claimBoostRewards();
