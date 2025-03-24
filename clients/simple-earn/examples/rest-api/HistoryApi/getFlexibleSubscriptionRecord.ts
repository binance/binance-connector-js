import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function getFlexibleSubscriptionRecord() {
    try {
        const response = await client.restAPI.getFlexibleSubscriptionRecord();

        const rateLimits = response.rateLimits!;
        console.log('getFlexibleSubscriptionRecord() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getFlexibleSubscriptionRecord() response:', data);
    } catch (error) {
        console.error('getFlexibleSubscriptionRecord() error:', error);
    }
}

getFlexibleSubscriptionRecord();
