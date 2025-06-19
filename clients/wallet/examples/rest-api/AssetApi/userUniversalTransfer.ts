import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function userUniversalTransfer() {
    try {
        const response = await client.restAPI.userUniversalTransfer({
            type: 'type_example',
            asset: 'asset_example',
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('userUniversalTransfer() rate limits:', rateLimits);

        const data = await response.data();
        console.log('userUniversalTransfer() response:', data);
    } catch (error) {
        console.error('userUniversalTransfer() error:', error);
    }
}

userUniversalTransfer();
