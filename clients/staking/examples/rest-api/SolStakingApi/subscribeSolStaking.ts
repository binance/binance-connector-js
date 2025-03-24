import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function subscribeSolStaking() {
    try {
        const response = await client.restAPI.subscribeSolStaking({
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('subscribeSolStaking() rate limits:', rateLimits);

        const data = await response.data();
        console.log('subscribeSolStaking() response:', data);
    } catch (error) {
        console.error('subscribeSolStaking() error:', error);
    }
}

subscribeSolStaking();
