import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function queryTransferList() {
    try {
        const response = await client.restAPI.queryTransferList({
            walletAddress: '0x12e32db8817e292508c34111cbc4b23340df542c',
            startDate: '2026-05-01',
            endDate: '2026-05-25',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryTransferList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryTransferList() response:', data);
    } catch (error) {
        console.error('queryTransferList() error:', error);
    }
}

queryTransferList();
