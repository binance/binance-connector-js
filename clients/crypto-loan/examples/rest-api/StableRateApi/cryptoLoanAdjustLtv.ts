import { CryptoLoan, CRYPTO_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CRYPTO_LOAN_REST_API_PROD_URL,
};
const client = new CryptoLoan({ configurationRestAPI });

async function cryptoLoanAdjustLtv() {
    try {
        const response = await client.restAPI.cryptoLoanAdjustLtv({
            orderId: 1,
            amount: 1,
            direction: 'direction_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('cryptoLoanAdjustLtv() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cryptoLoanAdjustLtv() response:', data);
    } catch (error) {
        console.error('cryptoLoanAdjustLtv() error:', error);
    }
}

cryptoLoanAdjustLtv();
