import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function withdrawTravelRule() {
    try {
        const response = await client.restAPI.withdrawTravelRule({
            coin: 'coin_example',
            address: 'address_example',
            amount: 1.0,
            questionnaire: 'questionnaire_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('withdrawTravelRule() rate limits:', rateLimits);

        const data = await response.data();
        console.log('withdrawTravelRule() response:', data);
    } catch (error) {
        console.error('withdrawTravelRule() error:', error);
    }
}

withdrawTravelRule();
