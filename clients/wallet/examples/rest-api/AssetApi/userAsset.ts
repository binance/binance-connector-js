import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function userAsset() {
    try {
        const response = await client.restAPI.userAsset();

        const rateLimits = response.rateLimits!;
        console.log('userAsset() rate limits:', rateLimits);

        const data = await response.data();
        console.log('userAsset() response:', data);
    } catch (error) {
        console.error('userAsset() error:', error);
    }
}

userAsset();
