import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function getOnChainYieldsLockedSubscriptionRecord() {
    try {
        const response = await client.restAPI.getOnChainYieldsLockedSubscriptionRecord();

        const rateLimits = response.rateLimits!;
        console.log('getOnChainYieldsLockedSubscriptionRecord() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getOnChainYieldsLockedSubscriptionRecord() response:', data);
    } catch (error) {
        console.error('getOnChainYieldsLockedSubscriptionRecord() error:', error);
    }
}

getOnChainYieldsLockedSubscriptionRecord();
