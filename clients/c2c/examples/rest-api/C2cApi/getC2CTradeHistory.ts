import { C2C, C2C_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? C2C_REST_API_PROD_URL,
};
const client = new C2C({ configurationRestAPI });

async function getC2CTradeHistory() {
    try {
        const response = await client.restAPI.getC2CTradeHistory();

        const rateLimits = response.rateLimits!;
        console.log('getC2CTradeHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getC2CTradeHistory() response:', data);
    } catch (error) {
        console.error('getC2CTradeHistory() error:', error);
    }
}

getC2CTradeHistory();
