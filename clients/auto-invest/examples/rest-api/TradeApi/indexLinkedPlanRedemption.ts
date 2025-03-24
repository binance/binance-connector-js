import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function indexLinkedPlanRedemption() {
    try {
        const response = await client.restAPI.indexLinkedPlanRedemption({
            indexId: 1,
            redemptionPercentage: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('indexLinkedPlanRedemption() rate limits:', rateLimits);

        const data = await response.data();
        console.log('indexLinkedPlanRedemption() response:', data);
    } catch (error) {
        console.error('indexLinkedPlanRedemption() error:', error);
    }
}

indexLinkedPlanRedemption();
