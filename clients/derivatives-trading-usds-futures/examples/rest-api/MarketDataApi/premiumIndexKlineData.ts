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

async function premiumIndexKlineData() {
    try {
        const response = await client.restAPI.premiumIndexKlineData({
            symbol: 'symbol_example',
            interval:
                DerivativesTradingUsdsFuturesRestAPI.PremiumIndexKlineDataIntervalEnum.INTERVAL_1m,
        });

        const rateLimits = response.rateLimits!;
        console.log('premiumIndexKlineData() rate limits:', rateLimits);

        const data = await response.data();
        console.log('premiumIndexKlineData() response:', data);
    } catch (error) {
        console.error('premiumIndexKlineData() error:', error);
    }
}

premiumIndexKlineData();
