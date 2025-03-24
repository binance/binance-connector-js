import { Mining, MINING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MINING_REST_API_PROD_URL,
};
const client = new Mining({ configurationRestAPI });

async function cancelHashrateResaleConfiguration() {
    try {
        const response = await client.restAPI.cancelHashrateResaleConfiguration({
            configId: 1,
            userName: 'userName_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('cancelHashrateResaleConfiguration() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cancelHashrateResaleConfiguration() response:', data);
    } catch (error) {
        console.error('cancelHashrateResaleConfiguration() error:', error);
    }
}

cancelHashrateResaleConfiguration();
