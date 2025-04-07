import { NFT, NFT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? NFT_REST_API_PROD_URL,
};
const client = new NFT({ configurationRestAPI });

async function getNFTWithdrawHistory() {
    try {
        const response = await client.restAPI.getNFTWithdrawHistory();

        const rateLimits = response.rateLimits!;
        console.log('getNFTWithdrawHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getNFTWithdrawHistory() response:', data);
    } catch (error) {
        console.error('getNFTWithdrawHistory() error:', error);
    }
}

getNFTWithdrawHistory();
