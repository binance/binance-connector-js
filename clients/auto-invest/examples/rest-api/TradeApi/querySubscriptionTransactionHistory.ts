import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function querySubscriptionTransactionHistory() {
    try {
        const response = await client.restAPI.querySubscriptionTransactionHistory();

        const rateLimits = response.rateLimits!;
        console.log('querySubscriptionTransactionHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('querySubscriptionTransactionHistory() response:', data);
    } catch (error) {
        console.error('querySubscriptionTransactionHistory() error:', error);
    }
}

querySubscriptionTransactionHistory();
