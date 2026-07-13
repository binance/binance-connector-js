import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function queryLiquidationLoanRepayHistory() {
    try {
        const response = await client.restAPI.queryLiquidationLoanRepayHistory();

        const rateLimits = response.rateLimits!;
        console.log('queryLiquidationLoanRepayHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryLiquidationLoanRepayHistory() response:', data);
    } catch (error) {
        console.error('queryLiquidationLoanRepayHistory() error:', error);
    }
}

queryLiquidationLoanRepayHistory();
