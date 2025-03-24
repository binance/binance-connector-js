import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function subAccountTransferHistory() {
    try {
        const response = await client.restAPI.subAccountTransferHistory();

        const rateLimits = response.rateLimits!;
        console.log('subAccountTransferHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('subAccountTransferHistory() response:', data);
    } catch (error) {
        console.error('subAccountTransferHistory() error:', error);
    }
}

subAccountTransferHistory();
