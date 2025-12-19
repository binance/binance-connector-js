import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function dustConvertibleAssets() {
    try {
        const response = await client.restAPI.dustConvertibleAssets({
            targetAsset: 'targetAsset_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('dustConvertibleAssets() rate limits:', rateLimits);

        const data = await response.data();
        console.log('dustConvertibleAssets() response:', data);
    } catch (error) {
        console.error('dustConvertibleAssets() error:', error);
    }
}

dustConvertibleAssets();
