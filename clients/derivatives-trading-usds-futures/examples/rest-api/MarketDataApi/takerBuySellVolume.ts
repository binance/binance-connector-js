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

async function takerBuySellVolume() {
    try {
        const response = await client.restAPI.takerBuySellVolume({
            symbol: 'symbol_example',
            period: DerivativesTradingUsdsFuturesRestAPI.TakerBuySellVolumePeriodEnum.PERIOD_5m,
        });

        const rateLimits = response.rateLimits!;
        console.log('takerBuySellVolume() rate limits:', rateLimits);

        const data = await response.data();
        console.log('takerBuySellVolume() response:', data);
    } catch (error) {
        console.error('takerBuySellVolume() error:', error);
    }
}

takerBuySellVolume();
