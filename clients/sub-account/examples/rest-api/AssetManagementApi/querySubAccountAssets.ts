import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function querySubAccountAssets() {
    try {
        const response = await client.restAPI.querySubAccountAssets({
            email: 'sub-account-email@email.com',
        });

        const rateLimits = response.rateLimits!;
        console.log('querySubAccountAssets() rate limits:', rateLimits);

        const data = await response.data();
        console.log('querySubAccountAssets() response:', data);
    } catch (error) {
        console.error('querySubAccountAssets() error:', error);
    }
}

querySubAccountAssets();
