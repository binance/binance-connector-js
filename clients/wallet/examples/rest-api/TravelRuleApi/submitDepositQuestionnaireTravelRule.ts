import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function submitDepositQuestionnaireTravelRule() {
    try {
        const response = await client.restAPI.submitDepositQuestionnaireTravelRule({
            tranId: 1,
            questionnaire: 'questionnaire_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('submitDepositQuestionnaireTravelRule() rate limits:', rateLimits);

        const data = await response.data();
        console.log('submitDepositQuestionnaireTravelRule() response:', data);
    } catch (error) {
        console.error('submitDepositQuestionnaireTravelRule() error:', error);
    }
}

submitDepositQuestionnaireTravelRule();
