import {
    DerivativesTradingCoinFutures,
    DERIVATIVES_TRADING_COIN_FUTURES_WS_API_PROD_URL,
} from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? DERIVATIVES_TRADING_COIN_FUTURES_WS_API_PROD_URL,
};
const client = new DerivativesTradingCoinFutures({ configurationWebsocketAPI });

async function cancelOrder() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.cancelOrder({
            symbol: 'symbol_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('cancelOrder() rate limits:', rateLimits);

        const data = response.data;
        console.log('cancelOrder() response:', data);
    } catch (error) {
        console.error('cancelOrder() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

cancelOrder();
