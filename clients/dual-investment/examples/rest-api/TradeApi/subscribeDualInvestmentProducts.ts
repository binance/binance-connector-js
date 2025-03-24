import { DualInvestment, DUAL_INVESTMENT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DUAL_INVESTMENT_REST_API_PROD_URL,
};
const client = new DualInvestment({ configurationRestAPI });

async function subscribeDualInvestmentProducts() {
    try {
        const response = await client.restAPI.subscribeDualInvestmentProducts({
            id: 'id_example',
            orderId: '1',
            depositAmount: 1,
            autoCompoundPlan: 'NONE',
        });

        const rateLimits = response.rateLimits!;
        console.log('subscribeDualInvestmentProducts() rate limits:', rateLimits);

        const data = await response.data();
        console.log('subscribeDualInvestmentProducts() response:', data);
    } catch (error) {
        console.error('subscribeDualInvestmentProducts() error:', error);
    }
}

subscribeDualInvestmentProducts();
