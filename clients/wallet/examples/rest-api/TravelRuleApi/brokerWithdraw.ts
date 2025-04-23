import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function brokerWithdraw() {
    try {
        const response = await client.restAPI.brokerWithdraw({
            address: 'address_example',
            coin: 'coin_example',
            amount: 1,
            withdrawOrderId: '1',
            questionnaire: 'questionnaire_example',
            originatorPii: 'originatorPii_example',
            signature: 'signature_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('brokerWithdraw() rate limits:', rateLimits);

        const data = await response.data();
        console.log('brokerWithdraw() response:', data);
    } catch (error) {
        console.error('brokerWithdraw() error:', error);
    }
}

brokerWithdraw();
