import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function withdrawlAssetsFromTheManagedSubAccount() {
    try {
        const response = await client.restAPI.withdrawlAssetsFromTheManagedSubAccount({
            fromEmail: 'fromEmail_example',
            asset: 'asset_example',
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('withdrawlAssetsFromTheManagedSubAccount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('withdrawlAssetsFromTheManagedSubAccount() response:', data);
    } catch (error) {
        console.error('withdrawlAssetsFromTheManagedSubAccount() error:', error);
    }
}

withdrawlAssetsFromTheManagedSubAccount();
