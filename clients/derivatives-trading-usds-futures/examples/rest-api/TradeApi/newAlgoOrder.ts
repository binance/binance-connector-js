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

async function newAlgoOrder() {
    try {
        const response = await client.restAPI.newAlgoOrder({
            algoType: DerivativesTradingUsdsFuturesRestAPI.NewAlgoOrderAlgoTypeEnum.CONDITIONAL,
            symbol: 'BNBUSDT',
            side: DerivativesTradingUsdsFuturesRestAPI.NewAlgoOrderSideEnum.BUY,
            type: DerivativesTradingUsdsFuturesRestAPI.NewAlgoOrderTypeEnum.STOP_MARKET,
        });

        const rateLimits = response.rateLimits!;
        console.log('newAlgoOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('newAlgoOrder() response:', data);
    } catch (error) {
        console.error('newAlgoOrder() error:', error);
    }
}

newAlgoOrder();
