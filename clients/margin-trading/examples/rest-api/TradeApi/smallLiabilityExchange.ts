import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function smallLiabilityExchange() {
    try {
        const response = await client.restAPI.smallLiabilityExchange({
            assetNames: ['BTC'],
        });

        const rateLimits = response.rateLimits!;
        console.log('smallLiabilityExchange() rate limits:', rateLimits);

        const data = await response.data();
        console.log('smallLiabilityExchange() response:', data);
    } catch (error) {
        console.error('smallLiabilityExchange() error:', error);
    }
}

smallLiabilityExchange();
