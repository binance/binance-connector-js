import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function queryTransferStatus() {
    try {
        const response = await client.restAPI.queryTransferStatus({
            transferId: 'tf_20260525_out_001',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryTransferStatus() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryTransferStatus() response:', data);
    } catch (error) {
        console.error('queryTransferStatus() error:', error);
    }
}

queryTransferStatus();
