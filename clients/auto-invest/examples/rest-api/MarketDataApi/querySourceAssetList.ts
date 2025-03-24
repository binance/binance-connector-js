import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function querySourceAssetList() {
    try {
        const response = await client.restAPI.querySourceAssetList({
            usageType: 'usageType_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('querySourceAssetList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('querySourceAssetList() response:', data);
    } catch (error) {
        console.error('querySourceAssetList() error:', error);
    }
}

querySourceAssetList();
