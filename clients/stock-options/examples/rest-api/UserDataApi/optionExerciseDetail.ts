import { StockOptions, STOCK_OPTIONS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCK_OPTIONS_REST_API_PROD_URL,
};
const client = new StockOptions({ configurationRestAPI });

async function optionExerciseDetail() {
    try {
        const response = await client.restAPI.optionExerciseDetail();

        const rateLimits = response.rateLimits!;
        console.log('optionExerciseDetail() rate limits:', rateLimits);

        const data = await response.data();
        console.log('optionExerciseDetail() response:', data);
    } catch (error) {
        console.error('optionExerciseDetail() error:', error);
    }
}

optionExerciseDetail();
