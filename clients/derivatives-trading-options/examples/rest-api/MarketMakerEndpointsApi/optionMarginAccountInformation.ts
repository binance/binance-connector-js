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

async function optionMarginAccountInformation() {
    try {
        const response = await client.restAPI.optionMarginAccountInformation();

        const rateLimits = response.rateLimits!;
        console.log('optionMarginAccountInformation() rate limits:', rateLimits);

        const data = await response.data();
        console.log('optionMarginAccountInformation() response:', data);
    } catch (error) {
        console.error('optionMarginAccountInformation() error:', error);
    }
}

optionMarginAccountInformation();
