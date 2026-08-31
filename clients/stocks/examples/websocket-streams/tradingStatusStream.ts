import { Stocks, STOCKS_WS_STREAMS_PROD_URL } from '../../src';

const configurationWebsocketStreams = {
    wsURL: process.env.WS_STREAMS_URL ?? STOCKS_WS_STREAMS_PROD_URL,
};
const client = new Stocks({ configurationWebsocketStreams });

async function tradingStatusStream() {
    let connection;

    try {
        connection = await client.websocketStreams.connect();

        const stream = connection.tradingStatusStream({
            symbol: 'AAPL',
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

tradingStatusStream();
