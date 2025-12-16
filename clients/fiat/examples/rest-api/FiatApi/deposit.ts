import { Fiat, FIAT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? FIAT_REST_API_PROD_URL,
};
const client = new Fiat({ configurationRestAPI });

async function deposit() {
    try {
        const response = await client.restAPI.deposit({
            currency: 'currency_example',
            apiPaymentMethod: 'apiPaymentMethod_example',
            amount: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('deposit() rate limits:', rateLimits);

        const data = await response.data();
        console.log('deposit() response:', data);
    } catch (error) {
        console.error('deposit() error:', error);
    }
}

deposit();
