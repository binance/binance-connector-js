import {
    DerivativesTradingOptions,
    DerivativesTradingOptionsRestAPI,
    DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
};
const client = new DerivativesTradingOptions({ configurationRestAPI });

async function klineCandlestickData() {
    try {
        const response = await client.restAPI.klineCandlestickData({
            symbol: 'BTC-200730-9000-C',
            interval: DerivativesTradingOptionsRestAPI.KlineCandlestickDataIntervalEnum.INTERVAL_1m,
        });

        const rateLimits = response.rateLimits!;
        console.log('klineCandlestickData() rate limits:', rateLimits);

        const data = await response.data();
        console.log('klineCandlestickData() response:', data);
    } catch (error) {
        console.error('klineCandlestickData() error:', error);
    }
}

klineCandlestickData();
