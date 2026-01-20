import { Alpha, ALPHA_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALPHA_REST_API_PROD_URL,
};
const client = new Alpha({ configurationRestAPI });

async function ticker() {
    try {
        const response = await client.restAPI.ticker({
            symbol: 'symbol_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('ticker() rate limits:', rateLimits);

        const data = await response.data();
        console.log('ticker() response:', data);
    } catch (error) {
        console.error('ticker() error:', error);
    }
}

ticker();
