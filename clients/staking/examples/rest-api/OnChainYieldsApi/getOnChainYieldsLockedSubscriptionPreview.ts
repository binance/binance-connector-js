import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function getOnChainYieldsLockedSubscriptionPreview() {
    try {
        const response = await client.restAPI.getOnChainYieldsLockedSubscriptionPreview({
            projectId: '1',
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('getOnChainYieldsLockedSubscriptionPreview() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getOnChainYieldsLockedSubscriptionPreview() response:', data);
    } catch (error) {
        console.error('getOnChainYieldsLockedSubscriptionPreview() error:', error);
    }
}

getOnChainYieldsLockedSubscriptionPreview();
