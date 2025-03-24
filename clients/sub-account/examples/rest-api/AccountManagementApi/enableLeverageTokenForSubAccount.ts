import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function enableLeverageTokenForSubAccount() {
    try {
        const response = await client.restAPI.enableLeverageTokenForSubAccount({
            email: 'sub-account-email@email.com',
            enableBlvt: true,
        });

        const rateLimits = response.rateLimits!;
        console.log('enableLeverageTokenForSubAccount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('enableLeverageTokenForSubAccount() response:', data);
    } catch (error) {
        console.error('enableLeverageTokenForSubAccount() error:', error);
    }
}

enableLeverageTokenForSubAccount();
