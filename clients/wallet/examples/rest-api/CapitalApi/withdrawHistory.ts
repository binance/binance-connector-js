import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function withdrawHistory() {
    try {
        const response = await client.restAPI.withdrawHistory();

        const rateLimits = response.rateLimits!;
        console.log('withdrawHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('withdrawHistory() response:', data);
    } catch (error) {
        console.error('withdrawHistory() error:', error);
    }
}

withdrawHistory();
