import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function redeemFlexibleProduct() {
    try {
        const response = await client.restAPI.redeemFlexibleProduct({
            productId: '1',
        });

        const rateLimits = response.rateLimits!;
        console.log('redeemFlexibleProduct() rate limits:', rateLimits);

        const data = await response.data();
        console.log('redeemFlexibleProduct() response:', data);
    } catch (error) {
        console.error('redeemFlexibleProduct() error:', error);
    }
}

redeemFlexibleProduct();
