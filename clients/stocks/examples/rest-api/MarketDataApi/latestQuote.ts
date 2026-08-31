import { Stocks, STOCKS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCKS_REST_API_PROD_URL,
};
const client = new Stocks({ configurationRestAPI });

async function latestQuote() {
    try {
        const response = await client.restAPI.latestQuote({
            symbol: 'AAPL',
        });

        const rateLimits = response.rateLimits!;
        console.log('latestQuote() rate limits:', rateLimits);

        const data = await response.data();
        console.log('latestQuote() response:', data);
    } catch (error) {
        console.error('latestQuote() error:', error);
    }
}

latestQuote();
