import { Algo, AlgoRestAPI, ALGO_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? ALGO_REST_API_PROD_URL,
};
const client = new Algo({ configurationRestAPI });

async function volumeParticipation() {
    try {
        const response = await client.restAPI.volumeParticipation({
            symbol: 'BTCUSDT',
            side: AlgoRestAPI.VolumeParticipationSideEnum.BUY,
            quantity: 1,
            urgency: AlgoRestAPI.VolumeParticipationUrgencyEnum.LOW,
        });

        const rateLimits = response.rateLimits!;
        console.log('volumeParticipation() rate limits:', rateLimits);

        const data = await response.data();
        console.log('volumeParticipation() response:', data);
    } catch (error) {
        console.error('volumeParticipation() error:', error);
    }
}

volumeParticipation();
