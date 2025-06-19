import { VIPLoan, VIP_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? VIP_LOAN_REST_API_PROD_URL,
};
const client = new VIPLoan({ configurationRestAPI });

async function vipLoanRepay() {
    try {
        const response = await client.restAPI.vipLoanRepay({
            orderId: 1,
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('vipLoanRepay() rate limits:', rateLimits);

        const data = await response.data();
        console.log('vipLoanRepay() response:', data);
    } catch (error) {
        console.error('vipLoanRepay() error:', error);
    }
}

vipLoanRepay();
