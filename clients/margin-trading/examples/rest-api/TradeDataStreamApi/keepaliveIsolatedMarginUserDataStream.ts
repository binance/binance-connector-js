import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function keepaliveIsolatedMarginUserDataStream() {
    try {
        const response = await client.restAPI.keepaliveIsolatedMarginUserDataStream({
            symbol: 'symbol_example',
            listenKey: 'listenKey_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('keepaliveIsolatedMarginUserDataStream() rate limits:', rateLimits);

        const data = await response.data();
        console.log('keepaliveIsolatedMarginUserDataStream() response:', data);
    } catch (error) {
        console.error('keepaliveIsolatedMarginUserDataStream() error:', error);
    }
}

keepaliveIsolatedMarginUserDataStream();
