import {
    DerivativesTradingOptions,
    DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
};
const client = new DerivativesTradingOptions({ configurationRestAPI });

async function ticker24hrPriceChangeStatistics() {
    try {
        const response = await client.restAPI.ticker24hrPriceChangeStatistics();

        const rateLimits = response.rateLimits!;
        console.log('ticker24hrPriceChangeStatistics() rate limits:', rateLimits);

        const data = await response.data();
        console.log('ticker24hrPriceChangeStatistics() response:', data);
    } catch (error) {
        console.error('ticker24hrPriceChangeStatistics() error:', error);
    }
}

ticker24hrPriceChangeStatistics();
