import { NFT, NFT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? NFT_REST_API_PROD_URL,
};
const client = new NFT({ configurationRestAPI });

async function getNFTTransactionHistory() {
    try {
        const response = await client.restAPI.getNFTTransactionHistory({
            orderType: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('getNFTTransactionHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getNFTTransactionHistory() response:', data);
    } catch (error) {
        console.error('getNFTTransactionHistory() error:', error);
    }
}

getNFTTransactionHistory();
