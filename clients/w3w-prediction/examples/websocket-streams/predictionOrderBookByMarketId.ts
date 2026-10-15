import {
    W3WPrediction,
    W3WPredictionWebsocketStreams,
    W3W_PREDICTION_WS_STREAMS_PROD_URL,
} from '../../src';

const configurationWebsocketStreams = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_STREAMS_URL ?? W3W_PREDICTION_WS_STREAMS_PROD_URL,
};
const client = new W3WPrediction({ configurationWebsocketStreams });

async function predictionOrderBookByMarketId() {
    let connection: W3WPredictionWebsocketStreams.WebsocketStreamsConnection | undefined;

    try {
        connection = await client.websocketStreams.connect();

        const stream = connection.predictionOrderBookByMarketId({
            marketId: '8859231',
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

predictionOrderBookByMarketId();
