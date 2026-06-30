import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function getMarketDetail() {
    try {
        const response = await client.restAPI.getMarketDetail({
            marketTopicId: 4229564,
        });

        const rateLimits = response.rateLimits!;
        console.log('getMarketDetail() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getMarketDetail() response:', data);
    } catch (error) {
        console.error('getMarketDetail() error:', error);
    }
}

getMarketDetail();
