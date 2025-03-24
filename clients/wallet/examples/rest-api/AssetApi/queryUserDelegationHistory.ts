import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function queryUserDelegationHistory() {
    try {
        const response = await client.restAPI.queryUserDelegationHistory({
            email: 'email_example',
            startTime: 1623319461670,
            endTime: 1641782889000,
        });

        const rateLimits = response.rateLimits!;
        console.log('queryUserDelegationHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryUserDelegationHistory() response:', data);
    } catch (error) {
        console.error('queryUserDelegationHistory() error:', error);
    }
}

queryUserDelegationHistory();
