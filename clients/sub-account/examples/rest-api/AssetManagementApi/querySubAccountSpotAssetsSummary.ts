import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function querySubAccountSpotAssetsSummary() {
    try {
        const response = await client.restAPI.querySubAccountSpotAssetsSummary();

        const rateLimits = response.rateLimits!;
        console.log('querySubAccountSpotAssetsSummary() rate limits:', rateLimits);

        const data = await response.data();
        console.log('querySubAccountSpotAssetsSummary() response:', data);
    } catch (error) {
        console.error('querySubAccountSpotAssetsSummary() error:', error);
    }
}

querySubAccountSpotAssetsSummary();
