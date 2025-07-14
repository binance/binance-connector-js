import { Spot, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    privateKey: 'your-ed25519-private-key-content-or-file-path',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function sessionLogon() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.sessionLogon();

        response.forEach((res) => {
            const rateLimits = res.rateLimits!;
            console.log('sessionLogon() rate limits:', rateLimits);

            const data = res.data;
            console.log('sessionLogon() response:', data);
        });
    } catch (error) {
        console.error('sessionLogon() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

sessionLogon();
