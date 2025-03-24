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

async function markPriceKlineCandlestickData() {
    try {
        const response = await client.restAPI.markPriceKlineCandlestickData({
            symbol: 'symbol_example',
            interval:
                DerivativesTradingCoinFuturesRestAPI.MarkPriceKlineCandlestickDataIntervalEnum
                    .INTERVAL_1m,
        });

        const rateLimits = response.rateLimits!;
        console.log('markPriceKlineCandlestickData() rate limits:', rateLimits);

        const data = await response.data();
        console.log('markPriceKlineCandlestickData() response:', data);
    } catch (error) {
        console.error('markPriceKlineCandlestickData() error:', error);
    }
}

markPriceKlineCandlestickData();
