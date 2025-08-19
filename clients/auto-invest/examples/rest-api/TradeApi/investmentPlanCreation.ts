import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function investmentPlanCreation() {
    try {
        const response = await client.restAPI.investmentPlanCreation({
            sourceType: 'sourceType_example',
            planType: 'planType_example',
            subscriptionAmount: 1.0,
            subscriptionCycle: 'subscriptionCycle_example',
            subscriptionStartTime: 789,
            sourceAsset: 'sourceAsset_example',
            details: [],
        });

        const rateLimits = response.rateLimits!;
        console.log('investmentPlanCreation() rate limits:', rateLimits);

        const data = await response.data();
        console.log('investmentPlanCreation() response:', data);
    } catch (error) {
        console.error('investmentPlanCreation() error:', error);
    }
}

investmentPlanCreation();
