import { GiftCard, GIFT_CARD_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? GIFT_CARD_REST_API_PROD_URL,
};
const client = new GiftCard({ configurationRestAPI });

async function createADualTokenGiftCard() {
    try {
        const response = await client.restAPI.createADualTokenGiftCard({
            baseToken: 'baseToken_example',
            faceToken: 'faceToken_example',
            baseTokenAmount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('createADualTokenGiftCard() rate limits:', rateLimits);

        const data = await response.data();
        console.log('createADualTokenGiftCard() response:', data);
    } catch (error) {
        console.error('createADualTokenGiftCard() error:', error);
    }
}

createADualTokenGiftCard();
