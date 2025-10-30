import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function getBfusdRewardsHistory() {
    try {
        const response = await client.restAPI.getBfusdRewardsHistory();

        const rateLimits = response.rateLimits!;
        console.log('getBfusdRewardsHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getBfusdRewardsHistory() response:', data);
    } catch (error) {
        console.error('getBfusdRewardsHistory() error:', error);
    }
}

getBfusdRewardsHistory();
