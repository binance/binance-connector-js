import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function getSolStakingQuotaDetails() {
    try {
        const response = await client.restAPI.getSolStakingQuotaDetails();

        const rateLimits = response.rateLimits!;
        console.log('getSolStakingQuotaDetails() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getSolStakingQuotaDetails() response:', data);
    } catch (error) {
        console.error('getSolStakingQuotaDetails() error:', error);
    }
}

getSolStakingQuotaDetails();
