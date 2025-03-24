import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function getCloudMiningPaymentAndRefundHistory() {
    try {
        const response = await client.restAPI.getCloudMiningPaymentAndRefundHistory({
            startTime: 1623319461670,
            endTime: 1641782889000,
        });

        const rateLimits = response.rateLimits!;
        console.log('getCloudMiningPaymentAndRefundHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getCloudMiningPaymentAndRefundHistory() response:', data);
    } catch (error) {
        console.error('getCloudMiningPaymentAndRefundHistory() error:', error);
    }
}

getCloudMiningPaymentAndRefundHistory();
