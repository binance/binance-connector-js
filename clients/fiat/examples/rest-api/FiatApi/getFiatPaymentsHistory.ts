import { Fiat, FIAT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? FIAT_REST_API_PROD_URL,
};
const client = new Fiat({ configurationRestAPI });

async function getFiatPaymentsHistory() {
    try {
        const response = await client.restAPI.getFiatPaymentsHistory({
            transactionType: 'transactionType_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('getFiatPaymentsHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getFiatPaymentsHistory() response:', data);
    } catch (error) {
        console.error('getFiatPaymentsHistory() error:', error);
    }
}

getFiatPaymentsHistory();
