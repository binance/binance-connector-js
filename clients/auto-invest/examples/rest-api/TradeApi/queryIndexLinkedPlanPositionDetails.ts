import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function queryIndexLinkedPlanPositionDetails() {
    try {
        const response = await client.restAPI.queryIndexLinkedPlanPositionDetails({
            indexId: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('queryIndexLinkedPlanPositionDetails() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryIndexLinkedPlanPositionDetails() response:', data);
    } catch (error) {
        console.error('queryIndexLinkedPlanPositionDetails() error:', error);
    }
}

queryIndexLinkedPlanPositionDetails();
