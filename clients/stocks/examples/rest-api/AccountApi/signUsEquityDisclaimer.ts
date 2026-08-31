import { Stocks, STOCKS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCKS_REST_API_PROD_URL,
};
const client = new Stocks({ configurationRestAPI });

async function signUsEquityDisclaimer() {
    try {
        const response = await client.restAPI.signUsEquityDisclaimer();

        const rateLimits = response.rateLimits!;
        console.log('signUsEquityDisclaimer() rate limits:', rateLimits);

        const data = await response.data();
        console.log('signUsEquityDisclaimer() response:', data);
    } catch (error) {
        console.error('signUsEquityDisclaimer() error:', error);
    }
}

signUsEquityDisclaimer();
