import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function orderListPlaceOpoco() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.orderListPlaceOpoco({
            symbol: 'BNBUSDT',
            workingType: SpotWebsocketAPI.OrderListPlaceOpocoWorkingTypeEnum.LIMIT,
            workingSide: SpotWebsocketAPI.OrderListPlaceOpocoWorkingSideEnum.BUY,
            workingPrice: 1.0,
            workingQuantity: 1.0,
            pendingSide: SpotWebsocketAPI.OrderListPlaceOpocoPendingSideEnum.BUY,
            pendingAboveType:
                SpotWebsocketAPI.OrderListPlaceOpocoPendingAboveTypeEnum.STOP_LOSS_LIMIT,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListPlaceOpoco() rate limits:', rateLimits);

        const data = response.data;
        console.log('orderListPlaceOpoco() response:', data);
    } catch (error) {
        console.error('orderListPlaceOpoco() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

orderListPlaceOpoco();
