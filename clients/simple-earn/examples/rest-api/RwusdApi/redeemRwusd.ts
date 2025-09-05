import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function redeemRwusd() {
    try {
        const response = await client.restAPI.redeemRwusd({
            amount: 1.0,
            type: 's',
        });

        const rateLimits = response.rateLimits!;
        console.log('redeemRwusd() rate limits:', rateLimits);

        const data = await response.data();
        console.log('redeemRwusd() response:', data);
    } catch (error) {
        console.error('redeemRwusd() error:', error);
    }
}

redeemRwusd();
