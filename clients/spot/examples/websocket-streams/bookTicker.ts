import { Spot, SPOT_WS_STREAMS_PROD_URL } from '../../src';

const configurationWebsocketStreams = {
    wsURL: process.env.WS_STREAMS_URL ?? SPOT_WS_STREAMS_PROD_URL,
};
const client = new Spot({ configurationWebsocketStreams });

async function bookTicker() {
    let connection;

    try {
        connection = await client.websocketStreams.connect();

        const stream = connection.bookTicker({
            symbol: 'bnbusdt',
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

bookTicker();
