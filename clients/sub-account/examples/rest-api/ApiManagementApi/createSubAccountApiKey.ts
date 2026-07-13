import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function createSubAccountApiKey() {
    try {
        const response = await client.restAPI.createSubAccountApiKey({
            email: '123@test.com',
            apiName: 'myKey',
            status: 2,
        });

        const rateLimits = response.rateLimits!;
        console.log('createSubAccountApiKey() rate limits:', rateLimits);

        const data = await response.data();
        console.log('createSubAccountApiKey() response:', data);
    } catch (error) {
        console.error('createSubAccountApiKey() error:', error);
    }
}

createSubAccountApiKey();
