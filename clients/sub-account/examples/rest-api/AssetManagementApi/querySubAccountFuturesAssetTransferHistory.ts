import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function querySubAccountFuturesAssetTransferHistory() {
    try {
        const response = await client.restAPI.querySubAccountFuturesAssetTransferHistory({
            email: 'sub-account-email@email.com',
            futuresType: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('querySubAccountFuturesAssetTransferHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('querySubAccountFuturesAssetTransferHistory() response:', data);
    } catch (error) {
        console.error('querySubAccountFuturesAssetTransferHistory() error:', error);
    }
}

querySubAccountFuturesAssetTransferHistory();
