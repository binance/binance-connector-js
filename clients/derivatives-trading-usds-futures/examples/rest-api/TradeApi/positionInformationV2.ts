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

async function positionInformationV2() {
    try {
        const response = await client.restAPI.positionInformationV2();

        const rateLimits = response.rateLimits!;
        console.log('positionInformationV2() rate limits:', rateLimits);

        const data = await response.data();
        console.log('positionInformationV2() response:', data);
    } catch (error) {
        console.error('positionInformationV2() error:', error);
    }
}

positionInformationV2();
