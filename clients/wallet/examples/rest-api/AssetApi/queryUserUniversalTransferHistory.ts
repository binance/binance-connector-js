import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function queryUserUniversalTransferHistory() {
    try {
        const response = await client.restAPI.queryUserUniversalTransferHistory({
            type: 'type_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryUserUniversalTransferHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryUserUniversalTransferHistory() response:', data);
    } catch (error) {
        console.error('queryUserUniversalTransferHistory() error:', error);
    }
}

queryUserUniversalTransferHistory();
