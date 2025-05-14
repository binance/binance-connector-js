import { Spot, SpotRestAPI, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function orderListOtoco() {
    try {
        const response = await client.restAPI.orderListOtoco({
            symbol: 'BNBUSDT',
            workingType: SpotRestAPI.OrderListOtocoWorkingTypeEnum.LIMIT,
            workingSide: SpotRestAPI.OrderListOtocoWorkingSideEnum.BUY,
            workingPrice: 1.0,
            workingQuantity: 1.0,
            pendingSide: SpotRestAPI.OrderListOtocoPendingSideEnum.BUY,
            pendingQuantity: 1.0,
            pendingAboveType: SpotRestAPI.OrderListOtocoPendingAboveTypeEnum.STOP_LOSS_LIMIT,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListOtoco() rate limits:', rateLimits);

        const data = await response.data();
        console.log('orderListOtoco() response:', data);
    } catch (error) {
        console.error('orderListOtoco() error:', error);
    }
}

orderListOtoco();
