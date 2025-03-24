import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function universalTransfer() {
    try {
        const response = await client.restAPI.universalTransfer({
            fromAccountType: 'fromAccountType_example',
            toAccountType: 'toAccountType_example',
            asset: 'asset_example',
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('universalTransfer() rate limits:', rateLimits);

        const data = await response.data();
        console.log('universalTransfer() response:', data);
    } catch (error) {
        console.error('universalTransfer() error:', error);
    }
}

universalTransfer();
