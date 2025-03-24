import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function investmentPlanAdjustment() {
    try {
        const response = await client.restAPI.investmentPlanAdjustment({
            planId: 1,
            subscriptionAmount: 1,
            subscriptionCycle: 'subscriptionCycle_example',
            subscriptionStartTime: 789,
            sourceAsset: 'sourceAsset_example',
            details: [],
        });

        const rateLimits = response.rateLimits!;
        console.log('investmentPlanAdjustment() rate limits:', rateLimits);

        const data = await response.data();
        console.log('investmentPlanAdjustment() response:', data);
    } catch (error) {
        console.error('investmentPlanAdjustment() error:', error);
    }
}

investmentPlanAdjustment();
