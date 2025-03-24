import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function querySubAccountSpotAssetTransferHistory() {
    try {
        const response = await client.restAPI.querySubAccountSpotAssetTransferHistory();

        const rateLimits = response.rateLimits!;
        console.log('querySubAccountSpotAssetTransferHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('querySubAccountSpotAssetTransferHistory() response:', data);
    } catch (error) {
        console.error('querySubAccountSpotAssetTransferHistory() error:', error);
    }
}

querySubAccountSpotAssetTransferHistory();
