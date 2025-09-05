import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function getRwusdQuotaDetails() {
    try {
        const response = await client.restAPI.getRwusdQuotaDetails();

        const rateLimits = response.rateLimits!;
        console.log('getRwusdQuotaDetails() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getRwusdQuotaDetails() response:', data);
    } catch (error) {
        console.error('getRwusdQuotaDetails() error:', error);
    }
}

getRwusdQuotaDetails();
