import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function queryBorrowRepayRecordsInMarginAccount() {
    try {
        const response = await client.restAPI.queryBorrowRepayRecordsInMarginAccount({
            type: 'type_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryBorrowRepayRecordsInMarginAccount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryBorrowRepayRecordsInMarginAccount() response:', data);
    } catch (error) {
        console.error('queryBorrowRepayRecordsInMarginAccount() error:', error);
    }
}

queryBorrowRepayRecordsInMarginAccount();
