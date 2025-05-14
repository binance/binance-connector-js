import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function orderPlace() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.orderPlace({
            symbol: 'BNBUSDT',
            side: SpotWebsocketAPI.OrderPlaceSideEnum.BUY,
            type: SpotWebsocketAPI.OrderPlaceTypeEnum.MARKET,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderPlace() rate limits:', rateLimits);

        const data = response.data;
        console.log('orderPlace() response:', data);
    } catch (error) {
        console.error('orderPlace() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

orderPlace();
