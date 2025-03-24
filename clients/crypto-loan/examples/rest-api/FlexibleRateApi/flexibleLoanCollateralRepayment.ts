import { CryptoLoan, CRYPTO_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CRYPTO_LOAN_REST_API_PROD_URL,
};
const client = new CryptoLoan({ configurationRestAPI });

async function flexibleLoanCollateralRepayment() {
    try {
        const response = await client.restAPI.flexibleLoanCollateralRepayment({
            loanCoin: 'loanCoin_example',
            collateralCoin: 'collateralCoin_example',
            repayAmount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('flexibleLoanCollateralRepayment() rate limits:', rateLimits);

        const data = await response.data();
        console.log('flexibleLoanCollateralRepayment() response:', data);
    } catch (error) {
        console.error('flexibleLoanCollateralRepayment() error:', error);
    }
}

flexibleLoanCollateralRepayment();
