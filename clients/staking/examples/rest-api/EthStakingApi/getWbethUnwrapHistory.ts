import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function getWbethUnwrapHistory() {
    try {
        const response = await client.restAPI.getWbethUnwrapHistory();

        const rateLimits = response.rateLimits!;
        console.log('getWbethUnwrapHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getWbethUnwrapHistory() response:', data);
    } catch (error) {
        console.error('getWbethUnwrapHistory() error:', error);
    }
}

getWbethUnwrapHistory();
