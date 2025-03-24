import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function withdrawHistoryV1() {
    try {
        const response = await client.restAPI.withdrawHistoryV1();

        const rateLimits = response.rateLimits!;
        console.log('withdrawHistoryV1() rate limits:', rateLimits);

        const data = await response.data();
        console.log('withdrawHistoryV1() response:', data);
    } catch (error) {
        console.error('withdrawHistoryV1() error:', error);
    }
}

withdrawHistoryV1();
