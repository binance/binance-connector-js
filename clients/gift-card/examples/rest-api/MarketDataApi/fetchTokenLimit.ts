import { GiftCard, GIFT_CARD_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? GIFT_CARD_REST_API_PROD_URL,
};
const client = new GiftCard({ configurationRestAPI });

async function fetchTokenLimit() {
    try {
        const response = await client.restAPI.fetchTokenLimit({
            baseToken: 'baseToken_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('fetchTokenLimit() rate limits:', rateLimits);

        const data = await response.data();
        console.log('fetchTokenLimit() response:', data);
    } catch (error) {
        console.error('fetchTokenLimit() error:', error);
    }
}

fetchTokenLimit();
