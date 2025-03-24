import { AutoInvest, AUTO_INVEST_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? AUTO_INVEST_REST_API_PROD_URL,
};
const client = new AutoInvest({ configurationRestAPI });

async function queryIndexDetails() {
    try {
        const response = await client.restAPI.queryIndexDetails({
            indexId: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('queryIndexDetails() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryIndexDetails() response:', data);
    } catch (error) {
        console.error('queryIndexDetails() error:', error);
    }
}

queryIndexDetails();
