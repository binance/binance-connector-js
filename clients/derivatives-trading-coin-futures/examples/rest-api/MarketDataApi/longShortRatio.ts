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

async function longShortRatio() {
    try {
        const response = await client.restAPI.longShortRatio({
            pair: 'pair_example',
            period: DerivativesTradingCoinFuturesRestAPI.LongShortRatioPeriodEnum.PERIOD_5m,
        });

        const rateLimits = response.rateLimits!;
        console.log('longShortRatio() rate limits:', rateLimits);

        const data = await response.data();
        console.log('longShortRatio() response:', data);
    } catch (error) {
        console.error('longShortRatio() error:', error);
    }
}

longShortRatio();
