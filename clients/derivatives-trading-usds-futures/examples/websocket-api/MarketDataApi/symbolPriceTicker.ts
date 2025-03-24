import {
    DerivativesTradingUsdsFutures,
    DERIVATIVES_TRADING_USDS_FUTURES_WS_API_PROD_URL,
} from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? DERIVATIVES_TRADING_USDS_FUTURES_WS_API_PROD_URL,
};
const client = new DerivativesTradingUsdsFutures({ configurationWebsocketAPI });

async function symbolPriceTicker() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.symbolPriceTicker();

        const rateLimits = response.rateLimits!;
        console.log('symbolPriceTicker() rate limits:', rateLimits);

        const data = response.data;
        console.log('symbolPriceTicker() response:', data);
    } catch (error) {
        console.error('symbolPriceTicker() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

symbolPriceTicker();
