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

async function marginAccountNewOtoco() {
    try {
        const response = await client.restAPI.marginAccountNewOtoco({
            symbol: 'BTCUSDT',
            workingType: MarginTradingRestAPI.MarginAccountNewOtocoWorkingTypeEnum.LIMIT,
            workingSide: MarginTradingRestAPI.MarginAccountNewOtocoWorkingSideEnum.SELL,
            workingPrice: 1.0,
            workingQuantity: 1.0,
            pendingSide: MarginTradingRestAPI.MarginAccountNewOtocoPendingSideEnum.BUY,
            pendingQuantity: 1.0,
            pendingAboveType:
                MarginTradingRestAPI.MarginAccountNewOtocoPendingAboveTypeEnum.LIMIT_MAKER,
        });

        const rateLimits = response.rateLimits!;
        console.log('marginAccountNewOtoco() rate limits:', rateLimits);

        const data = await response.data();
        console.log('marginAccountNewOtoco() response:', data);
    } catch (error) {
        console.error('marginAccountNewOtoco() error:', error);
    }
}

marginAccountNewOtoco();
