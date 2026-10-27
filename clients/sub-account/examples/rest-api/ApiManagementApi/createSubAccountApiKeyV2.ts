import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function createSubAccountApiKeyV2() {
    try {
        const response = await client.restAPI.createSubAccountApiKeyV2({
            email: '123@test.com',
            apiName: 'my-fix-api',
            status: 2,
        });

        const rateLimits = response.rateLimits!;
        console.log('createSubAccountApiKeyV2() rate limits:', rateLimits);

        const data = await response.data();
        console.log('createSubAccountApiKeyV2() response:', data);
    } catch (error) {
        console.error('createSubAccountApiKeyV2() error:', error);
    }
}

createSubAccountApiKeyV2();
