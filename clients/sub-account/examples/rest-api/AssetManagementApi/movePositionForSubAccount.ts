import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function movePositionForSubAccount() {
    try {
        const response = await client.restAPI.movePositionForSubAccount({
            fromUserEmail: 'fromUserEmail_example',
            toUserEmail: 'toUserEmail_example',
            productType: 'productType_example',
            orderArgs: [],
        });

        const rateLimits = response.rateLimits!;
        console.log('movePositionForSubAccount() rate limits:', rateLimits);

        const data = await response.data();
        console.log('movePositionForSubAccount() response:', data);
    } catch (error) {
        console.error('movePositionForSubAccount() error:', error);
    }
}

movePositionForSubAccount();
