import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function getMovePositionHistoryForSubAccount() {
    try {
        const response = await client.restAPI.getMovePositionHistoryForSubAccount({
            symbol: 'symbol_example',
            page: 789,
            row: 789,
        });

        const rateLimits = response.rateLimits!;
        console.log('getMovePositionHistoryForSubAccount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getMovePositionHistoryForSubAccount() response:', data);
    } catch (error) {
        console.error('getMovePositionHistoryForSubAccount() error:', error);
    }
}

getMovePositionHistoryForSubAccount();
