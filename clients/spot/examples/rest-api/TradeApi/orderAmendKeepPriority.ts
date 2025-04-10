import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function orderAmendKeepPriority() {
    try {
        const response = await client.restAPI.orderAmendKeepPriority({
            symbol: 'BNBUSDT',
            newQty: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderAmendKeepPriority() rate limits:', rateLimits);

        const data = await response.data();
        console.log('orderAmendKeepPriority() response:', data);
    } catch (error) {
        console.error('orderAmendKeepPriority() error:', error);
    }
}

orderAmendKeepPriority();
