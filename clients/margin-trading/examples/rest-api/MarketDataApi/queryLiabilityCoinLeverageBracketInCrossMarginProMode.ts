import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function queryLiabilityCoinLeverageBracketInCrossMarginProMode() {
    try {
        const response =
            await client.restAPI.queryLiabilityCoinLeverageBracketInCrossMarginProMode();

        const rateLimits = response.rateLimits!;
        console.log(
            'queryLiabilityCoinLeverageBracketInCrossMarginProMode() rate limits:',
            rateLimits
        );

        const data = await response.data();
        console.log('queryLiabilityCoinLeverageBracketInCrossMarginProMode() response:', data);
    } catch (error) {
        console.error('queryLiabilityCoinLeverageBracketInCrossMarginProMode() error:', error);
    }
}

queryLiabilityCoinLeverageBracketInCrossMarginProMode();
