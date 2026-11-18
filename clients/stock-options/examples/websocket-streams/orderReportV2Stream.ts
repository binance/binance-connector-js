import {
    StockOptions,
    StockOptionsWebsocketStreams,
    STOCK_OPTIONS_WS_STREAMS_PROD_URL,
} from '../../src';

const configurationWebsocketStreams = {
    wsURL: process.env.WS_STREAMS_URL ?? STOCK_OPTIONS_WS_STREAMS_PROD_URL,
};
const client = new StockOptions({ configurationWebsocketStreams });

async function orderReportV2Stream() {
    let connection: StockOptionsWebsocketStreams.WebsocketStreamsConnection | undefined;

    try {
        connection = await client.websocketStreams.connect();

        const stream = connection.orderReportV2Stream({
            listenKey: '3f9a1c2e-7b4d-4e8a-9c61-0d2f5b7e8a13',
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

orderReportV2Stream();
