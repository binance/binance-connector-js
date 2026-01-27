import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function getMarginAssetRiskBasedLiquidationRatio() {
    try {
        const response = await client.restAPI.getMarginAssetRiskBasedLiquidationRatio();

        const rateLimits = response.rateLimits!;
        console.log('getMarginAssetRiskBasedLiquidationRatio() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getMarginAssetRiskBasedLiquidationRatio() response:', data);
    } catch (error) {
        console.error('getMarginAssetRiskBasedLiquidationRatio() error:', error);
    }
}

getMarginAssetRiskBasedLiquidationRatio();
