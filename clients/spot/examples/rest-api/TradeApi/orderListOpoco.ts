import { Spot, SpotRestAPI, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function orderListOpoco() {
    try {
        const response = await client.restAPI.orderListOpoco({
            symbol: 'BNBUSDT',
            workingType: SpotRestAPI.OrderListOpocoWorkingTypeEnum.LIMIT,
            workingSide: SpotRestAPI.OrderListOpocoWorkingSideEnum.BUY,
            workingPrice: 1.0,
            workingQuantity: 1.0,
            pendingSide: SpotRestAPI.OrderListOpocoPendingSideEnum.BUY,
            pendingAboveType: SpotRestAPI.OrderListOpocoPendingAboveTypeEnum.STOP_LOSS_LIMIT,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListOpoco() rate limits:', rateLimits);

        const data = await response.data();
        console.log('orderListOpoco() response:', data);
    } catch (error) {
        console.error('orderListOpoco() error:', error);
    }
}

orderListOpoco();
