import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function queryUserWalletBalance() {
    try {
        const response = await client.restAPI.queryUserWalletBalance();

        const rateLimits = response.rateLimits!;
        console.log('queryUserWalletBalance() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryUserWalletBalance() response:', data);
    } catch (error) {
        console.error('queryUserWalletBalance() error:', error);
    }
}

queryUserWalletBalance();
