import { Spot, SpotRestAPI, SPOT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SPOT_REST_API_PROD_URL,
};
const client = new Spot({ configurationRestAPI });

async function orderListOpo() {
    try {
        const response = await client.restAPI.orderListOpo({
            symbol: 'BNBUSDT',
            workingType: SpotRestAPI.OrderListOpoWorkingTypeEnum.LIMIT,
            workingSide: SpotRestAPI.OrderListOpoWorkingSideEnum.BUY,
            workingPrice: 1.0,
            workingQuantity: 1.0,
            pendingType: SpotRestAPI.OrderListOpoPendingTypeEnum.LIMIT,
            pendingSide: SpotRestAPI.OrderListOpoPendingSideEnum.BUY,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListOpo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('orderListOpo() response:', data);
    } catch (error) {
        console.error('orderListOpo() error:', error);
    }
}

orderListOpo();
