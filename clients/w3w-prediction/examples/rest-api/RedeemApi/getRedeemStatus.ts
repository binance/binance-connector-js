import { W3WPrediction, W3W_PREDICTION_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function getRedeemStatus() {
    try {
        const response = await client.restAPI.getRedeemStatus({
            walletAddress: '0x12e32db8817e292508c34111cbc4b23340df542c',
            txHash: '0xabc123def456789abcdef123456789abcdef123456789abcdef123456789abcd',
        });

        const rateLimits = response.rateLimits!;
        console.log('getRedeemStatus() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getRedeemStatus() response:', data);
    } catch (error) {
        console.error('getRedeemStatus() error:', error);
    }
}

getRedeemStatus();
