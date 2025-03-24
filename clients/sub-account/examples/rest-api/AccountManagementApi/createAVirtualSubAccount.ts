import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function createAVirtualSubAccount() {
    try {
        const response = await client.restAPI.createAVirtualSubAccount({
            subAccountString: 'subAccountString_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('createAVirtualSubAccount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('createAVirtualSubAccount() response:', data);
    } catch (error) {
        console.error('createAVirtualSubAccount() error:', error);
    }
}

createAVirtualSubAccount();
