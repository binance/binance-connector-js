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

async function marginAccountNewOto() {
    try {
        const response = await client.restAPI.marginAccountNewOto({
            symbol: 'BTCUSDT',
            workingType: MarginTradingRestAPI.MarginAccountNewOtoWorkingTypeEnum.LIMIT,
            workingSide: MarginTradingRestAPI.MarginAccountNewOtoWorkingSideEnum.SELL,
            workingPrice: 1.0,
            workingQuantity: 1.0,
            workingIcebergQty: 1.0,
            pendingType: MarginTradingRestAPI.MarginAccountNewOtoPendingTypeEnum.LIMIT,
            pendingSide: MarginTradingRestAPI.MarginAccountNewOtoPendingSideEnum.BUY,
            pendingQuantity: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('marginAccountNewOto() rate limits:', rateLimits);

        const data = await response.data();
        console.log('marginAccountNewOto() response:', data);
    } catch (error) {
        console.error('marginAccountNewOto() error:', error);
    }
}

marginAccountNewOto();
