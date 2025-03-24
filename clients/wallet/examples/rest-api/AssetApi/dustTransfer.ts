import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function dustTransfer() {
    try {
        const response = await client.restAPI.dustTransfer({
            asset: 'asset_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('dustTransfer() rate limits:', rateLimits);

        const data = await response.data();
        console.log('dustTransfer() response:', data);
    } catch (error) {
        console.error('dustTransfer() error:', error);
    }
}

dustTransfer();
