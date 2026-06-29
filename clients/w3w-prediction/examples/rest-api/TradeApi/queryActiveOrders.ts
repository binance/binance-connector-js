import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function queryActiveOrders() {
    try {
        const response = await client.restAPI.queryActiveOrders({
            walletAddress: '0x12e32db8817e292508c34111cbc4b23340df542c',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryActiveOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryActiveOrders() response:', data);
    } catch (error) {
        console.error('queryActiveOrders() error:', error);
    }
}

queryActiveOrders();
