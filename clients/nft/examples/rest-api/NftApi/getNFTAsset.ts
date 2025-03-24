import { NFT, NFT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? NFT_REST_API_PROD_URL,
};
const client = new NFT({ configurationRestAPI });

async function getNFTAsset() {
    try {
        const response = await client.restAPI.getNFTAsset();

        const rateLimits = response.rateLimits!;
        console.log('getNFTAsset() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getNFTAsset() response:', data);
    } catch (error) {
        console.error('getNFTAsset() error:', error);
    }
}

getNFTAsset();
