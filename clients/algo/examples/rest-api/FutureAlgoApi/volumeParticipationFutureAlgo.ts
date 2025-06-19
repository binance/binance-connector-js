import { Algo, ALGO_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALGO_REST_API_PROD_URL,
};
const client = new Algo({ configurationRestAPI });

async function volumeParticipationFutureAlgo() {
    try {
        const response = await client.restAPI.volumeParticipationFutureAlgo({
            symbol: 'BTCUSDT',
            side: 'BUY',
            quantity: 1.0,
            urgency: 'LOW',
        });

        const rateLimits = response.rateLimits!;
        console.log('volumeParticipationFutureAlgo() rate limits:', rateLimits);

        const data = await response.data();
        console.log('volumeParticipationFutureAlgo() response:', data);
    } catch (error) {
        console.error('volumeParticipationFutureAlgo() error:', error);
    }
}

volumeParticipationFutureAlgo();
