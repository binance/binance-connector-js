import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function closeIsolatedMarginUserDataStream() {
    try {
        const response = await client.restAPI.closeIsolatedMarginUserDataStream({
            symbol: 'symbol_example',
            listenkey: 'listenkey_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('closeIsolatedMarginUserDataStream() rate limits:', rateLimits);

        const data = await response.data();
        console.log('closeIsolatedMarginUserDataStream() response:', data);
    } catch (error) {
        console.error('closeIsolatedMarginUserDataStream() error:', error);
    }
}

closeIsolatedMarginUserDataStream();
