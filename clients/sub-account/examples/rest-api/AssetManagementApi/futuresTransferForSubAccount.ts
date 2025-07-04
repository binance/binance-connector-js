import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function futuresTransferForSubAccount() {
    try {
        const response = await client.restAPI.futuresTransferForSubAccount({
            email: 'sub-account-email@email.com',
            asset: 'asset_example',
            amount: 1.0,
            type: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('futuresTransferForSubAccount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('futuresTransferForSubAccount() response:', data);
    } catch (error) {
        console.error('futuresTransferForSubAccount() error:', error);
    }
}

futuresTransferForSubAccount();
