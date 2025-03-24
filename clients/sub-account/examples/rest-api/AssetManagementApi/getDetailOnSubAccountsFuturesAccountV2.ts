import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function getDetailOnSubAccountsFuturesAccountV2() {
    try {
        const response = await client.restAPI.getDetailOnSubAccountsFuturesAccountV2({
            email: 'sub-account-email@email.com',
            futuresType: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('getDetailOnSubAccountsFuturesAccountV2() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getDetailOnSubAccountsFuturesAccountV2() response:', data);
    } catch (error) {
        console.error('getDetailOnSubAccountsFuturesAccountV2() error:', error);
    }
}

getDetailOnSubAccountsFuturesAccountV2();
