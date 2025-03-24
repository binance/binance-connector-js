import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function getManagedSubAccountDepositAddress() {
    try {
        const response = await client.restAPI.getManagedSubAccountDepositAddress({
            email: 'sub-account-email@email.com',
            coin: 'coin_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('getManagedSubAccountDepositAddress() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getManagedSubAccountDepositAddress() response:', data);
    } catch (error) {
        console.error('getManagedSubAccountDepositAddress() error:', error);
    }
}

getManagedSubAccountDepositAddress();
