import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function getRegionList() {
    try {
        const response = await client.restAPI.getRegionList({
            countryCode: 'countryCode_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('getRegionList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getRegionList() response:', data);
    } catch (error) {
        console.error('getRegionList() error:', error);
    }
}

getRegionList();
