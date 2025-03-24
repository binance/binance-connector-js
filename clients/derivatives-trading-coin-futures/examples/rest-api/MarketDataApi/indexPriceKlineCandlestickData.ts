import {
    DerivativesTradingCoinFutures,
    DerivativesTradingCoinFuturesRestAPI,
    DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL,
};
const client = new DerivativesTradingCoinFutures({ configurationRestAPI });

async function indexPriceKlineCandlestickData() {
    try {
        const response = await client.restAPI.indexPriceKlineCandlestickData({
            pair: 'pair_example',
            interval:
                DerivativesTradingCoinFuturesRestAPI.IndexPriceKlineCandlestickDataIntervalEnum
                    .INTERVAL_1m,
        });

        const rateLimits = response.rateLimits!;
        console.log('indexPriceKlineCandlestickData() rate limits:', rateLimits);

        const data = await response.data();
        console.log('indexPriceKlineCandlestickData() response:', data);
    } catch (error) {
        console.error('indexPriceKlineCandlestickData() error:', error);
    }
}

indexPriceKlineCandlestickData();
