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

async function cmNotionalAndLeverageBrackets() {
    try {
        const response = await client.restAPI.cmNotionalAndLeverageBrackets();

        const rateLimits = response.rateLimits!;
        console.log('cmNotionalAndLeverageBrackets() rate limits:', rateLimits);

        const data = await response.data();
        console.log('cmNotionalAndLeverageBrackets() response:', data);
    } catch (error) {
        console.error('cmNotionalAndLeverageBrackets() error:', error);
    }
}

cmNotionalAndLeverageBrackets();
