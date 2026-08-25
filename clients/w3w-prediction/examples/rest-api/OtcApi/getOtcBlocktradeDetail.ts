import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function getOtcBlocktradeDetail() {
    try {
        const response = await client.restAPI.getOtcBlocktradeDetail({
            orderId: '26080500000001234567',
        });

        const rateLimits = response.rateLimits!;
        console.log('getOtcBlocktradeDetail() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getOtcBlocktradeDetail() response:', data);
    } catch (error) {
        console.error('getOtcBlocktradeDetail() error:', error);
    }
}

getOtcBlocktradeDetail();
