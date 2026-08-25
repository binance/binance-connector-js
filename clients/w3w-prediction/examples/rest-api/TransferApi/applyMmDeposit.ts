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

async function applyMmDeposit() {
    try {
        const response = await client.restAPI.applyMmDeposit({
            fromToken: 'USDT',
            fromTokenAmount: '1000000000000000000',
            toToken: 'USDT',
            accountType: W3WPredictionRestAPI.ApplyMmDepositAccountTypeEnum.SPOT,
        });

        const rateLimits = response.rateLimits!;
        console.log('applyMmDeposit() rate limits:', rateLimits);

        const data = await response.data();
        console.log('applyMmDeposit() response:', data);
    } catch (error) {
        console.error('applyMmDeposit() error:', error);
    }
}

applyMmDeposit();
