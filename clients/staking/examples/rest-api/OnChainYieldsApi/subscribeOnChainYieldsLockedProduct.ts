import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function subscribeOnChainYieldsLockedProduct() {
    try {
        const response = await client.restAPI.subscribeOnChainYieldsLockedProduct({
            projectId: '1',
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('subscribeOnChainYieldsLockedProduct() rate limits:', rateLimits);

        const data = await response.data();
        console.log('subscribeOnChainYieldsLockedProduct() response:', data);
    } catch (error) {
        console.error('subscribeOnChainYieldsLockedProduct() error:', error);
    }
}

subscribeOnChainYieldsLockedProduct();
