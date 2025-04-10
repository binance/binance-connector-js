import {
    DerivativesTradingOptions,
    DERIVATIVES_TRADING_OPTIONS_WS_STREAMS_PROD_URL,
} from '../../src';

const configurationWebsocketStreams = {
    wsURL: process.env.WS_STREAMS_URL ?? DERIVATIVES_TRADING_OPTIONS_WS_STREAMS_PROD_URL,
};
const client = new DerivativesTradingOptions({ configurationWebsocketStreams });

async function tradeStreams() {
    let connection;

    try {
        connection = await client.websocketStreams.connect();

        const stream = connection.tradeStreams({
            symbol: 'btcusdt',
        });

        stream.on('message', (data) => {
            console.info(data);
        });
    } catch (error) {
        console.error(error);
    } finally {
        // disconnect after 20 seconds
        setTimeout(async () => await connection!.disconnect(), 20000);
    }
}

tradeStreams();
