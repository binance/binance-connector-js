import { DualInvestment, DUAL_INVESTMENT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DUAL_INVESTMENT_REST_API_PROD_URL,
};
const client = new DualInvestment({ configurationRestAPI });

async function getDualInvestmentPositions() {
    try {
        const response = await client.restAPI.getDualInvestmentPositions();

        const rateLimits = response.rateLimits!;
        console.log('getDualInvestmentPositions() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getDualInvestmentPositions() response:', data);
    } catch (error) {
        console.error('getDualInvestmentPositions() error:', error);
    }
}

getDualInvestmentPositions();
