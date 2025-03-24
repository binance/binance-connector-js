import { Convert, CONVERT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CONVERT_REST_API_PROD_URL,
};
const client = new Convert({ configurationRestAPI });

async function queryOrderQuantityPrecisionPerAsset() {
    try {
        const response = await client.restAPI.queryOrderQuantityPrecisionPerAsset();

        const rateLimits = response.rateLimits!;
        console.log('queryOrderQuantityPrecisionPerAsset() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryOrderQuantityPrecisionPerAsset() response:', data);
    } catch (error) {
        console.error('queryOrderQuantityPrecisionPerAsset() error:', error);
    }
}

queryOrderQuantityPrecisionPerAsset();
