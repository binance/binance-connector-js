import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function deleteIpListForASubAccountApiKey() {
    try {
        const response = await client.restAPI.deleteIpListForASubAccountApiKey({
            email: 'sub-account-email@email.com',
            subAccountApiKey: 'subAccountApiKey_example',
            ipAddress: 'ipAddress_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('deleteIpListForASubAccountApiKey() rate limits:', rateLimits);

        const data = await response.data();
        console.log('deleteIpListForASubAccountApiKey() response:', data);
    } catch (error) {
        console.error('deleteIpListForASubAccountApiKey() error:', error);
    }
}

deleteIpListForASubAccountApiKey();
