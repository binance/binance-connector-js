import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function queryManagedSubAccountSnapshot() {
    try {
        const response = await client.restAPI.queryManagedSubAccountSnapshot({
            email: 'sub-account-email@email.com',
            type: 'type_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryManagedSubAccountSnapshot() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryManagedSubAccountSnapshot() response:', data);
    } catch (error) {
        console.error('queryManagedSubAccountSnapshot() error:', error);
    }
}

queryManagedSubAccountSnapshot();
