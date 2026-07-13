import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function liquidationLoanRepay() {
    try {
        const response = await client.restAPI.liquidationLoanRepay({
            asset: 'USDT',
            amount: 300.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('liquidationLoanRepay() rate limits:', rateLimits);

        const data = await response.data();
        console.log('liquidationLoanRepay() response:', data);
    } catch (error) {
        console.error('liquidationLoanRepay() error:', error);
    }
}

liquidationLoanRepay();
