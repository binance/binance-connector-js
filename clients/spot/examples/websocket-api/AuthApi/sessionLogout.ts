import { Spot, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function sessionLogout() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.sessionLogout();

        response.forEach((res) => {
            const rateLimits = res.rateLimits!;
            console.log('sessionLogout() rate limits:', rateLimits);

            const data = res.data;
            console.log('sessionLogout() response:', data);
        });
    } catch (error) {
        console.error('sessionLogout() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

sessionLogout();
