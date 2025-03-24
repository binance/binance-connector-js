import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function wrapBeth() {
    try {
        const response = await client.restAPI.wrapBeth({
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('wrapBeth() rate limits:', rateLimits);

        const data = await response.data();
        console.log('wrapBeth() response:', data);
    } catch (error) {
        console.error('wrapBeth() error:', error);
    }
}

wrapBeth();
