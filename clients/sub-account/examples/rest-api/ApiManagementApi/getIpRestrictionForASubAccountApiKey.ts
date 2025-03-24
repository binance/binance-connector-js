import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function getIpRestrictionForASubAccountApiKey() {
    try {
        const response = await client.restAPI.getIpRestrictionForASubAccountApiKey({
            email: 'sub-account-email@email.com',
            subAccountApiKey: 'subAccountApiKey_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('getIpRestrictionForASubAccountApiKey() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getIpRestrictionForASubAccountApiKey() response:', data);
    } catch (error) {
        console.error('getIpRestrictionForASubAccountApiKey() error:', error);
    }
}

getIpRestrictionForASubAccountApiKey();
