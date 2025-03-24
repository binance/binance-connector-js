import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function getAllCrossMarginPairs() {
    try {
        const response = await client.restAPI.getAllCrossMarginPairs();

        const rateLimits = response.rateLimits!;
        console.log('getAllCrossMarginPairs() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getAllCrossMarginPairs() response:', data);
    } catch (error) {
        console.error('getAllCrossMarginPairs() error:', error);
    }
}

getAllCrossMarginPairs();
