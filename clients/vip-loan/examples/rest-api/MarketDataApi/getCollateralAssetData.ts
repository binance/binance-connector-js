import { VIPLoan, VIP_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? VIP_LOAN_REST_API_PROD_URL,
};
const client = new VIPLoan({ configurationRestAPI });

async function getCollateralAssetData() {
    try {
        const response = await client.restAPI.getCollateralAssetData();

        const rateLimits = response.rateLimits!;
        console.log('getCollateralAssetData() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getCollateralAssetData() response:', data);
    } catch (error) {
        console.error('getCollateralAssetData() error:', error);
    }
}

getCollateralAssetData();
