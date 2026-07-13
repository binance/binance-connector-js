import {
    MarginTrading,
    MarginTradingRestAPI,
    MARGIN_TRADING_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function marginAccountBorrowRepay() {
    try {
        const response = await client.restAPI.marginAccountBorrowRepay({
            asset: 'USDT',
            isIsolated: MarginTradingRestAPI.MarginAccountBorrowRepayIsIsolatedEnum.TRUE,
            amount: '1.0',
            type: MarginTradingRestAPI.MarginAccountBorrowRepayTypeEnum.BORROW,
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
