import {
    DerivativesTradingUsdsFutures,
    DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL,
};
const client = new DerivativesTradingUsdsFutures({ configurationRestAPI });

async function quarterlyContractSettlementPrice() {
    try {
        const response = await client.restAPI.quarterlyContractSettlementPrice({
            pair: 'pair_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('quarterlyContractSettlementPrice() rate limits:', rateLimits);

        const data = await response.data();
        console.log('quarterlyContractSettlementPrice() response:', data);
    } catch (error) {
        console.error('quarterlyContractSettlementPrice() error:', error);
    }
}

quarterlyContractSettlementPrice();
