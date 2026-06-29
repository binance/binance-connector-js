import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function batchCancelOrders() {
    try {
        const response = await client.restAPI.batchCancelOrders({
            walletAddress: '0x12e32db8817e292508c34111cbc4b23340df542c',
            walletId: '5b5c1ec3be4e4416a5872b21c1ca5d20',
        });

        const rateLimits = response.rateLimits!;
        console.log('batchCancelOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('batchCancelOrders() response:', data);
    } catch (error) {
        console.error('batchCancelOrders() error:', error);
    }
}

batchCancelOrders();
