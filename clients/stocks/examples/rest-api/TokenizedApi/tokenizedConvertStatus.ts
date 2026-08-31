import { Stocks, StocksRestAPI, STOCKS_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? STOCKS_REST_API_PROD_URL,
};
const client = new Stocks({ configurationRestAPI });

async function tokenizedConvertStatus() {
    try {
        const response = await client.restAPI.tokenizedConvertStatus({
            issuerRequestId: 'mint-20260505-8f3b9e1a2d3c4b5a',
            convertType: StocksRestAPI.TokenizedConvertStatusConvertTypeEnum.MINT,
        });

        const rateLimits = response.rateLimits!;
        console.log('tokenizedConvertStatus() rate limits:', rateLimits);

        const data = await response.data();
        console.log('tokenizedConvertStatus() response:', data);
    } catch (error) {
        console.error('tokenizedConvertStatus() error:', error);
    }
}

tokenizedConvertStatus();
