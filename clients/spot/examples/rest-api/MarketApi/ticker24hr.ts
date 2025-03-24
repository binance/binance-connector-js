import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function ticker24hr() {
    try {
        const response = await client.restAPI.ticker24hr({
            symbol: 'BNBUSDT',
        });

        const rateLimits = response.rateLimits!;
        console.log('ticker24hr() rate limits:', rateLimits);

        const data = await response.data();
        console.log('ticker24hr() response:', data);
    } catch (error) {
        console.error('ticker24hr() error:', error);
    }
}

ticker24hr();
