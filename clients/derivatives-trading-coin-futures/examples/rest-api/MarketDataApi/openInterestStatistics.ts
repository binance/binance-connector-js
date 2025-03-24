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

async function openInterestStatistics() {
    try {
        const response = await client.restAPI.openInterestStatistics({
            pair: 'pair_example',
            contractType:
                DerivativesTradingCoinFuturesRestAPI.OpenInterestStatisticsContractTypeEnum
                    .PERPETUAL,
            period: DerivativesTradingCoinFuturesRestAPI.OpenInterestStatisticsPeriodEnum.PERIOD_5m,
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
