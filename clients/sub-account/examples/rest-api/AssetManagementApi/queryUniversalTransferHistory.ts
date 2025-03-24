import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function queryUniversalTransferHistory() {
    try {
        const response = await client.restAPI.queryUniversalTransferHistory();

        const rateLimits = response.rateLimits!;
        console.log('queryUniversalTransferHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryUniversalTransferHistory() response:', data);
    } catch (error) {
        console.error('queryUniversalTransferHistory() error:', error);
    }
}

queryUniversalTransferHistory();
