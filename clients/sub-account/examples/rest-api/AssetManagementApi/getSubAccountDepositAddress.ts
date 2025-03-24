import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function getSubAccountDepositAddress() {
    try {
        const response = await client.restAPI.getSubAccountDepositAddress({
            email: 'sub-account-email@email.com',
            coin: 'coin_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('getSubAccountDepositAddress() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getSubAccountDepositAddress() response:', data);
    } catch (error) {
        console.error('getSubAccountDepositAddress() error:', error);
    }
}

getSubAccountDepositAddress();
