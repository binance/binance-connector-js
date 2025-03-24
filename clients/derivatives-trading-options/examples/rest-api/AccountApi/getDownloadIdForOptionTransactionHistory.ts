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

async function getDownloadIdForOptionTransactionHistory() {
    try {
        const response = await client.restAPI.getDownloadIdForOptionTransactionHistory({
            startTime: 1623319461670,
            endTime: 1641782889000,
        });

        const rateLimits = response.rateLimits!;
        console.log('getDownloadIdForOptionTransactionHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getDownloadIdForOptionTransactionHistory() response:', data);
    } catch (error) {
        console.error('getDownloadIdForOptionTransactionHistory() error:', error);
    }
}

getDownloadIdForOptionTransactionHistory();
