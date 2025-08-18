import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function getFutureHourlyInterestRate() {
    try {
        const response = await client.restAPI.getFutureHourlyInterestRate({
            assets: 'assets_example',
            isIsolated: false,
        });

        const rateLimits = response.rateLimits!;
        console.log('getFutureHourlyInterestRate() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getFutureHourlyInterestRate() response:', data);
    } catch (error) {
        console.error('getFutureHourlyInterestRate() error:', error);
    }
}

getFutureHourlyInterestRate();
