import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function withdraw() {
    try {
        const response = await client.restAPI.withdraw({
            coin: 'coin_example',
            address: 'address_example',
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('withdraw() rate limits:', rateLimits);

        const data = await response.data();
        console.log('withdraw() response:', data);
    } catch (error) {
        console.error('withdraw() error:', error);
    }
}

withdraw();
