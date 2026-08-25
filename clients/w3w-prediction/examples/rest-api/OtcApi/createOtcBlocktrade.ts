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

async function createOtcBlocktrade() {
    try {
        const response = await client.restAPI.createOtcBlocktrade({
            marketId: '123',
            tokenId:
                '71321045679252212594626385532706912750332728571942532289631379312455583992563',
            side: W3WPredictionRestAPI.CreateOtcBlocktradeSideEnum.BUY,
            makerAmount: '600000000000000000000',
            takerAmount: '1000000000000000000000',
            pricePerShare: '0.65',
            expiration: 1790000000,
        });

        const rateLimits = response.rateLimits!;
        console.log('createOtcBlocktrade() rate limits:', rateLimits);

        const data = await response.data();
        console.log('createOtcBlocktrade() response:', data);
    } catch (error) {
        console.error('createOtcBlocktrade() error:', error);
    }
}

createOtcBlocktrade();
