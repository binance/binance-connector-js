import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function submitDepositQuestionnaireV2() {
    try {
        const response = await client.restAPI.submitDepositQuestionnaireV2({
            depositId: 1,
            questionnaire: 'questionnaire_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('submitDepositQuestionnaireV2() rate limits:', rateLimits);

        const data = await response.data();
        console.log('submitDepositQuestionnaireV2() response:', data);
    } catch (error) {
        console.error('submitDepositQuestionnaireV2() error:', error);
    }
}

submitDepositQuestionnaireV2();
