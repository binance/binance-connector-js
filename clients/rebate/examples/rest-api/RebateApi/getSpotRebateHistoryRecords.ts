import { Rebate, REBATE_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? REBATE_REST_API_PROD_URL,
};
const client = new Rebate({ configurationRestAPI });

async function getSpotRebateHistoryRecords() {
    try {
        const response = await client.restAPI.getSpotRebateHistoryRecords();

        const rateLimits = response.rateLimits!;
        console.log('getSpotRebateHistoryRecords() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getSpotRebateHistoryRecords() response:', data);
    } catch (error) {
        console.error('getSpotRebateHistoryRecords() error:', error);
    }
}

getSpotRebateHistoryRecords();
