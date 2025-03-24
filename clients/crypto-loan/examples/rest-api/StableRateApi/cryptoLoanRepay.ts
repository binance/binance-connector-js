import { CryptoLoan, CRYPTO_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CRYPTO_LOAN_REST_API_PROD_URL,
};
const client = new CryptoLoan({ configurationRestAPI });

async function cryptoLoanRepay() {
    try {
        const response = await client.restAPI.cryptoLoanRepay({
            orderId: 1,
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('cryptoLoanRepay() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cryptoLoanRepay() response:', data);
    } catch (error) {
        console.error('cryptoLoanRepay() error:', error);
    }
}

cryptoLoanRepay();
