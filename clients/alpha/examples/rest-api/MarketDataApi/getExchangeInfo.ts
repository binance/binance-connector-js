import { Alpha, ALPHA_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALPHA_REST_API_PROD_URL,
};
const client = new Alpha({ configurationRestAPI });

async function getExchangeInfo() {
    try {
        const response = await client.restAPI.getExchangeInfo();

        const rateLimits = response.rateLimits!;
        console.log('getExchangeInfo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getExchangeInfo() response:', data);
    } catch (error) {
        console.error('getExchangeInfo() error:', error);
    }
}

getExchangeInfo();
