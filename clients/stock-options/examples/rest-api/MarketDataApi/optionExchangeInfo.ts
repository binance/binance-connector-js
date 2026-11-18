import { StockOptions, STOCK_OPTIONS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCK_OPTIONS_REST_API_PROD_URL,
};
const client = new StockOptions({ configurationRestAPI });

async function optionExchangeInfo() {
    try {
        const response = await client.restAPI.optionExchangeInfo({
            symbol: 'NVDA260930C00100000',
        });

        const rateLimits = response.rateLimits!;
        console.log('optionExchangeInfo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('optionExchangeInfo() response:', data);
    } catch (error) {
        console.error('optionExchangeInfo() error:', error);
    }
}

optionExchangeInfo();
