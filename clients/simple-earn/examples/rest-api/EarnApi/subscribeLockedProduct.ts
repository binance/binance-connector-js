import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function subscribeLockedProduct() {
    try {
        const response = await client.restAPI.subscribeLockedProduct({
            projectId: '1',
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('subscribeLockedProduct() rate limits:', rateLimits);

        const data = await response.data();
        console.log('subscribeLockedProduct() response:', data);
    } catch (error) {
        console.error('subscribeLockedProduct() error:', error);
    }
}

subscribeLockedProduct();
