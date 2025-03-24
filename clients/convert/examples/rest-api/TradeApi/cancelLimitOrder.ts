import { Convert, CONVERT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CONVERT_REST_API_PROD_URL,
};
const client = new Convert({ configurationRestAPI });

async function cancelLimitOrder() {
    try {
        const response = await client.restAPI.cancelLimitOrder({
            orderId: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('cancelLimitOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cancelLimitOrder() response:', data);
    } catch (error) {
        console.error('cancelLimitOrder() error:', error);
    }
}

cancelLimitOrder();
