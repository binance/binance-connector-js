import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function setFlexibleAutoSubscribe() {
    try {
        const response = await client.restAPI.setFlexibleAutoSubscribe({
            productId: '1',
            autoSubscribe: true,
        });

        const rateLimits = response.rateLimits!;
        console.log('setFlexibleAutoSubscribe() rate limits:', rateLimits);

        const data = await response.data();
        console.log('setFlexibleAutoSubscribe() response:', data);
    } catch (error) {
        console.error('setFlexibleAutoSubscribe() error:', error);
    }
}

setFlexibleAutoSubscribe();
