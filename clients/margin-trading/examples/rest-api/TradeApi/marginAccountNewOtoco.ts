import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function marginAccountNewOtoco() {
    try {
        const response = await client.restAPI.marginAccountNewOtoco({
            symbol: 'symbol_example',
            workingType: 'workingType_example',
            workingSide: 'workingSide_example',
            workingPrice: 1,
            workingQuantity: 1,
            pendingSide: 'pendingSide_example',
            pendingQuantity: 1,
            pendingAboveType: 'pendingAboveType_example',
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
