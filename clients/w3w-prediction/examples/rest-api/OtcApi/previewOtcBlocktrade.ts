import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function previewOtcBlocktrade() {
    try {
        const response = await client.restAPI.previewOtcBlocktrade({
            secretToken: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        });

        const rateLimits = response.rateLimits!;
        console.log('previewOtcBlocktrade() rate limits:', rateLimits);

        const data = await response.data();
        console.log('previewOtcBlocktrade() response:', data);
    } catch (error) {
        console.error('previewOtcBlocktrade() error:', error);
    }
}

previewOtcBlocktrade();
