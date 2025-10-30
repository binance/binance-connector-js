import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function redeemBfusd() {
    try {
        const response = await client.restAPI.redeemBfusd({
            amount: 1.0,
            type: 's',
        });

        const rateLimits = response.rateLimits!;
        console.log('redeemBfusd() rate limits:', rateLimits);

        const data = await response.data();
        console.log('redeemBfusd() response:', data);
    } catch (error) {
        console.error('redeemBfusd() error:', error);
    }
}

redeemBfusd();
