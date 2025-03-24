import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function depositAssetsIntoTheManagedSubAccount() {
    try {
        const response = await client.restAPI.depositAssetsIntoTheManagedSubAccount({
            toEmail: 'toEmail_example',
            asset: 'asset_example',
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('depositAssetsIntoTheManagedSubAccount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('depositAssetsIntoTheManagedSubAccount() response:', data);
    } catch (error) {
        console.error('depositAssetsIntoTheManagedSubAccount() error:', error);
    }
}

depositAssetsIntoTheManagedSubAccount();
