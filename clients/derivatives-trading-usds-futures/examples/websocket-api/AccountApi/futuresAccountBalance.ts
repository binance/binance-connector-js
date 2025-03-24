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

async function futuresAccountBalance() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.futuresAccountBalance();

        const rateLimits = response.rateLimits!;
        console.log('futuresAccountBalance() rate limits:', rateLimits);

        const data = response.data;
        console.log('futuresAccountBalance() response:', data);
    } catch (error) {
        console.error('futuresAccountBalance() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

futuresAccountBalance();
