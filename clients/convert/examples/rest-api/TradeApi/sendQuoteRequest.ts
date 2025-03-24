import { Convert, CONVERT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CONVERT_REST_API_PROD_URL,
};
const client = new Convert({ configurationRestAPI });

async function sendQuoteRequest() {
    try {
        const response = await client.restAPI.sendQuoteRequest({
            fromAsset: 'fromAsset_example',
            toAsset: 'toAsset_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('sendQuoteRequest() rate limits:', rateLimits);

        const data = await response.data();
        console.log('sendQuoteRequest() response:', data);
    } catch (error) {
        console.error('sendQuoteRequest() error:', error);
    }
}

sendQuoteRequest();
