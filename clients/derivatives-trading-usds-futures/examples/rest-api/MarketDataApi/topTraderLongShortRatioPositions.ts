import {
    DerivativesTradingUsdsFutures,
    DerivativesTradingUsdsFuturesRestAPI,
    DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
};
const client = new DerivativesTradingUsdsFutures({ configurationRestAPI });

async function topTraderLongShortRatioPositions() {
    try {
        const response = await client.restAPI.topTraderLongShortRatioPositions({
            symbol: 'symbol_example',
            period: DerivativesTradingUsdsFuturesRestAPI.TopTraderLongShortRatioPositionsPeriodEnum
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
