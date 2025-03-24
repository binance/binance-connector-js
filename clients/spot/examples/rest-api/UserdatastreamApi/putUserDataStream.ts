import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function putUserDataStream() {
    try {
        const response = await client.restAPI.putUserDataStream({
            listenKey: 'listenKey',
        });

        const rateLimits = response.rateLimits!;
        console.log('putUserDataStream() rate limits:', rateLimits);

        const data = await response.data();
        console.log('putUserDataStream() response:', data);
    } catch (error) {
        console.error('putUserDataStream() error:', error);
    }
}

putUserDataStream();
