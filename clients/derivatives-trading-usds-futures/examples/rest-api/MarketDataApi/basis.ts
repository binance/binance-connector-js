import {
    DerivativesTradingUsdsFutures,
    DerivativesTradingUsdsFuturesRestAPI,
    DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
};
const client = new DerivativesTradingUsdsFutures({ configurationRestAPI });

async function basis() {
    try {
        const response = await client.restAPI.basis({
            pair: 'pair_example',
            contractType: DerivativesTradingUsdsFuturesRestAPI.BasisContractTypeEnum.PERPETUAL,
            period: DerivativesTradingUsdsFuturesRestAPI.BasisPeriodEnum.PERIOD_5m,
            limit: 30,
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
