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
            supplyRequest: '1212:0.12:100;3434:0.13:50',
            borrowCoin: 'BUSD',
            loanTerm: 30,
            borrowUid: 12345678,
            collateralCoin: 'BNB,ETH,BTC',
            collateralAccountId: '12345,67890,13579',
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
