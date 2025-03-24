import { Convert, CONVERT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CONVERT_REST_API_PROD_URL,
};
const client = new Convert({ configurationRestAPI });

async function getConvertTradeHistory() {
    try {
        const response = await client.restAPI.getConvertTradeHistory({
            startTime: 1623319461670,
            endTime: 1641782889000,
        });

        const rateLimits = response.rateLimits!;
        console.log('getConvertTradeHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getConvertTradeHistory() response:', data);
    } catch (error) {
        console.error('getConvertTradeHistory() error:', error);
    }
}

getConvertTradeHistory();
