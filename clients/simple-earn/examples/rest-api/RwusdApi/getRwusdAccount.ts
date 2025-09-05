import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function getRwusdAccount() {
    try {
        const response = await client.restAPI.getRwusdAccount();

        const rateLimits = response.rateLimits!;
        console.log('getRwusdAccount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getRwusdAccount() response:', data);
    } catch (error) {
        console.error('getRwusdAccount() error:', error);
    }
}

getRwusdAccount();
