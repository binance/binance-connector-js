import {
    DerivativesTradingOptions,
    DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
};
const client = new DerivativesTradingOptions({ configurationRestAPI });

async function accountFundingFlow() {
    try {
        const response = await client.restAPI.accountFundingFlow({
            currency: 'currency_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('accountFundingFlow() rate limits:', rateLimits);

        const data = await response.data();
        console.log('accountFundingFlow() response:', data);
    } catch (error) {
        console.error('accountFundingFlow() error:', error);
    }
}

accountFundingFlow();
