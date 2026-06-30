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

async function createOutboundTransfer() {
    try {
        const response = await client.restAPI.createOutboundTransfer({
            walletId: '5b5c1ec3be4e4416a5872b21c1ca5d20',
            walletAddress: '0x12e32db8817e292508c34111cbc4b23340df542c',
            fromTokenAmount: '1000000000000000000',
            accountType: W3WPredictionRestAPI.CreateOutboundTransferAccountTypeEnum.SPOT,
            sourceBiz: W3WPredictionRestAPI.CreateOutboundTransferSourceBizEnum.USER_TRANSFER,
        });

        const rateLimits = response.rateLimits!;
        console.log('createOutboundTransfer() rate limits:', rateLimits);

        const data = await response.data();
        console.log('createOutboundTransfer() response:', data);
    } catch (error) {
        console.error('createOutboundTransfer() error:', error);
    }
}

createOutboundTransfer();
