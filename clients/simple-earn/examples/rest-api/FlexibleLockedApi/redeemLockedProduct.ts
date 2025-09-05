import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function redeemLockedProduct() {
    try {
        const response = await client.restAPI.redeemLockedProduct({
            positionId: '1',
        });

        const rateLimits = response.rateLimits!;
        console.log('redeemLockedProduct() rate limits:', rateLimits);

        const data = await response.data();
        console.log('redeemLockedProduct() response:', data);
    } catch (error) {
        console.error('redeemLockedProduct() error:', error);
    }
}

redeemLockedProduct();
