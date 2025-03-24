import {
    DerivativesTradingPortfolioMargin,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL,
};
const client = new DerivativesTradingPortfolioMargin({ configurationRestAPI });

async function getUmAccountDetailV2() {
    try {
        const response = await client.restAPI.getUmAccountDetailV2();

        const rateLimits = response.rateLimits!;
        console.log('getUmAccountDetailV2() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getUmAccountDetailV2() response:', data);
    } catch (error) {
        console.error('getUmAccountDetailV2() error:', error);
    }
}

getUmAccountDetailV2();
