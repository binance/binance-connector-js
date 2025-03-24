import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function deleteOrder() {
    try {
        const response = await client.restAPI.deleteOrder({
            symbol: 'BNBUSDT',
        });

        const rateLimits = response.rateLimits!;
        console.log('deleteOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('deleteOrder() response:', data);
    } catch (error) {
        console.error('deleteOrder() error:', error);
    }
}

deleteOrder();
