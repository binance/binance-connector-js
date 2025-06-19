import { CryptoLoan, CRYPTO_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CRYPTO_LOAN_REST_API_PROD_URL,
};
const client = new CryptoLoan({ configurationRestAPI });

async function flexibleLoanAdjustLtv() {
    try {
        const response = await client.restAPI.flexibleLoanAdjustLtv({
            loanCoin: 'loanCoin_example',
            collateralCoin: 'collateralCoin_example',
            adjustmentAmount: 1.0,
            direction: 'direction_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('flexibleLoanAdjustLtv() rate limits:', rateLimits);

        const data = await response.data();
        console.log('flexibleLoanAdjustLtv() response:', data);
    } catch (error) {
        console.error('flexibleLoanAdjustLtv() error:', error);
    }
}

flexibleLoanAdjustLtv();
