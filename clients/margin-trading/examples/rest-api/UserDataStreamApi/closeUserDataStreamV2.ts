import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function closeUserDataStreamV2() {
    try {
        const response = await client.restAPI.closeUserDataStreamV2();

        const rateLimits = response.rateLimits!;
        console.log('closeUserDataStreamV2() rate limits:', rateLimits);

        const data = await response.data();
        console.log('closeUserDataStreamV2() response:', data);
    } catch (error) {
        console.error('closeUserDataStreamV2() error:', error);
    }
}

closeUserDataStreamV2();
