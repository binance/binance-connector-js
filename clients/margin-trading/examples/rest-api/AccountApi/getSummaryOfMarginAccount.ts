import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function getSummaryOfMarginAccount() {
    try {
        const response = await client.restAPI.getSummaryOfMarginAccount();

        const rateLimits = response.rateLimits!;
        console.log('getSummaryOfMarginAccount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getSummaryOfMarginAccount() response:', data);
    } catch (error) {
        console.error('getSummaryOfMarginAccount() error:', error);
    }
}

getSummaryOfMarginAccount();
