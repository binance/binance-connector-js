import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function queryHoldingDetailsOfThePlan() {
    try {
        const response = await client.restAPI.queryHoldingDetailsOfThePlan();

        const rateLimits = response.rateLimits!;
        console.log('queryHoldingDetailsOfThePlan() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryHoldingDetailsOfThePlan() response:', data);
    } catch (error) {
        console.error('queryHoldingDetailsOfThePlan() error:', error);
    }
}

queryHoldingDetailsOfThePlan();
