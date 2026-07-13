import { VIPLoan, VIP_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? VIP_LOAN_REST_API_PROD_URL,
};
const client = new VIPLoan({ configurationRestAPI });

async function vipLoanBorrow() {
    try {
        const response = await client.restAPI.vipLoanBorrow({
            loanAccountId: 1,
            loanCoin: 'BTC',
            loanAmount: 1.0,
            collateralAccountId: '12345678,12345678,12345678',
            collateralCoin: 'BUSD,USDT,ETH',
            isFlexibleRate: true,
        });

        const rateLimits = response.rateLimits!;
        console.log('vipLoanBorrow() rate limits:', rateLimits);

        const data = await response.data();
        console.log('vipLoanBorrow() response:', data);
    } catch (error) {
        console.error('vipLoanBorrow() error:', error);
    }
}

vipLoanBorrow();
