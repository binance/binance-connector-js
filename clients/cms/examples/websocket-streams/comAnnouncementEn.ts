import { Cms, CmsWebsocketStreams, CMS_WS_STREAMS_PROD_URL } from '../../src';

const configurationWebsocketStreams = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_STREAMS_URL ?? CMS_WS_STREAMS_PROD_URL,
};
const client = new Cms({ configurationWebsocketStreams });

async function comAnnouncementEn() {
    let connection: CmsWebsocketStreams.WebsocketStreamsConnection | undefined;

    try {
        connection = await client.websocketStreams.connect();

        const stream = connection.comAnnouncementEn();

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

comAnnouncementEn();
