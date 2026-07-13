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

async function setMarginCallLevel() {
    try {
        const response = await client.restAPI.setMarginCallLevel({
            marginCallLevel: 1.5,
        });

        const rateLimits = response.rateLimits!;
        console.log('setMarginCallLevel() rate limits:', rateLimits);

        const data = await response.data();
        console.log('setMarginCallLevel() response:', data);
    } catch (error) {
        console.error('setMarginCallLevel() error:', error);
    }
}

setMarginCallLevel();
