import { StockOptions, STOCK_OPTIONS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCK_OPTIONS_REST_API_PROD_URL,
};
const client = new StockOptions({ configurationRestAPI });

async function optionTradeHistory() {
    try {
        const response = await client.restAPI.optionTradeHistory({
            startTime: 1790100000000,
            endTime: 1790200000000,
        });

        const rateLimits = response.rateLimits!;
        console.log('optionTradeHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('optionTradeHistory() response:', data);
    } catch (error) {
        console.error('optionTradeHistory() error:', error);
    }
}

optionTradeHistory();
