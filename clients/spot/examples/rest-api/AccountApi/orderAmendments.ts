import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function orderAmendments() {
    try {
        const response = await client.restAPI.orderAmendments({
            symbol: 'BNBUSDT',
            orderId: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderAmendments() rate limits:', rateLimits);

        const data = await response.data();
        console.log('orderAmendments() response:', data);
    } catch (error) {
        console.error('orderAmendments() error:', error);
    }
}

orderAmendments();
