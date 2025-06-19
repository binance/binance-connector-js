import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function transferToMaster() {
    try {
        const response = await client.restAPI.transferToMaster({
            asset: 'asset_example',
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('transferToMaster() rate limits:', rateLimits);

        const data = await response.data();
        console.log('transferToMaster() response:', data);
    } catch (error) {
        console.error('transferToMaster() error:', error);
    }
}

transferToMaster();
