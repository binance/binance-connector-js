import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function listOtcBlocktrades() {
    try {
        const response = await client.restAPI.listOtcBlocktrades();

        const rateLimits = response.rateLimits!;
        console.log('listOtcBlocktrades() rate limits:', rateLimits);

        const data = await response.data();
        console.log('listOtcBlocktrades() response:', data);
    } catch (error) {
        console.error('listOtcBlocktrades() error:', error);
    }
}

listOtcBlocktrades();
