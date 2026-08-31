import { Stocks, STOCKS_WS_STREAMS_PROD_URL } from '../../src';

const configurationWebsocketStreams = {
    wsURL: process.env.WS_STREAMS_URL ?? STOCKS_WS_STREAMS_PROD_URL,
};
const client = new Stocks({ configurationWebsocketStreams });

async function orderReportStream() {
    let connection;

    try {
        connection = await client.websocketStreams.connect();

        const stream = connection.orderReportStream({
            listenKey: 'pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s6af0dkfj2a97b8a91d',
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

orderReportStream();
