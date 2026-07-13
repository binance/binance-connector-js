import { Convert, ConvertRestAPI, CONVERT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CONVERT_REST_API_PROD_URL,
};
const client = new Convert({ configurationRestAPI });

async function placeLimitOrder() {
    try {
        const response = await client.restAPI.placeLimitOrder({
            baseAsset: 'BTC',
            quoteAsset: 'USDT',
            limitPrice: 1,
            side: ConvertRestAPI.PlaceLimitOrderSideEnum.BUY,
            expiredType: ConvertRestAPI.PlaceLimitOrderExpiredTypeEnum.EXPIRED_TYPE_1_D,
        });

        const rateLimits = response.rateLimits!;
        console.log('placeLimitOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('placeLimitOrder() response:', data);
    } catch (error) {
        console.error('placeLimitOrder() error:', error);
    }
}

placeLimitOrder();
