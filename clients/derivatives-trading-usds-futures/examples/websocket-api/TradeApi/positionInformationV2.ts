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

async function positionInformationV2() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.positionInformationV2();

        const rateLimits = response.rateLimits!;
        console.log('positionInformationV2() rate limits:', rateLimits);

        const data = response.data;
        console.log('positionInformationV2() response:', data);
    } catch (error) {
        console.error('positionInformationV2() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

positionInformationV2();
