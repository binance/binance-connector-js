import {
    DerivativesTradingUsdsFutures,
    DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
};
const client = new DerivativesTradingUsdsFutures({ configurationRestAPI });

async function modifyIsolatedPositionMargin() {
    try {
        const response = await client.restAPI.modifyIsolatedPositionMargin({
            symbol: 'symbol_example',
            amount: 1,
            type: 'type_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('modifyIsolatedPositionMargin() rate limits:', rateLimits);

        const data = await response.data();
        console.log('modifyIsolatedPositionMargin() response:', data);
    } catch (error) {
        console.error('modifyIsolatedPositionMargin() error:', error);
    }
}

modifyIsolatedPositionMargin();
