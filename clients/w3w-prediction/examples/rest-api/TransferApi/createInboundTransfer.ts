import {
    W3WPrediction,
    W3WPredictionRestAPI,
    W3W_PREDICTION_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? W3W_PREDICTION_REST_API_PROD_URL,
};
const client = new W3WPrediction({ configurationRestAPI });

async function createInboundTransfer() {
    try {
        const response = await client.restAPI.createInboundTransfer({
            walletId: '5b5c1ec3be4e4416a5872b21c1ca5d20',
            walletAddress: '0x12e32db8817e292508c34111cbc4b23340df542c',
            fromTokenAmount: '1000000000000000000',
            accountType: W3WPredictionRestAPI.CreateInboundTransferAccountTypeEnum.SPOT,
        });

        const rateLimits = response.rateLimits!;
        console.log('createInboundTransfer() rate limits:', rateLimits);

        const data = await response.data();
        console.log('createInboundTransfer() response:', data);
    } catch (error) {
        console.error('createInboundTransfer() error:', error);
    }
}

createInboundTransfer();
