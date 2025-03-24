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

async function continuousContractKlineCandlestickData() {
    try {
        const response = await client.restAPI.continuousContractKlineCandlestickData({
            pair: 'pair_example',
            contractType:
                DerivativesTradingUsdsFuturesRestAPI
                    .ContinuousContractKlineCandlestickDataContractTypeEnum.PERPETUAL,
            interval:
                DerivativesTradingUsdsFuturesRestAPI
                    .ContinuousContractKlineCandlestickDataIntervalEnum.INTERVAL_1m,
        });

        const rateLimits = response.rateLimits!;
        console.log('continuousContractKlineCandlestickData() rate limits:', rateLimits);

        const data = await response.data();
        console.log('continuousContractKlineCandlestickData() response:', data);
    } catch (error) {
        console.error('continuousContractKlineCandlestickData() error:', error);
    }
}

continuousContractKlineCandlestickData();
