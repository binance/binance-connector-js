import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function transferToSubAccountOfSameMaster() {
    try {
        const response = await client.restAPI.transferToSubAccountOfSameMaster({
            toEmail: 'toEmail_example',
            asset: 'asset_example',
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('transferToSubAccountOfSameMaster() rate limits:', rateLimits);

        const data = await response.data();
        console.log('transferToSubAccountOfSameMaster() response:', data);
    } catch (error) {
        console.error('transferToSubAccountOfSameMaster() error:', error);
    }
}

transferToSubAccountOfSameMaster();
