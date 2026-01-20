import { Alpha, ALPHA_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALPHA_REST_API_PROD_URL,
};
const client = new Alpha({ configurationRestAPI });

async function aggregatedTrades() {
    try {
        const response = await client.restAPI.aggregatedTrades({
            symbol: 'symbol_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('aggregatedTrades() rate limits:', rateLimits);

        const data = await response.data();
        console.log('aggregatedTrades() response:', data);
    } catch (error) {
        console.error('aggregatedTrades() error:', error);
    }
}

aggregatedTrades();
