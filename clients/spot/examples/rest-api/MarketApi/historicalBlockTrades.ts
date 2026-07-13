import { Spot, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function historicalBlockTrades() {
    try {
        const response = await client.restAPI.historicalBlockTrades({
            symbol: 'BNBBTC',
            fromId: 582,
        });

        const rateLimits = response.rateLimits!;
        console.log('historicalBlockTrades() rate limits:', rateLimits);

        const data = await response.data();
        console.log('historicalBlockTrades() response:', data);
    } catch (error) {
        console.error('historicalBlockTrades() error:', error);
    }
}

historicalBlockTrades();
