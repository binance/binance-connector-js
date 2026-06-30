import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function queryOrderBook() {
    try {
        const response = await client.restAPI.queryOrderBook({
            vendor: 'predict_fun',
            marketId: 5567895,
            tokenId: '112233',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryOrderBook() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryOrderBook() response:', data);
    } catch (error) {
        console.error('queryOrderBook() error:', error);
    }
}

queryOrderBook();
