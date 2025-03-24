import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function oneTimeTransaction() {
    try {
        const response = await client.restAPI.oneTimeTransaction({
            sourceType: 'sourceType_example',
            subscriptionAmount: 1,
            sourceAsset: 'sourceAsset_example',
            details: [],
        });

        const rateLimits = response.rateLimits!;
        console.log('oneTimeTransaction() rate limits:', rateLimits);

        const data = await response.data();
        console.log('oneTimeTransaction() response:', data);
    } catch (error) {
        console.error('oneTimeTransaction() error:', error);
    }
}

oneTimeTransaction();
