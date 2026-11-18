import { StockOptions, STOCK_OPTIONS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCK_OPTIONS_REST_API_PROD_URL,
};
const client = new StockOptions({ configurationRestAPI });

async function exercisableOptions() {
    try {
        const response = await client.restAPI.exercisableOptions();

        const rateLimits = response.rateLimits!;
        console.log('exercisableOptions() rate limits:', rateLimits);

        const data = await response.data();
        console.log('exercisableOptions() response:', data);
    } catch (error) {
        console.error('exercisableOptions() error:', error);
    }
}

exercisableOptions();
