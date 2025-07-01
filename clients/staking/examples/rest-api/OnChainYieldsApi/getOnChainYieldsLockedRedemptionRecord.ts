import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function getOnChainYieldsLockedRedemptionRecord() {
    try {
        const response = await client.restAPI.getOnChainYieldsLockedRedemptionRecord();

        const rateLimits = response.rateLimits!;
        console.log('getOnChainYieldsLockedRedemptionRecord() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getOnChainYieldsLockedRedemptionRecord() response:', data);
    } catch (error) {
        console.error('getOnChainYieldsLockedRedemptionRecord() error:', error);
    }
}

getOnChainYieldsLockedRedemptionRecord();
