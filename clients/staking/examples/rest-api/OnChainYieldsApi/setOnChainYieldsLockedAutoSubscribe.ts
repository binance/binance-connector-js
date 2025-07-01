import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function setOnChainYieldsLockedAutoSubscribe() {
    try {
        const response = await client.restAPI.setOnChainYieldsLockedAutoSubscribe({
            positionId: '1',
            autoSubscribe: true,
        });

        const rateLimits = response.rateLimits!;
        console.log('setOnChainYieldsLockedAutoSubscribe() rate limits:', rateLimits);

        const data = await response.data();
        console.log('setOnChainYieldsLockedAutoSubscribe() response:', data);
    } catch (error) {
        console.error('setOnChainYieldsLockedAutoSubscribe() error:', error);
    }
}

setOnChainYieldsLockedAutoSubscribe();
