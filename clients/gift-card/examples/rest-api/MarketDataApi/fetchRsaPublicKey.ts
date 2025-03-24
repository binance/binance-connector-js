import { GiftCard, GIFT_CARD_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? GIFT_CARD_REST_API_PROD_URL,
};
const client = new GiftCard({ configurationRestAPI });

async function fetchRsaPublicKey() {
    try {
        const response = await client.restAPI.fetchRsaPublicKey();

        const rateLimits = response.rateLimits!;
        console.log('fetchRsaPublicKey() rate limits:', rateLimits);

        const data = await response.data();
        console.log('fetchRsaPublicKey() response:', data);
    } catch (error) {
        console.error('fetchRsaPublicKey() error:', error);
    }
}

fetchRsaPublicKey();
