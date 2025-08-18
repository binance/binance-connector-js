import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function getLimitPricePairs() {
    try {
        const response = await client.restAPI.getLimitPricePairs();

        const rateLimits = response.rateLimits!;
        console.log('getLimitPricePairs() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getLimitPricePairs() response:', data);
    } catch (error) {
        console.error('getLimitPricePairs() error:', error);
    }
}

getLimitPricePairs();
