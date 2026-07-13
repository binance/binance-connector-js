import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function deleteSubAccountApiKey() {
    try {
        const response = await client.restAPI.deleteSubAccountApiKey({
            email: '123@test.com',
            subAccountApiKey: 'k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf',
        });

        const rateLimits = response.rateLimits!;
        console.log('deleteSubAccountApiKey() rate limits:', rateLimits);

        const data = await response.data();
        console.log('deleteSubAccountApiKey() response:', data);
    } catch (error) {
        console.error('deleteSubAccountApiKey() error:', error);
    }
}

deleteSubAccountApiKey();
