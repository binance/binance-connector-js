import {
    DerivativesTradingUsdsFutures,
    DerivativesTradingUsdsFuturesWebsocketAPI,
    DERIVATIVES_TRADING_USDS_FUTURES_WS_API_PROD_URL,
} from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? DERIVATIVES_TRADING_USDS_FUTURES_WS_API_PROD_URL,
};
const client = new DerivativesTradingUsdsFutures({ configurationWebsocketAPI });

async function modifyOrder() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.modifyOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingUsdsFuturesWebsocketAPI.ModifyOrderSideEnum.BUY,
            quantity: 1.0,
            price: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('modifyOrder() rate limits:', rateLimits);

        const data = response.data;
        console.log('modifyOrder() response:', data);
    } catch (error) {
        console.error('modifyOrder() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

modifyOrder();
