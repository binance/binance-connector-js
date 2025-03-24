import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function withdrawHistoryV2() {
    try {
        const response = await client.restAPI.withdrawHistoryV2();

        const rateLimits = response.rateLimits!;
        console.log('withdrawHistoryV2() rate limits:', rateLimits);

        const data = await response.data();
        console.log('withdrawHistoryV2() response:', data);
    } catch (error) {
        console.error('withdrawHistoryV2() error:', error);
    }
}

withdrawHistoryV2();
