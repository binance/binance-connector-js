import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function getLockedProductPosition() {
    try {
        const response = await client.restAPI.getLockedProductPosition();

        const rateLimits = response.rateLimits!;
        console.log('getLockedProductPosition() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getLockedProductPosition() response:', data);
    } catch (error) {
        console.error('getLockedProductPosition() error:', error);
    }
}

getLockedProductPosition();
