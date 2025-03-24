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

async function getIncomeHistory() {
    try {
        const response = await client.restAPI.getIncomeHistory();

        const rateLimits = response.rateLimits!;
        console.log('getIncomeHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getIncomeHistory() response:', data);
    } catch (error) {
        console.error('getIncomeHistory() error:', error);
    }
}

getIncomeHistory();
