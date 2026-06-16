import { VIPLoan, VIP_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? VIP_LOAN_REST_API_PROD_URL,
};
const client = new VIPLoan({ configurationRestAPI });

async function vipLoanFixedRateBorrow() {
    try {
        const response = await client.restAPI.vipLoanFixedRateBorrow({
            supplyRequest: 'supplyRequest_example',
            borrowCoin: 'borrowCoin_example',
            loanTerm: 789,
            borrowUid: 789,
            collateralCoin: 'collateralCoin_example',
            collateralAccountId: '1',
        });

        const rateLimits = response.rateLimits!;
        console.log('vipLoanFixedRateBorrow() rate limits:', rateLimits);

        const data = await response.data();
        console.log('vipLoanFixedRateBorrow() response:', data);
    } catch (error) {
        console.error('vipLoanFixedRateBorrow() error:', error);
    }
}

vipLoanFixedRateBorrow();
