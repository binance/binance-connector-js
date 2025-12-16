import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function orderListPlaceOpo() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.orderListPlaceOpo({
            symbol: 'BNBUSDT',
            workingType: SpotWebsocketAPI.OrderListPlaceOpoWorkingTypeEnum.LIMIT,
            workingSide: SpotWebsocketAPI.OrderListPlaceOpoWorkingSideEnum.BUY,
            workingPrice: 1.0,
            workingQuantity: 1.0,
            pendingType: SpotWebsocketAPI.OrderListPlaceOpoPendingTypeEnum.LIMIT,
            pendingSide: SpotWebsocketAPI.OrderListPlaceOpoPendingSideEnum.BUY,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListPlaceOpo() rate limits:', rateLimits);

        const data = response.data;
        console.log('orderListPlaceOpo() response:', data);
    } catch (error) {
        console.error('orderListPlaceOpo() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

orderListPlaceOpo();
