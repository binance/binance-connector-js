import { VIPLoan, VIP_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? VIP_LOAN_REST_API_PROD_URL,
};
const client = new VIPLoan({ configurationRestAPI });

async function getVIPLoanRepaymentHistory() {
    try {
        const response = await client.restAPI.getVIPLoanRepaymentHistory();

        const rateLimits = response.rateLimits!;
        console.log('getVIPLoanRepaymentHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getVIPLoanRepaymentHistory() response:', data);
    } catch (error) {
        console.error('getVIPLoanRepaymentHistory() error:', error);
    }
}

getVIPLoanRepaymentHistory();
