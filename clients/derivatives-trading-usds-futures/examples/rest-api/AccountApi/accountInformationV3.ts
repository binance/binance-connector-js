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

async function accountInformationV3() {
    try {
        const response = await client.restAPI.accountInformationV3();

        const rateLimits = response.rateLimits!;
        console.log('accountInformationV3() rate limits:', rateLimits);

        const data = await response.data();
        console.log('accountInformationV3() response:', data);
    } catch (error) {
        console.error('accountInformationV3() error:', error);
    }
}

accountInformationV3();
