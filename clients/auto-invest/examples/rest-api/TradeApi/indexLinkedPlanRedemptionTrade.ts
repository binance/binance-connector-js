import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function indexLinkedPlanRedemptionTrade() {
    try {
        const response = await client.restAPI.indexLinkedPlanRedemptionTrade({
            requestId: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('indexLinkedPlanRedemptionTrade() rate limits:', rateLimits);

        const data = await response.data();
        console.log('indexLinkedPlanRedemptionTrade() response:', data);
    } catch (error) {
        console.error('indexLinkedPlanRedemptionTrade() error:', error);
    }
}

indexLinkedPlanRedemptionTrade();
