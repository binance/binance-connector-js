import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function marketSearch() {
    try {
        const response = await client.restAPI.marketSearch({
            query: 'BTC price',
        });

        const rateLimits = response.rateLimits!;
        console.log('marketSearch() rate limits:', rateLimits);

        const data = await response.data();
        console.log('marketSearch() response:', data);
    } catch (error) {
        console.error('marketSearch() error:', error);
    }
}

marketSearch();
