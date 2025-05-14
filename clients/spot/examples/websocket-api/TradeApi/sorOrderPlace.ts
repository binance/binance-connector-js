import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function sorOrderPlace() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.sorOrderPlace({
            symbol: 'BNBUSDT',
            side: SpotWebsocketAPI.SorOrderPlaceSideEnum.BUY,
            type: SpotWebsocketAPI.SorOrderPlaceTypeEnum.MARKET,
            quantity: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('sorOrderPlace() rate limits:', rateLimits);

        const data = response.data;
        console.log('sorOrderPlace() response:', data);
    } catch (error) {
        console.error('sorOrderPlace() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

sorOrderPlace();
