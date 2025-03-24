import { Spot, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function tickerTradingDay() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.tickerTradingDay({
            symbol: 'BNBUSDT',
        });

        const rateLimits = response.rateLimits!;
        console.log('tickerTradingDay() rate limits:', rateLimits);

        const data = response.data;
        console.log('tickerTradingDay() response:', data);
    } catch (error) {
        console.error('tickerTradingDay() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

tickerTradingDay();
