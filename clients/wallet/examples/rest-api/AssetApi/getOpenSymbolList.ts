import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function getOpenSymbolList() {
    try {
        const response = await client.restAPI.getOpenSymbolList();

        const rateLimits = response.rateLimits!;
        console.log('getOpenSymbolList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getOpenSymbolList() response:', data);
    } catch (error) {
        console.error('getOpenSymbolList() error:', error);
    }
}

getOpenSymbolList();
