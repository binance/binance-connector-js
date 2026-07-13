import {
    DerivativesTradingPortfolioMarginPro,
    DerivativesTradingPortfolioMarginProRestAPI,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL,
};
const client = new DerivativesTradingPortfolioMarginPro({ configurationRestAPI });

async function getTransferableEarnAssetBalanceForPortfolioMargin() {
    try {
        const response = await client.restAPI.getTransferableEarnAssetBalanceForPortfolioMargin({
            asset: 'LDUSDT',
            transferType:
                DerivativesTradingPortfolioMarginProRestAPI
                    .GetTransferableEarnAssetBalanceForPortfolioMarginTransferTypeEnum
                    .EARN_TO_FUTURE,
        });

        const rateLimits = response.rateLimits!;
        console.log('getTransferableEarnAssetBalanceForPortfolioMargin() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getTransferableEarnAssetBalanceForPortfolioMargin() response:', data);
    } catch (error) {
        console.error('getTransferableEarnAssetBalanceForPortfolioMargin() error:', error);
    }
}

getTransferableEarnAssetBalanceForPortfolioMargin();
