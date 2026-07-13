import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function queryLiquidationLoan() {
    try {
        const response = await client.restAPI.queryLiquidationLoan();

        const rateLimits = response.rateLimits!;
        console.log('queryLiquidationLoan() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryLiquidationLoan() response:', data);
    } catch (error) {
        console.error('queryLiquidationLoan() error:', error);
    }
}

queryLiquidationLoan();
