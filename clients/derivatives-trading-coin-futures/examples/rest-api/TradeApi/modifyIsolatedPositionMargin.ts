import {
    DerivativesTradingCoinFutures,
    DerivativesTradingCoinFuturesRestAPI,
    DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL,
};
const client = new DerivativesTradingCoinFutures({ configurationRestAPI });

async function modifyIsolatedPositionMargin() {
    try {
        const response = await client.restAPI.modifyIsolatedPositionMargin({
            symbol: 'symbol_example',
            amount: 1,
            type: DerivativesTradingCoinFuturesRestAPI.ModifyIsolatedPositionMarginTypeEnum.LIMIT,
        });

        const rateLimits = response.rateLimits!;
        console.log('modifyIsolatedPositionMargin() rate limits:', rateLimits);

        const data = await response.data();
        console.log('modifyIsolatedPositionMargin() response:', data);
    } catch (error) {
        console.error('modifyIsolatedPositionMargin() error:', error);
    }
}

modifyIsolatedPositionMargin();
