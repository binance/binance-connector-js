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

async function openInterest() {
    try {
        const response = await client.restAPI.openInterest({
            underlyingAsset: 'underlyingAsset_example',
            expiration: 'expiration_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('openInterest() rate limits:', rateLimits);

        const data = await response.data();
        console.log('openInterest() response:', data);
    } catch (error) {
        console.error('openInterest() error:', error);
    }
}

openInterest();
