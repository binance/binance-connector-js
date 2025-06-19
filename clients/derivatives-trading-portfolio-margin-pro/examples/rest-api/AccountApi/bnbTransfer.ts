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

async function bnbTransfer() {
    try {
        const response = await client.restAPI.bnbTransfer({
            amount: 1.0,
            transferSide: 'transferSide_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('bnbTransfer() rate limits:', rateLimits);

        const data = await response.data();
        console.log('bnbTransfer() response:', data);
    } catch (error) {
        console.error('bnbTransfer() error:', error);
    }
}

bnbTransfer();
