import { CryptoLoan, CRYPTO_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CRYPTO_LOAN_REST_API_PROD_URL,
};
const client = new CryptoLoan({ configurationRestAPI });

async function getFlexibleLoanCollateralAssetsData() {
    try {
        const response = await client.restAPI.getFlexibleLoanCollateralAssetsData();

        const rateLimits = response.rateLimits!;
        console.log('getFlexibleLoanCollateralAssetsData() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getFlexibleLoanCollateralAssetsData() response:', data);
    } catch (error) {
        console.error('getFlexibleLoanCollateralAssetsData() error:', error);
    }
}

getFlexibleLoanCollateralAssetsData();
