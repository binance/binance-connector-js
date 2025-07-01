import { Staking, STAKING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STAKING_REST_API_PROD_URL,
};
const client = new Staking({ configurationRestAPI });

async function setOnChainYieldsLockedProductRedeemOption() {
    try {
        const response = await client.restAPI.setOnChainYieldsLockedProductRedeemOption({
            positionId: '1',
            redeemTo: 'redeemTo_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('setOnChainYieldsLockedProductRedeemOption() rate limits:', rateLimits);

        const data = await response.data();
        console.log('setOnChainYieldsLockedProductRedeemOption() response:', data);
    } catch (error) {
        console.error('setOnChainYieldsLockedProductRedeemOption() error:', error);
    }
}

setOnChainYieldsLockedProductRedeemOption();
