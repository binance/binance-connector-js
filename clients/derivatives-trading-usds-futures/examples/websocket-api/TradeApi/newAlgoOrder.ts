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

async function newAlgoOrder() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.newAlgoOrder({
            algoType: 'algoType_example',
            symbol: 'symbol_example',
            side: DerivativesTradingUsdsFuturesWebsocketAPI.NewAlgoOrderSideEnum.BUY,
            type: 'type_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('newAlgoOrder() rate limits:', rateLimits);

        const data = response.data;
        console.log('newAlgoOrder() response:', data);
    } catch (error) {
        console.error('newAlgoOrder() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

newAlgoOrder();
