import { GiftCard, GIFT_CARD_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? GIFT_CARD_REST_API_PROD_URL,
};
const client = new GiftCard({ configurationRestAPI });

async function createASingleTokenGiftCard() {
    try {
        const response = await client.restAPI.createASingleTokenGiftCard({
            token: 'token_example',
            amount: 1,
        });

        const rateLimits = response.rateLimits!;
        console.log('createASingleTokenGiftCard() rate limits:', rateLimits);

        const data = await response.data();
        console.log('createASingleTokenGiftCard() response:', data);
    } catch (error) {
        console.error('createASingleTokenGiftCard() error:', error);
    }
}

createASingleTokenGiftCard();
