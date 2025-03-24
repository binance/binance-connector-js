import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function queryManagedSubAccountList() {
    try {
        const response = await client.restAPI.queryManagedSubAccountList();

        const rateLimits = response.rateLimits!;
        console.log('queryManagedSubAccountList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryManagedSubAccountList() response:', data);
    } catch (error) {
        console.error('queryManagedSubAccountList() error:', error);
    }
}

queryManagedSubAccountList();
