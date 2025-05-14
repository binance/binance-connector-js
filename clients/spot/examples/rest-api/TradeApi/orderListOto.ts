import { Spot, SpotRestAPI, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function orderListOto() {
    try {
        const response = await client.restAPI.orderListOto({
            symbol: 'BNBUSDT',
            workingType: SpotRestAPI.OrderListOtoWorkingTypeEnum.LIMIT,
            workingSide: SpotRestAPI.OrderListOtoWorkingSideEnum.BUY,
            workingPrice: 1.0,
            workingQuantity: 1.0,
            pendingType: SpotRestAPI.OrderListOtoPendingTypeEnum.LIMIT,
            pendingSide: SpotRestAPI.OrderListOtoPendingSideEnum.BUY,
            pendingQuantity: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListOto() rate limits:', rateLimits);

        const data = await response.data();
        console.log('orderListOto() response:', data);
    } catch (error) {
        console.error('orderListOto() error:', error);
    }
}

orderListOto();
