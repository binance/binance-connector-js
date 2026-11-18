import { StockOptions, STOCK_OPTIONS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCK_OPTIONS_REST_API_PROD_URL,
};
const client = new StockOptions({ configurationRestAPI });

async function submitOptionExercise() {
    try {
        const response = await client.restAPI.submitOptionExercise({
            symbol: 'NVDA260930C00100000',
            quantity: '1',
        });

        const rateLimits = response.rateLimits!;
        console.log('submitOptionExercise() rate limits:', rateLimits);

        const data = await response.data();
        console.log('submitOptionExercise() response:', data);
    } catch (error) {
        console.error('submitOptionExercise() error:', error);
    }
}

submitOptionExercise();
