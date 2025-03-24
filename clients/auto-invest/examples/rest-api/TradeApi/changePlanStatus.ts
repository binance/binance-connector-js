import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function changePlanStatus() {
    try {
        const response = await client.restAPI.changePlanStatus({
            planId: 1,
            status: 'status_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('changePlanStatus() rate limits:', rateLimits);

        const data = await response.data();
        console.log('changePlanStatus() response:', data);
    } catch (error) {
        console.error('changePlanStatus() error:', error);
    }
}

changePlanStatus();
