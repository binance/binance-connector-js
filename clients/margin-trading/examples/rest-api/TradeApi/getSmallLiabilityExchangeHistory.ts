import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function getSmallLiabilityExchangeHistory() {
    try {
        const response = await client.restAPI.getSmallLiabilityExchangeHistory({
            current: 1,
            size: 10,
        });

        const rateLimits = response.rateLimits!;
        console.log('getSmallLiabilityExchangeHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getSmallLiabilityExchangeHistory() response:', data);
    } catch (error) {
        console.error('getSmallLiabilityExchangeHistory() error:', error);
    }
}

getSmallLiabilityExchangeHistory();
