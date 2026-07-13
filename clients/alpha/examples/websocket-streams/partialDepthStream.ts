import { Alpha, AlphaWebsocketStreams, ALPHA_WS_STREAMS_PROD_URL } from '../../src';

const configurationWebsocketStreams = {
    wsURL: process.env.WS_STREAMS_URL ?? ALPHA_WS_STREAMS_PROD_URL,
};
const client = new Alpha({ configurationWebsocketStreams });

async function partialDepthStream() {
    let connection;

    try {
        connection = await client.websocketStreams.connect();

        const stream = connection.partialDepthStream({
            symbol: 'alpha_116usdt',
            levels: AlphaWebsocketStreams.PartialDepthStreamLevelsEnum.LEVELS_5,
            interval: AlphaWebsocketStreams.PartialDepthStreamIntervalEnum.INTERVAL_0ms,
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

partialDepthStream();
