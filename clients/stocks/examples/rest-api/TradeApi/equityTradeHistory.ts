import { Stocks, STOCKS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCKS_REST_API_PROD_URL,
};
const client = new Stocks({ configurationRestAPI });

async function equityTradeHistory() {
    try {
        const response = await client.restAPI.equityTradeHistory({
            startTime: 1735800000000,
            endTime: 1735900000000,
        });

        const rateLimits = response.rateLimits!;
        console.log('equityTradeHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('equityTradeHistory() response:', data);
    } catch (error) {
        console.error('equityTradeHistory() error:', error);
    }
}

equityTradeHistory();
