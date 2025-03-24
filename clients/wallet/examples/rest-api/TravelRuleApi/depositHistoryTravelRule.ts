import { Wallet, WALLET_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? WALLET_REST_API_PROD_URL,
};
const client = new Wallet({ configurationRestAPI });

async function depositHistoryTravelRule() {
    try {
        const response = await client.restAPI.depositHistoryTravelRule();

        const rateLimits = response.rateLimits!;
        console.log('depositHistoryTravelRule() rate limits:', rateLimits);

        const data = await response.data();
        console.log('depositHistoryTravelRule() response:', data);
    } catch (error) {
        console.error('depositHistoryTravelRule() error:', error);
    }
}

depositHistoryTravelRule();
