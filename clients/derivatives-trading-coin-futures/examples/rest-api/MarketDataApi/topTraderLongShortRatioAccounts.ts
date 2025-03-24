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

async function topTraderLongShortRatioAccounts() {
    try {
        const response = await client.restAPI.topTraderLongShortRatioAccounts({
            symbol: 'symbol_example',
            period: DerivativesTradingCoinFuturesRestAPI.TopTraderLongShortRatioAccountsPeriodEnum
                .PERIOD_5m,
        });

        const rateLimits = response.rateLimits!;
        console.log('topTraderLongShortRatioAccounts() rate limits:', rateLimits);

        const data = await response.data();
        console.log('topTraderLongShortRatioAccounts() response:', data);
    } catch (error) {
        console.error('topTraderLongShortRatioAccounts() error:', error);
    }
}

topTraderLongShortRatioAccounts();
