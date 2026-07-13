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

async function getDualInvestmentProductList() {
    try {
        const response = await client.restAPI.getDualInvestmentProductList({
            optionType: DualInvestmentRestAPI.GetDualInvestmentProductListOptionTypeEnum.CALL,
            exercisedCoin: 'USDT',
            investCoin: 'BNB',
        });

        const rateLimits = response.rateLimits!;
        console.log('getDualInvestmentProductList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getDualInvestmentProductList() response:', data);
    } catch (error) {
        console.error('getDualInvestmentProductList() error:', error);
    }
}

getDualInvestmentProductList();
