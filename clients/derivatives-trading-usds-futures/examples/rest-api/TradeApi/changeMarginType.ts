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

async function changeMarginType() {
    try {
        const response = await client.restAPI.changeMarginType({
            symbol: 'symbol_example',
            marginType:
                DerivativesTradingUsdsFuturesRestAPI.ChangeMarginTypeMarginTypeEnum.ISOLATED,
        });

        const rateLimits = response.rateLimits!;
        console.log('changeMarginType() rate limits:', rateLimits);

        const data = await response.data();
        console.log('changeMarginType() response:', data);
    } catch (error) {
        console.error('changeMarginType() error:', error);
    }
}

changeMarginType();
