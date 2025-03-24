import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function getSummaryOfSubAccountsFuturesAccountV2() {
    try {
        const response = await client.restAPI.getSummaryOfSubAccountsFuturesAccountV2({
            futuresType: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('getSummaryOfSubAccountsFuturesAccountV2() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getSummaryOfSubAccountsFuturesAccountV2() response:', data);
    } catch (error) {
        console.error('getSummaryOfSubAccountsFuturesAccountV2() error:', error);
    }
}

getSummaryOfSubAccountsFuturesAccountV2();
