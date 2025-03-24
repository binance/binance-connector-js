import { VIPLoan, VIP_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? VIP_LOAN_REST_API_PROD_URL,
};
const client = new VIPLoan({ configurationRestAPI });

async function getBorrowInterestRate() {
    try {
        const response = await client.restAPI.getBorrowInterestRate({
            loanCoin: 'loanCoin_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('getBorrowInterestRate() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getBorrowInterestRate() response:', data);
    } catch (error) {
        console.error('getBorrowInterestRate() error:', error);
    }
}

getBorrowInterestRate();
