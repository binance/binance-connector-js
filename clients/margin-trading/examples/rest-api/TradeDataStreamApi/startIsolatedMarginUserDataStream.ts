import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function startIsolatedMarginUserDataStream() {
    try {
        const response = await client.restAPI.startIsolatedMarginUserDataStream({
            symbol: 'symbol_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('startIsolatedMarginUserDataStream() rate limits:', rateLimits);

        const data = await response.data();
        console.log('startIsolatedMarginUserDataStream() response:', data);
    } catch (error) {
        console.error('startIsolatedMarginUserDataStream() error:', error);
    }
}

startIsolatedMarginUserDataStream();
