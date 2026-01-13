import { CryptoLoan, CRYPTO_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CRYPTO_LOAN_REST_API_PROD_URL,
};
const client = new CryptoLoan({ configurationRestAPI });

async function getFlexibleLoanInterestRateHistory() {
    try {
        const response = await client.restAPI.getFlexibleLoanInterestRateHistory({
            coin: 'coin_example',
            recvWindow: 5000,
        });

        const rateLimits = response.rateLimits!;
        console.log('getFlexibleLoanInterestRateHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getFlexibleLoanInterestRateHistory() response:', data);
    } catch (error) {
        console.error('getFlexibleLoanInterestRateHistory() error:', error);
    }
}

getFlexibleLoanInterestRateHistory();
