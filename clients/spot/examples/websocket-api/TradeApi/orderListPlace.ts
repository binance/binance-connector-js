import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function orderListPlace() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.orderListPlace({
            symbol: 'BNBUSDT',
            side: SpotWebsocketAPI.OrderListPlaceSideEnum.BUY,
            price: 1.0,
            quantity: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderListPlace() rate limits:', rateLimits);

        const data = response.data;
        console.log('orderListPlace() response:', data);
    } catch (error) {
        console.error('orderListPlace() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

orderListPlace();
