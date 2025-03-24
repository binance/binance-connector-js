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

async function setAutoCancelAllOpenOrders() {
    try {
        const response = await client.restAPI.setAutoCancelAllOpenOrders({
            underlying: 'underlying_example',
            countdownTime: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('setAutoCancelAllOpenOrders() rate limits:', rateLimits);

        const data = await response.data();
        console.log('setAutoCancelAllOpenOrders() response:', data);
    } catch (error) {
        console.error('setAutoCancelAllOpenOrders() error:', error);
    }
}

setAutoCancelAllOpenOrders();
