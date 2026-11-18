import { StockOptions, STOCK_OPTIONS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCK_OPTIONS_REST_API_PROD_URL,
};
const client = new StockOptions({ configurationRestAPI });

async function optionSettlementEventHistory() {
    try {
        const response = await client.restAPI.optionSettlementEventHistory();

        const rateLimits = response.rateLimits!;
        console.log('optionSettlementEventHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('optionSettlementEventHistory() response:', data);
    } catch (error) {
        console.error('optionSettlementEventHistory() error:', error);
    }
}

optionSettlementEventHistory();
