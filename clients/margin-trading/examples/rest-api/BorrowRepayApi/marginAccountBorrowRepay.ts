import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function marginAccountBorrowRepay() {
    try {
        const response = await client.restAPI.marginAccountBorrowRepay({
            asset: 'asset_example',
            isIsolated: '',
            symbol: 'symbol_example',
            amount: 'amount_example',
            type: 'type_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('marginAccountBorrowRepay() rate limits:', rateLimits);

        const data = await response.data();
        console.log('marginAccountBorrowRepay() response:', data);
    } catch (error) {
        console.error('marginAccountBorrowRepay() error:', error);
    }
}

marginAccountBorrowRepay();
