import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function redeemEth() {
    try {
        const response = await client.restAPI.redeemEth({
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('redeemEth() rate limits:', rateLimits);

        const data = await response.data();
        console.log('redeemEth() response:', data);
    } catch (error) {
        console.error('redeemEth() error:', error);
    }
}

redeemEth();
