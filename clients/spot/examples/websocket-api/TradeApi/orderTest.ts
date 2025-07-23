import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function orderTest() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.orderTest({
            symbol: 'BNBUSDT',
            side: SpotWebsocketAPI.OrderTestSideEnum.BUY,
            type: SpotWebsocketAPI.OrderTestTypeEnum.MARKET,
        });

        const rateLimits = response.rateLimits!;
        console.log('orderTest() rate limits:', rateLimits);

        const data = response.data;
        console.log('orderTest() response:', data);
    } catch (error) {
        console.error('orderTest() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

orderTest();
