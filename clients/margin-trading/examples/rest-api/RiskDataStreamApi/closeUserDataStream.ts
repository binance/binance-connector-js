import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function closeUserDataStream() {
    try {
        const response = await client.restAPI.closeUserDataStream();

        const rateLimits = response.rateLimits!;
        console.log('closeUserDataStream() rate limits:', rateLimits);

        const data = await response.data();
        console.log('closeUserDataStream() response:', data);
    } catch (error) {
        console.error('closeUserDataStream() error:', error);
    }
}

closeUserDataStream();
