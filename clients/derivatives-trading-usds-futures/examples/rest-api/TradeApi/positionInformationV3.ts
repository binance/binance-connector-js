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

async function positionInformationV3() {
    try {
        const response = await client.restAPI.positionInformationV3();

        const rateLimits = response.rateLimits!;
        console.log('positionInformationV3() rate limits:', rateLimits);

        const data = await response.data();
        console.log('positionInformationV3() response:', data);
    } catch (error) {
        console.error('positionInformationV3() error:', error);
    }
}

positionInformationV3();
