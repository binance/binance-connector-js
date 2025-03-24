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

async function topTraderLongShortRatioPositions() {
    try {
        const response = await client.restAPI.topTraderLongShortRatioPositions({
            pair: 'pair_example',
            period: DerivativesTradingCoinFuturesRestAPI.TopTraderLongShortRatioPositionsPeriodEnum
                .PERIOD_5m,
        });

        const rateLimits = response.rateLimits!;
        console.log('topTraderLongShortRatioPositions() rate limits:', rateLimits);

        const data = await response.data();
        console.log('topTraderLongShortRatioPositions() response:', data);
    } catch (error) {
        console.error('topTraderLongShortRatioPositions() error:', error);
    }
}

topTraderLongShortRatioPositions();
