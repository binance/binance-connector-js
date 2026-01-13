import { VIPLoan, VIP_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? VIP_LOAN_REST_API_PROD_URL,
};
const client = new VIPLoan({ configurationRestAPI });

async function getVIPLoanInterestRateHistory() {
    try {
        const response = await client.restAPI.getVIPLoanInterestRateHistory({
            coin: 'coin_example',
            recvWindow: 5000,
        });

        const rateLimits = response.rateLimits!;
        console.log('getVIPLoanInterestRateHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getVIPLoanInterestRateHistory() response:', data);
    } catch (error) {
        console.error('getVIPLoanInterestRateHistory() error:', error);
    }
}

getVIPLoanInterestRateHistory();
