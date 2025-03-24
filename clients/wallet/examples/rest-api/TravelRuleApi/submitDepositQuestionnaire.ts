import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function submitDepositQuestionnaire() {
    try {
        const response = await client.restAPI.submitDepositQuestionnaire({
            tranId: 1,
            questionnaire: 'questionnaire_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('submitDepositQuestionnaire() rate limits:', rateLimits);

        const data = await response.data();
        console.log('submitDepositQuestionnaire() response:', data);
    } catch (error) {
        console.error('submitDepositQuestionnaire() error:', error);
    }
}

submitDepositQuestionnaire();
