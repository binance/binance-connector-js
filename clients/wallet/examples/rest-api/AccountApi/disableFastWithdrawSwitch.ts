import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function disableFastWithdrawSwitch() {
    try {
        const response = await client.restAPI.disableFastWithdrawSwitch();

        const rateLimits = response.rateLimits!;
        console.log('disableFastWithdrawSwitch() rate limits:', rateLimits);

        const data = await response.data();
        console.log('disableFastWithdrawSwitch() response:', data);
    } catch (error) {
        console.error('disableFastWithdrawSwitch() error:', error);
    }
}

disableFastWithdrawSwitch();
