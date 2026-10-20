import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function startUserDataStreamV2() {
    try {
        const response = await client.restAPI.startUserDataStreamV2();

        const rateLimits = response.rateLimits!;
        console.log('startUserDataStreamV2() rate limits:', rateLimits);

        const data = await response.data();
        console.log('startUserDataStreamV2() response:', data);
    } catch (error) {
        console.error('startUserDataStreamV2() error:', error);
    }
}

startUserDataStreamV2();
