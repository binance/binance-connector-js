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

async function getQuote() {
    try {
        const response = await client.restAPI.getQuote({
            walletAddress: '0x12e32db8817e292508c34111cbc4b23340df542c',
            tokenId: '112233',
            side: W3WPredictionRestAPI.GetQuoteSideEnum.BUY,
            amountIn: '1000000000000000000',
            orderType: W3WPredictionRestAPI.GetQuoteOrderTypeEnum.MARKET,
            slippageBps: 1200,
        });

        const rateLimits = response.rateLimits!;
        console.log('getQuote() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getQuote() response:', data);
    } catch (error) {
        console.error('getQuote() error:', error);
    }
}

getQuote();
