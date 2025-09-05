import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function subscribeFlexibleProduct() {
    try {
        const response = await client.restAPI.subscribeFlexibleProduct({
            productId: '1',
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('subscribeFlexibleProduct() rate limits:', rateLimits);

        const data = await response.data();
        console.log('subscribeFlexibleProduct() response:', data);
    } catch (error) {
        console.error('subscribeFlexibleProduct() error:', error);
    }
}

subscribeFlexibleProduct();
