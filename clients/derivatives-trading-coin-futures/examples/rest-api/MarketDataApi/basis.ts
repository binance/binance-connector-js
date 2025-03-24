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

async function basis() {
    try {
        const response = await client.restAPI.basis({
            pair: 'pair_example',
            contractType: DerivativesTradingCoinFuturesRestAPI.BasisContractTypeEnum.PERPETUAL,
            period: DerivativesTradingCoinFuturesRestAPI.BasisPeriodEnum.PERIOD_5m,
        });

        const rateLimits = response.rateLimits!;
        console.log('basis() rate limits:', rateLimits);

        const data = await response.data();
        console.log('basis() response:', data);
    } catch (error) {
        console.error('basis() error:', error);
    }
}

basis();
