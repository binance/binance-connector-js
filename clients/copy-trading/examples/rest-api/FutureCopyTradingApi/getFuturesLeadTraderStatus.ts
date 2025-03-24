import { CopyTrading, COPY_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? COPY_TRADING_REST_API_PROD_URL,
};
const client = new CopyTrading({ configurationRestAPI });

async function getFuturesLeadTraderStatus() {
    try {
        const response = await client.restAPI.getFuturesLeadTraderStatus();

        const rateLimits = response.rateLimits!;
        console.log('getFuturesLeadTraderStatus() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getFuturesLeadTraderStatus() response:', data);
    } catch (error) {
        console.error('getFuturesLeadTraderStatus() error:', error);
    }
}

getFuturesLeadTraderStatus();
