import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function orderListPlaceOto() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.orderListPlaceOto({
            symbol: 'BNBUSDT',
            workingType: SpotWebsocketAPI.OrderListPlaceOtoWorkingTypeEnum.LIMIT,
            workingSide: SpotWebsocketAPI.OrderListPlaceOtoWorkingSideEnum.BUY,
            workingPrice: 1.0,
            workingQuantity: 1.0,
            pendingType: SpotWebsocketAPI.OrderListPlaceOtoPendingTypeEnum.LIMIT,
            pendingSide: SpotWebsocketAPI.OrderListPlaceOtoPendingSideEnum.BUY,
            pendingQuantity: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListPlaceOto() rate limits:', rateLimits);

        const data = response.data;
        console.log('orderListPlaceOto() response:', data);
    } catch (error) {
        console.error('orderListPlaceOto() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

orderListPlaceOto();
