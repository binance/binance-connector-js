import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function subAccountFuturesAssetTransfer() {
    try {
        const response = await client.restAPI.subAccountFuturesAssetTransfer({
            fromEmail: 'abc@test.com',
            toEmail: 'def@test.com',
            futuresType: 1,
            asset: 'BTC',
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('subAccountFuturesAssetTransfer() rate limits:', rateLimits);

        const data = await response.data();
        console.log('subAccountFuturesAssetTransfer() response:', data);
    } catch (error) {
        console.error('subAccountFuturesAssetTransfer() error:', error);
    }
}

subAccountFuturesAssetTransfer();
