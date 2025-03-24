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

async function openInterestStatistics() {
    try {
        const response = await client.restAPI.openInterestStatistics({
            symbol: 'symbol_example',
            period: DerivativesTradingUsdsFuturesRestAPI.OpenInterestStatisticsPeriodEnum.PERIOD_5m,
        });

        const rateLimits = response.rateLimits!;
        console.log('openInterestStatistics() rate limits:', rateLimits);

        const data = await response.data();
        console.log('openInterestStatistics() response:', data);
    } catch (error) {
        console.error('openInterestStatistics() error:', error);
    }
}

openInterestStatistics();
