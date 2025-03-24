import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function oneClickArrivalDepositApply() {
    try {
        const response = await client.restAPI.oneClickArrivalDepositApply();

        const rateLimits = response.rateLimits!;
        console.log('oneClickArrivalDepositApply() rate limits:', rateLimits);

        const data = await response.data();
        console.log('oneClickArrivalDepositApply() response:', data);
    } catch (error) {
        console.error('oneClickArrivalDepositApply() error:', error);
    }
}

oneClickArrivalDepositApply();
