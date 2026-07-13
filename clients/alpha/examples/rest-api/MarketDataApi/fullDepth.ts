import { Alpha, ALPHA_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALPHA_REST_API_PROD_URL,
};
const client = new Alpha({ configurationRestAPI });

async function fullDepth() {
    try {
        const response = await client.restAPI.fullDepth({
            symbol: 'ALPHA_175USDT',
        });

        const rateLimits = response.rateLimits!;
        console.log('fullDepth() rate limits:', rateLimits);

        const data = await response.data();
        console.log('fullDepth() response:', data);
    } catch (error) {
        console.error('fullDepth() error:', error);
    }
}

fullDepth();
