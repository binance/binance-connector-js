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

async function cancelAllOptionOrdersOnSpecificSymbol() {
    try {
        const response = await client.restAPI.cancelAllOptionOrdersOnSpecificSymbol({
            symbol: 'BTC-200730-9000-C',
        });

        const rateLimits = response.rateLimits!;
        console.log('cancelAllOptionOrdersOnSpecificSymbol() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cancelAllOptionOrdersOnSpecificSymbol() response:', data);
    } catch (error) {
        console.error('cancelAllOptionOrdersOnSpecificSymbol() error:', error);
    }
}

cancelAllOptionOrdersOnSpecificSymbol();
