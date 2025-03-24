import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function createSpecialKey() {
    try {
        const response = await client.restAPI.createSpecialKey({
            apiName: 'apiName_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('createSpecialKey() rate limits:', rateLimits);

        const data = await response.data();
        console.log('createSpecialKey() response:', data);
    } catch (error) {
        console.error('createSpecialKey() error:', error);
    }
}

createSpecialKey();
