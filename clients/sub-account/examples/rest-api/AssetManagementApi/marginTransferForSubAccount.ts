import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function marginTransferForSubAccount() {
    try {
        const response = await client.restAPI.marginTransferForSubAccount({
            email: 'sub-account-email@email.com',
            asset: 'asset_example',
            amount: 1.0,
            type: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('marginTransferForSubAccount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('marginTransferForSubAccount() response:', data);
    } catch (error) {
        console.error('marginTransferForSubAccount() error:', error);
    }
}

marginTransferForSubAccount();
