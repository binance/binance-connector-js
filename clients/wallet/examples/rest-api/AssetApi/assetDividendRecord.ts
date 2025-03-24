import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function assetDividendRecord() {
    try {
        const response = await client.restAPI.assetDividendRecord();

        const rateLimits = response.rateLimits!;
        console.log('assetDividendRecord() rate limits:', rateLimits);

        const data = await response.data();
        console.log('assetDividendRecord() response:', data);
    } catch (error) {
        console.error('assetDividendRecord() error:', error);
    }
}

assetDividendRecord();
