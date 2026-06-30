import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function queryLastTradePrice() {
    try {
        const response = await client.restAPI.queryLastTradePrice({
            marketId: 5567895,
        });

        const rateLimits = response.rateLimits!;
        console.log('queryLastTradePrice() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryLastTradePrice() response:', data);
    } catch (error) {
        console.error('queryLastTradePrice() error:', error);
    }
}

queryLastTradePrice();
