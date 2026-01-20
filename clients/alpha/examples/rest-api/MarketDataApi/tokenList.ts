import { Alpha, ALPHA_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALPHA_REST_API_PROD_URL,
};
const client = new Alpha({ configurationRestAPI });

async function tokenList() {
    try {
        const response = await client.restAPI.tokenList();

        const rateLimits = response.rateLimits!;
        console.log('tokenList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('tokenList() response:', data);
    } catch (error) {
        console.error('tokenList() error:', error);
    }
}

tokenList();
