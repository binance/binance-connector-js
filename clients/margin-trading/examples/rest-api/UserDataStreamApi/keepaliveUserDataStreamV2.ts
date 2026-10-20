import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function keepaliveUserDataStreamV2() {
    try {
        const response = await client.restAPI.keepaliveUserDataStreamV2({
            listenKey: 'listenKey_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('keepaliveUserDataStreamV2() rate limits:', rateLimits);

        const data = await response.data();
        console.log('keepaliveUserDataStreamV2() response:', data);
    } catch (error) {
        console.error('keepaliveUserDataStreamV2() error:', error);
    }
}

keepaliveUserDataStreamV2();
