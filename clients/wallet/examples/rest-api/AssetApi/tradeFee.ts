import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function tradeFee() {
    try {
        const response = await client.restAPI.tradeFee();

        const rateLimits = response.rateLimits!;
        console.log('tradeFee() rate limits:', rateLimits);

        const data = await response.data();
        console.log('tradeFee() response:', data);
    } catch (error) {
        console.error('tradeFee() error:', error);
    }
}

tradeFee();
