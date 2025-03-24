import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function getSubAccountsStatusOnMarginOrFutures() {
    try {
        const response = await client.restAPI.getSubAccountsStatusOnMarginOrFutures();

        const rateLimits = response.rateLimits!;
        console.log('getSubAccountsStatusOnMarginOrFutures() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getSubAccountsStatusOnMarginOrFutures() response:', data);
    } catch (error) {
        console.error('getSubAccountsStatusOnMarginOrFutures() error:', error);
    }
}

getSubAccountsStatusOnMarginOrFutures();
