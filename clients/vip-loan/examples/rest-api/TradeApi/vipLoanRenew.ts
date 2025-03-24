import { VIPLoan, VIP_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? VIP_LOAN_REST_API_PROD_URL,
};
const client = new VIPLoan({ configurationRestAPI });

async function vipLoanRenew() {
    try {
        const response = await client.restAPI.vipLoanRenew({
            orderId: 1,
            loanTerm: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('vipLoanRenew() rate limits:', rateLimits);

        const data = await response.data();
        console.log('vipLoanRenew() response:', data);
    } catch (error) {
        console.error('vipLoanRenew() error:', error);
    }
}

vipLoanRenew();
