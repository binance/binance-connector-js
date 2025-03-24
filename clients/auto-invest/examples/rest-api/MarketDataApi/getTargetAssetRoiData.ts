import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function getTargetAssetRoiData() {
    try {
        const response = await client.restAPI.getTargetAssetRoiData({
            targetAsset: 'targetAsset_example',
            hisRoiType: 'hisRoiType_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('getTargetAssetRoiData() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getTargetAssetRoiData() response:', data);
    } catch (error) {
        console.error('getTargetAssetRoiData() error:', error);
    }
}

getTargetAssetRoiData();
