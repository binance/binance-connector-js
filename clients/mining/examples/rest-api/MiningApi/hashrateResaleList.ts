import { Mining, MINING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MINING_REST_API_PROD_URL,
};
const client = new Mining({ configurationRestAPI });

async function hashrateResaleList() {
    try {
        const response = await client.restAPI.hashrateResaleList();

        const rateLimits = response.rateLimits!;
        console.log('hashrateResaleList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('hashrateResaleList() response:', data);
    } catch (error) {
        console.error('hashrateResaleList() error:', error);
    }
}

hashrateResaleList();
