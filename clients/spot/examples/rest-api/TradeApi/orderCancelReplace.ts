import { Spot, SpotRestAPI, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function orderCancelReplace() {
    try {
        const response = await client.restAPI.orderCancelReplace({
            symbol: 'BNBUSDT',
            side: SpotRestAPI.OrderCancelReplaceSideEnum.BUY,
            type: SpotRestAPI.OrderCancelReplaceTypeEnum.MARKET,
            cancelReplaceMode: SpotRestAPI.OrderCancelReplaceCancelReplaceModeEnum.STOP_ON_FAILURE,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderCancelReplace() rate limits:', rateLimits);

        const data = await response.data();
        console.log('orderCancelReplace() response:', data);
    } catch (error) {
        console.error('orderCancelReplace() error:', error);
    }
}

orderCancelReplace();
