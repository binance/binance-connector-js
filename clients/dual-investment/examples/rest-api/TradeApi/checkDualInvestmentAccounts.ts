import { DualInvestment, DUAL_INVESTMENT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DUAL_INVESTMENT_REST_API_PROD_URL,
};
const client = new DualInvestment({ configurationRestAPI });

async function checkDualInvestmentAccounts() {
    try {
        const response = await client.restAPI.checkDualInvestmentAccounts();

        const rateLimits = response.rateLimits!;
        console.log('checkDualInvestmentAccounts() rate limits:', rateLimits);

        const data = await response.data();
        console.log('checkDualInvestmentAccounts() response:', data);
    } catch (error) {
        console.error('checkDualInvestmentAccounts() error:', error);
    }
}

checkDualInvestmentAccounts();
