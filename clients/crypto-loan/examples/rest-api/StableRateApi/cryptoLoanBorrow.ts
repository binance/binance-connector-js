import { CryptoLoan, CRYPTO_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CRYPTO_LOAN_REST_API_PROD_URL,
};
const client = new CryptoLoan({ configurationRestAPI });

async function cryptoLoanBorrow() {
    try {
        const response = await client.restAPI.cryptoLoanBorrow({
            loanCoin: 'loanCoin_example',
            collateralCoin: 'collateralCoin_example',
            loanTerm: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('cryptoLoanBorrow() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cryptoLoanBorrow() response:', data);
    } catch (error) {
        console.error('cryptoLoanBorrow() error:', error);
    }
}

cryptoLoanBorrow();
