import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function getOnChainYieldsLockedPersonalLeftQuota() {
    try {
        const response = await client.restAPI.getOnChainYieldsLockedPersonalLeftQuota({
            projectId: '1',
        });

        const rateLimits = response.rateLimits!;
        console.log('getOnChainYieldsLockedPersonalLeftQuota() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getOnChainYieldsLockedPersonalLeftQuota() response:', data);
    } catch (error) {
        console.error('getOnChainYieldsLockedPersonalLeftQuota() error:', error);
    }
}

getOnChainYieldsLockedPersonalLeftQuota();
