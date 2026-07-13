import {
    DualInvestment,
    DualInvestmentRestAPI,
    DUAL_INVESTMENT_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DUAL_INVESTMENT_REST_API_PROD_URL,
};
const client = new DualInvestment({ configurationRestAPI });

async function subscribeDualInvestmentProducts() {
    try {
        const response = await client.restAPI.subscribeDualInvestmentProducts({
            id: '741590',
            orderId: '8257205859',
            depositAmount: 1,
            autoCompoundPlan:
                DualInvestmentRestAPI.SubscribeDualInvestmentProductsAutoCompoundPlanEnum.NONE,
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
