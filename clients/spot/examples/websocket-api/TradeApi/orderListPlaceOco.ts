import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function orderListPlaceOco() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.orderListPlaceOco({
            symbol: 'BNBUSDT',
            side: SpotWebsocketAPI.OrderListPlaceOcoSideEnum.BUY,
            quantity: 1.0,
            aboveType: SpotWebsocketAPI.OrderListPlaceOcoAboveTypeEnum.STOP_LOSS_LIMIT,
            belowType: SpotWebsocketAPI.OrderListPlaceOcoBelowTypeEnum.STOP_LOSS,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListPlaceOco() rate limits:', rateLimits);

        const data = response.data;
        console.log('orderListPlaceOco() response:', data);
    } catch (error) {
        console.error('orderListPlaceOco() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

orderListPlaceOco();
