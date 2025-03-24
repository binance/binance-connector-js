import {
    DerivativesTradingCoinFutures,
    DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL,
};
const client = new DerivativesTradingCoinFutures({ configurationRestAPI });

async function classicPortfolioMarginAccountInformation() {
    try {
        const response = await client.restAPI.classicPortfolioMarginAccountInformation({
            asset: 'asset_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('classicPortfolioMarginAccountInformation() rate limits:', rateLimits);

        const data = await response.data();
        console.log('classicPortfolioMarginAccountInformation() response:', data);
    } catch (error) {
        console.error('classicPortfolioMarginAccountInformation() error:', error);
    }
}

classicPortfolioMarginAccountInformation();
