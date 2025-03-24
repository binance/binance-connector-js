import {
    DerivativesTradingCoinFutures,
    DerivativesTradingCoinFuturesWebsocketAPI,
    DERIVATIVES_TRADING_COIN_FUTURES_WS_API_PROD_URL,
} from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? DERIVATIVES_TRADING_COIN_FUTURES_WS_API_PROD_URL,
};
const client = new DerivativesTradingCoinFutures({ configurationWebsocketAPI });

async function newOrder() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.newOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingCoinFuturesWebsocketAPI.NewOrderSideEnum.BUY,
            type: DerivativesTradingCoinFuturesWebsocketAPI.NewOrderTypeEnum.LIMIT,
        });

        const rateLimits = response.rateLimits!;
        console.log('newOrder() rate limits:', rateLimits);

        const data = response.data;
        console.log('newOrder() response:', data);
    } catch (error) {
        console.error('newOrder() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

newOrder();
