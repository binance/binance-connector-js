import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function setLockedProductRedeemOption() {
    try {
        const response = await client.restAPI.setLockedProductRedeemOption({
            positionId: '1',
            redeemTo: 'redeemTo_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('setLockedProductRedeemOption() rate limits:', rateLimits);

        const data = await response.data();
        console.log('setLockedProductRedeemOption() response:', data);
    } catch (error) {
        console.error('setLockedProductRedeemOption() error:', error);
    }
}

setLockedProductRedeemOption();
