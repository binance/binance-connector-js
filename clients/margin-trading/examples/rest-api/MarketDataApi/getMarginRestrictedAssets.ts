import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function getMarginRestrictedAssets() {
    try {
        const response = await client.restAPI.getMarginRestrictedAssets();

        const rateLimits = response.rateLimits!;
        console.log('getMarginRestrictedAssets() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getMarginRestrictedAssets() response:', data);
    } catch (error) {
        console.error('getMarginRestrictedAssets() error:', error);
    }
}

getMarginRestrictedAssets();
