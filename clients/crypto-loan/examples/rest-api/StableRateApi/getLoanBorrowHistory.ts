import { CryptoLoan, CRYPTO_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CRYPTO_LOAN_REST_API_PROD_URL,
};
const client = new CryptoLoan({ configurationRestAPI });

async function getLoanBorrowHistory() {
    try {
        const response = await client.restAPI.getLoanBorrowHistory();

        const rateLimits = response.rateLimits!;
        console.log('getLoanBorrowHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getLoanBorrowHistory() response:', data);
    } catch (error) {
        console.error('getLoanBorrowHistory() error:', error);
    }
}

getLoanBorrowHistory();
