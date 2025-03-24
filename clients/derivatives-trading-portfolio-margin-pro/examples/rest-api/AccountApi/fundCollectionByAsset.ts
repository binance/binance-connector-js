import {
    DerivativesTradingPortfolioMarginPro,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL,
};
const client = new DerivativesTradingPortfolioMarginPro({ configurationRestAPI });

async function fundCollectionByAsset() {
    try {
        const response = await client.restAPI.fundCollectionByAsset({
            asset: 'asset_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('fundCollectionByAsset() rate limits:', rateLimits);

        const data = await response.data();
        console.log('fundCollectionByAsset() response:', data);
    } catch (error) {
        console.error('fundCollectionByAsset() error:', error);
    }
}

fundCollectionByAsset();
