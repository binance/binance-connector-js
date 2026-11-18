import { StockOptions, STOCK_OPTIONS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCK_OPTIONS_REST_API_PROD_URL,
};
const client = new StockOptions({ configurationRestAPI });

async function optionSettlementEventDetail() {
    try {
        const response = await client.restAPI.optionSettlementEventDetail({
            eventId: 'a7f3c2e1-4b5d-4e8f-9c0a-1b2c3d4e5f60',
        });

        const rateLimits = response.rateLimits!;
        console.log('optionSettlementEventDetail() rate limits:', rateLimits);

        const data = await response.data();
        console.log('optionSettlementEventDetail() response:', data);
    } catch (error) {
        console.error('optionSettlementEventDetail() error:', error);
    }
}

optionSettlementEventDetail();
