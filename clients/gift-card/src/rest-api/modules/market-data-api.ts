/**
 * Binance Gift Card REST API
 *
 * OpenAPI Specification for the Binance Gift Card REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ConfigurationRestAPI,
    TimeUnit,
    RestApiResponse,
    assertParamExists,
    sendRequest,
    type RequestArgs,
} from '@binance/common';
import type {
    CreateADualTokenGiftCardResponse,
    CreateASingleTokenGiftCardResponse,
    FetchRsaPublicKeyResponse,
    FetchTokenLimitResponse,
    RedeemABinanceGiftCardResponse,
    VerifyBinanceGiftCardByGiftCardNumberResponse,
} from '../types';

/**
 * MarketDataApi - axios parameter creator
 */
const MarketDataApiAxiosParamCreator = function (configuration: ConfigurationRestAPI) {
    return {
        /**
         * * This API is for creating a dual-token ( stablecoin-denominated) Binance Gift Card. You may create a gift card using USDT as baseToken, that is redeemable to another designated token (faceToken). For example, you can create a fixed-value BTC gift card and pay with 100 USDT plus 1 USDT fee. This gift card can keep the value fixed at 100 USDT before redemption, and will be redeemable to BTC equivalent to 100 USDT upon redemption.
         * Once successfully created, the amount of baseToken (e.g. USDT) in the fixed-value gift card along with the fee would be deducted from your funding wallet.
         *
         *
         * To get started with, please make sure:
         * You have a Binance account
         * You have passed KYB
         * You have a sufﬁcient balance(Gift Card amount and fee amount) in your Binance funding wallet
         * You need Enable Withdrawals for the API Key which requests this endpoint.
         *
         * Weight: 1
         *
         * @summary Create a dual-token gift card(fixed value, discount feature)(TRADE)
         * @param {string} baseToken The token you want to pay, example: BUSD
         * @param {string} faceToken The token you want to buy, example: BNB. If faceToken = baseToken, it's the same as createCode endpoint.
         * @param {number} baseTokenAmount The base token asset quantity, example : 1.002
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        createADualTokenGiftCard: async (
            baseToken: string,
            faceToken: string,
            baseTokenAmount: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            // verify required parameter 'baseToken' is not null or undefined
            assertParamExists('createADualTokenGiftCard', 'baseToken', baseToken);
            // verify required parameter 'faceToken' is not null or undefined
            assertParamExists('createADualTokenGiftCard', 'faceToken', faceToken);
            // verify required parameter 'baseTokenAmount' is not null or undefined
            assertParamExists('createADualTokenGiftCard', 'baseTokenAmount', baseTokenAmount);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (baseToken !== undefined && baseToken !== null) {
                localVarQueryParameter['baseToken'] = baseToken;
            }

            if (faceToken !== undefined && faceToken !== null) {
                localVarQueryParameter['faceToken'] = faceToken;
            }

            if (baseTokenAmount !== undefined && baseTokenAmount !== null) {
                localVarQueryParameter['baseTokenAmount'] = baseTokenAmount;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/giftcard/buyCode',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * This API is for creating a Binance Gift Card.
         *
         * To get started with, please make sure:
         *
         * You have a Binance account
         * You have passed KYB
         * You have a sufﬁcient balance(Gift Card amount and fee amount) in your Binance funding wallet
         * You need `Enable Withdrawals` for the API Key which requests this endpoint.
         *
         * Weight: 1
         *
         * @summary Create a single-token gift card (USER_DATA)
         * @param {string} token The token type contained in the Binance Gift Card
         * @param {number} amount The amount of the token contained in the Binance Gift Card
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        createASingleTokenGiftCard: async (
            token: string,
            amount: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('createASingleTokenGiftCard', 'token', token);
            // verify required parameter 'amount' is not null or undefined
            assertParamExists('createASingleTokenGiftCard', 'amount', amount);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (token !== undefined && token !== null) {
                localVarQueryParameter['token'] = token;
            }

            if (amount !== undefined && amount !== null) {
                localVarQueryParameter['amount'] = amount;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/giftcard/createCode',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * This API is for fetching the RSA Public Key.
         * This RSA Public key will be used to encrypt the card code.
         *
         **Please note that the RSA Public key fetched is valid only for the current day.**
         *
         * Weight: 1
         *
         * @summary Fetch RSA Public Key(USER_DATA)
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        fetchRsaPublicKey: async (recvWindow?: number): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/giftcard/cryptography/rsa-public-key',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * This API is to help you verify which tokens are available for you to create Stablecoin-Denominated gift cards as mentioned in section 2 and its’ limitation.
         *
         * Weight: 1
         *
         * @summary Fetch Token Limit(USER_DATA)
         * @param {string} baseToken The token you want to pay, example: BUSD
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        fetchTokenLimit: async (baseToken: string, recvWindow?: number): Promise<RequestArgs> => {
            // verify required parameter 'baseToken' is not null or undefined
            assertParamExists('fetchTokenLimit', 'baseToken', baseToken);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (baseToken !== undefined && baseToken !== null) {
                localVarQueryParameter['baseToken'] = baseToken;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/giftcard/buyCode/token-limit',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * This API is for redeeming a Binance Gift Card
         * Once redeemed, the coins will be deposited in your funding wallet.
         *
         * Parameter code can be sent in two formats:
         * Plaintext
         * Encrypted
         *
         * Sending code in Encrypted format provides more security than sending it as a plaintext. To send card code in encrypted format the following steps must be followed:
         * Fetch RSA public key from api stated below.
         * Use the below algorithm to encrypt the card code using the RSA public key fetched above: `RSA/ECB/OAEPWithSHA-256AndMGF1Padding`
         **A sample code snippet (JAVA) is stated below for reference, the same approach can be used for different languages like C#, PERL, PYTHON, SHELL etc.:**
         *
         * Weight: 1
         *
         * @summary Redeem a Binance Gift Card(USER_DATA)
         * @param {string} code Redemption code of Binance Gift Card to be redeemed, supports both Plaintext & Encrypted code.
         * @param {string} [externalUid] Each external unique ID represents a unique user on the partner platform. The function helps you to identify the redemption behavior of different users, such as redemption frequency and amount. It also helps risk and limit control of a single account, such as daily limit on redemption volume, frequency, and incorrect number of entries. This will also prevent a single user account reach the partner's daily redemption limits. We strongly recommend you to use this feature and transfer us the User ID of your users if you have different users redeeming Binance Gift Cards on your platform. To protect user data privacy, you may choose to transfer the user id in any desired format (max. 400 characters).
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        redeemABinanceGiftCard: async (
            code: string,
            externalUid?: string,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('redeemABinanceGiftCard', 'code', code);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (code !== undefined && code !== null) {
                localVarQueryParameter['code'] = code;
            }

            if (externalUid !== undefined && externalUid !== null) {
                localVarQueryParameter['externalUid'] = externalUid;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/giftcard/redeemCode',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * This API is for verifying whether the Binance Gift Card is valid or not by entering Gift Card Number.
         *
         **Please note that if you enter the wrong Gift Card Number 5 times within an hour, you will no longer be able to verify any Gift Card Number for that hour.**
         *
         * Weight: 1
         *
         * @summary Verify Binance Gift Card by Gift Card Number(USER_DATA)
         * @param {string} referenceNo Enter the Gift Card Number
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        verifyBinanceGiftCardByGiftCardNumber: async (
            referenceNo: string,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            // verify required parameter 'referenceNo' is not null or undefined
            assertParamExists('verifyBinanceGiftCardByGiftCardNumber', 'referenceNo', referenceNo);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (referenceNo !== undefined && referenceNo !== null) {
                localVarQueryParameter['referenceNo'] = referenceNo;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/giftcard/verify',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
    };
};

/**
 * MarketDataApi - interface
 * @interface MarketDataApi
 */
export interface MarketDataApiInterface {
    /**
     * * This API is for creating a dual-token ( stablecoin-denominated) Binance Gift Card. You may create a gift card using USDT as baseToken, that is redeemable to another designated token (faceToken). For example, you can create a fixed-value BTC gift card and pay with 100 USDT plus 1 USDT fee. This gift card can keep the value fixed at 100 USDT before redemption, and will be redeemable to BTC equivalent to 100 USDT upon redemption.
     * Once successfully created, the amount of baseToken (e.g. USDT) in the fixed-value gift card along with the fee would be deducted from your funding wallet.
     *
     *
     * To get started with, please make sure:
     * You have a Binance account
     * You have passed KYB
     * You have a sufﬁcient balance(Gift Card amount and fee amount) in your Binance funding wallet
     * You need Enable Withdrawals for the API Key which requests this endpoint.
     *
     * Weight: 1
     *
     * @summary Create a dual-token gift card(fixed value, discount feature)(TRADE)
     * @param {CreateADualTokenGiftCardRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApiInterface
     */
    createADualTokenGiftCard(
        requestParameters: CreateADualTokenGiftCardRequest
    ): Promise<RestApiResponse<CreateADualTokenGiftCardResponse>>;
    /**
     * This API is for creating a Binance Gift Card.
     *
     * To get started with, please make sure:
     *
     * You have a Binance account
     * You have passed KYB
     * You have a sufﬁcient balance(Gift Card amount and fee amount) in your Binance funding wallet
     * You need `Enable Withdrawals` for the API Key which requests this endpoint.
     *
     * Weight: 1
     *
     * @summary Create a single-token gift card (USER_DATA)
     * @param {CreateASingleTokenGiftCardRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApiInterface
     */
    createASingleTokenGiftCard(
        requestParameters: CreateASingleTokenGiftCardRequest
    ): Promise<RestApiResponse<CreateASingleTokenGiftCardResponse>>;
    /**
     * This API is for fetching the RSA Public Key.
     * This RSA Public key will be used to encrypt the card code.
     *
     **Please note that the RSA Public key fetched is valid only for the current day.**
     *
     * Weight: 1
     *
     * @summary Fetch RSA Public Key(USER_DATA)
     * @param {FetchRsaPublicKeyRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApiInterface
     */
    fetchRsaPublicKey(
        requestParameters?: FetchRsaPublicKeyRequest
    ): Promise<RestApiResponse<FetchRsaPublicKeyResponse>>;
    /**
     * This API is to help you verify which tokens are available for you to create Stablecoin-Denominated gift cards as mentioned in section 2 and its’ limitation.
     *
     * Weight: 1
     *
     * @summary Fetch Token Limit(USER_DATA)
     * @param {FetchTokenLimitRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApiInterface
     */
    fetchTokenLimit(
        requestParameters: FetchTokenLimitRequest
    ): Promise<RestApiResponse<FetchTokenLimitResponse>>;
    /**
     * This API is for redeeming a Binance Gift Card
     * Once redeemed, the coins will be deposited in your funding wallet.
     *
     * Parameter code can be sent in two formats:
     * Plaintext
     * Encrypted
     *
     * Sending code in Encrypted format provides more security than sending it as a plaintext. To send card code in encrypted format the following steps must be followed:
     * Fetch RSA public key from api stated below.
     * Use the below algorithm to encrypt the card code using the RSA public key fetched above: `RSA/ECB/OAEPWithSHA-256AndMGF1Padding`
     **A sample code snippet (JAVA) is stated below for reference, the same approach can be used for different languages like C#, PERL, PYTHON, SHELL etc.:**
     *
     * Weight: 1
     *
     * @summary Redeem a Binance Gift Card(USER_DATA)
     * @param {RedeemABinanceGiftCardRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApiInterface
     */
    redeemABinanceGiftCard(
        requestParameters: RedeemABinanceGiftCardRequest
    ): Promise<RestApiResponse<RedeemABinanceGiftCardResponse>>;
    /**
     * This API is for verifying whether the Binance Gift Card is valid or not by entering Gift Card Number.
     *
     **Please note that if you enter the wrong Gift Card Number 5 times within an hour, you will no longer be able to verify any Gift Card Number for that hour.**
     *
     * Weight: 1
     *
     * @summary Verify Binance Gift Card by Gift Card Number(USER_DATA)
     * @param {VerifyBinanceGiftCardByGiftCardNumberRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApiInterface
     */
    verifyBinanceGiftCardByGiftCardNumber(
        requestParameters: VerifyBinanceGiftCardByGiftCardNumberRequest
    ): Promise<RestApiResponse<VerifyBinanceGiftCardByGiftCardNumberResponse>>;
}

/**
 * Request parameters for createADualTokenGiftCard operation in MarketDataApi.
 * @interface CreateADualTokenGiftCardRequest
 */
export interface CreateADualTokenGiftCardRequest {
    /**
     * The token you want to pay, example: BUSD
     * @type {string}
     * @memberof MarketDataApiCreateADualTokenGiftCard
     */
    readonly baseToken: string;

    /**
     * The token you want to buy, example: BNB. If faceToken = baseToken, it's the same as createCode endpoint.
     * @type {string}
     * @memberof MarketDataApiCreateADualTokenGiftCard
     */
    readonly faceToken: string;

    /**
     * The base token asset quantity, example : 1.002
     * @type {number}
     * @memberof MarketDataApiCreateADualTokenGiftCard
     */
    readonly baseTokenAmount: number;

    /**
     *
     * @type {number}
     * @memberof MarketDataApiCreateADualTokenGiftCard
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for createASingleTokenGiftCard operation in MarketDataApi.
 * @interface CreateASingleTokenGiftCardRequest
 */
export interface CreateASingleTokenGiftCardRequest {
    /**
     * The token type contained in the Binance Gift Card
     * @type {string}
     * @memberof MarketDataApiCreateASingleTokenGiftCard
     */
    readonly token: string;

    /**
     * The amount of the token contained in the Binance Gift Card
     * @type {number}
     * @memberof MarketDataApiCreateASingleTokenGiftCard
     */
    readonly amount: number;

    /**
     *
     * @type {number}
     * @memberof MarketDataApiCreateASingleTokenGiftCard
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for fetchRsaPublicKey operation in MarketDataApi.
 * @interface FetchRsaPublicKeyRequest
 */
export interface FetchRsaPublicKeyRequest {
    /**
     *
     * @type {number}
     * @memberof MarketDataApiFetchRsaPublicKey
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for fetchTokenLimit operation in MarketDataApi.
 * @interface FetchTokenLimitRequest
 */
export interface FetchTokenLimitRequest {
    /**
     * The token you want to pay, example: BUSD
     * @type {string}
     * @memberof MarketDataApiFetchTokenLimit
     */
    readonly baseToken: string;

    /**
     *
     * @type {number}
     * @memberof MarketDataApiFetchTokenLimit
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for redeemABinanceGiftCard operation in MarketDataApi.
 * @interface RedeemABinanceGiftCardRequest
 */
export interface RedeemABinanceGiftCardRequest {
    /**
     * Redemption code of Binance Gift Card to be redeemed, supports both Plaintext & Encrypted code.
     * @type {string}
     * @memberof MarketDataApiRedeemABinanceGiftCard
     */
    readonly code: string;

    /**
     * Each external unique ID represents a unique user on the partner platform. The function helps you to identify the redemption behavior of different users, such as redemption frequency and amount. It also helps risk and limit control of a single account, such as daily limit on redemption volume, frequency, and incorrect number of entries. This will also prevent a single user account reach the partner's daily redemption limits. We strongly recommend you to use this feature and transfer us the User ID of your users if you have different users redeeming Binance Gift Cards on your platform. To protect user data privacy, you may choose to transfer the user id in any desired format (max. 400 characters).
     * @type {string}
     * @memberof MarketDataApiRedeemABinanceGiftCard
     */
    readonly externalUid?: string;

    /**
     *
     * @type {number}
     * @memberof MarketDataApiRedeemABinanceGiftCard
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for verifyBinanceGiftCardByGiftCardNumber operation in MarketDataApi.
 * @interface VerifyBinanceGiftCardByGiftCardNumberRequest
 */
export interface VerifyBinanceGiftCardByGiftCardNumberRequest {
    /**
     * Enter the Gift Card Number
     * @type {string}
     * @memberof MarketDataApiVerifyBinanceGiftCardByGiftCardNumber
     */
    readonly referenceNo: string;

    /**
     *
     * @type {number}
     * @memberof MarketDataApiVerifyBinanceGiftCardByGiftCardNumber
     */
    readonly recvWindow?: number;
}

/**
 * MarketDataApi - object-oriented interface
 * @class MarketDataApi
 */
export class MarketDataApi implements MarketDataApiInterface {
    private readonly configuration: ConfigurationRestAPI;
    private localVarAxiosParamCreator;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.localVarAxiosParamCreator = MarketDataApiAxiosParamCreator(configuration);
    }

    /**
     * * This API is for creating a dual-token ( stablecoin-denominated) Binance Gift Card. You may create a gift card using USDT as baseToken, that is redeemable to another designated token (faceToken). For example, you can create a fixed-value BTC gift card and pay with 100 USDT plus 1 USDT fee. This gift card can keep the value fixed at 100 USDT before redemption, and will be redeemable to BTC equivalent to 100 USDT upon redemption.
     * Once successfully created, the amount of baseToken (e.g. USDT) in the fixed-value gift card along with the fee would be deducted from your funding wallet.
     *
     *
     * To get started with, please make sure:
     * You have a Binance account
     * You have passed KYB
     * You have a sufﬁcient balance(Gift Card amount and fee amount) in your Binance funding wallet
     * You need Enable Withdrawals for the API Key which requests this endpoint.
     *
     * Weight: 1
     *
     * @summary Create a dual-token gift card(fixed value, discount feature)(TRADE)
     * @param {CreateADualTokenGiftCardRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<CreateADualTokenGiftCardResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApi
     * @see {@link https://developers.binance.com/docs/gift_card/market-data/Create-a-dual-token-gift-card Binance API Documentation}
     */
    public async createADualTokenGiftCard(
        requestParameters: CreateADualTokenGiftCardRequest
    ): Promise<RestApiResponse<CreateADualTokenGiftCardResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.createADualTokenGiftCard(
            requestParameters?.baseToken,
            requestParameters?.faceToken,
            requestParameters?.baseTokenAmount,
            requestParameters?.recvWindow
        );
        return sendRequest<CreateADualTokenGiftCardResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * This API is for creating a Binance Gift Card.
     *
     * To get started with, please make sure:
     *
     * You have a Binance account
     * You have passed KYB
     * You have a sufﬁcient balance(Gift Card amount and fee amount) in your Binance funding wallet
     * You need `Enable Withdrawals` for the API Key which requests this endpoint.
     *
     * Weight: 1
     *
     * @summary Create a single-token gift card (USER_DATA)
     * @param {CreateASingleTokenGiftCardRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<CreateASingleTokenGiftCardResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApi
     * @see {@link https://developers.binance.com/docs/gift_card/market-data/Create-a-single-token-gift-card Binance API Documentation}
     */
    public async createASingleTokenGiftCard(
        requestParameters: CreateASingleTokenGiftCardRequest
    ): Promise<RestApiResponse<CreateASingleTokenGiftCardResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.createASingleTokenGiftCard(
            requestParameters?.token,
            requestParameters?.amount,
            requestParameters?.recvWindow
        );
        return sendRequest<CreateASingleTokenGiftCardResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * This API is for fetching the RSA Public Key.
     * This RSA Public key will be used to encrypt the card code.
     *
     **Please note that the RSA Public key fetched is valid only for the current day.**
     *
     * Weight: 1
     *
     * @summary Fetch RSA Public Key(USER_DATA)
     * @param {FetchRsaPublicKeyRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<FetchRsaPublicKeyResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApi
     * @see {@link https://developers.binance.com/docs/gift_card/market-data/Fetch-RSA-Public-Key Binance API Documentation}
     */
    public async fetchRsaPublicKey(
        requestParameters: FetchRsaPublicKeyRequest = {}
    ): Promise<RestApiResponse<FetchRsaPublicKeyResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.fetchRsaPublicKey(
            requestParameters?.recvWindow
        );
        return sendRequest<FetchRsaPublicKeyResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * This API is to help you verify which tokens are available for you to create Stablecoin-Denominated gift cards as mentioned in section 2 and its’ limitation.
     *
     * Weight: 1
     *
     * @summary Fetch Token Limit(USER_DATA)
     * @param {FetchTokenLimitRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<FetchTokenLimitResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApi
     * @see {@link https://developers.binance.com/docs/gift_card/market-data/Fetch-Token-Limit Binance API Documentation}
     */
    public async fetchTokenLimit(
        requestParameters: FetchTokenLimitRequest
    ): Promise<RestApiResponse<FetchTokenLimitResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.fetchTokenLimit(
            requestParameters?.baseToken,
            requestParameters?.recvWindow
        );
        return sendRequest<FetchTokenLimitResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * This API is for redeeming a Binance Gift Card
     * Once redeemed, the coins will be deposited in your funding wallet.
     *
     * Parameter code can be sent in two formats:
     * Plaintext
     * Encrypted
     *
     * Sending code in Encrypted format provides more security than sending it as a plaintext. To send card code in encrypted format the following steps must be followed:
     * Fetch RSA public key from api stated below.
     * Use the below algorithm to encrypt the card code using the RSA public key fetched above: `RSA/ECB/OAEPWithSHA-256AndMGF1Padding`
     **A sample code snippet (JAVA) is stated below for reference, the same approach can be used for different languages like C#, PERL, PYTHON, SHELL etc.:**
     *
     * Weight: 1
     *
     * @summary Redeem a Binance Gift Card(USER_DATA)
     * @param {RedeemABinanceGiftCardRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<RedeemABinanceGiftCardResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApi
     * @see {@link https://developers.binance.com/docs/gift_card/market-data/Redeem-a-Binance-Gift-Card Binance API Documentation}
     */
    public async redeemABinanceGiftCard(
        requestParameters: RedeemABinanceGiftCardRequest
    ): Promise<RestApiResponse<RedeemABinanceGiftCardResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.redeemABinanceGiftCard(
            requestParameters?.code,
            requestParameters?.externalUid,
            requestParameters?.recvWindow
        );
        return sendRequest<RedeemABinanceGiftCardResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * This API is for verifying whether the Binance Gift Card is valid or not by entering Gift Card Number.
     *
     **Please note that if you enter the wrong Gift Card Number 5 times within an hour, you will no longer be able to verify any Gift Card Number for that hour.**
     *
     * Weight: 1
     *
     * @summary Verify Binance Gift Card by Gift Card Number(USER_DATA)
     * @param {VerifyBinanceGiftCardByGiftCardNumberRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<VerifyBinanceGiftCardByGiftCardNumberResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApi
     * @see {@link https://developers.binance.com/docs/gift_card/market-data/Verify-Binance-Gift-Card-by-Gift-Card-Number Binance API Documentation}
     */
    public async verifyBinanceGiftCardByGiftCardNumber(
        requestParameters: VerifyBinanceGiftCardByGiftCardNumberRequest
    ): Promise<RestApiResponse<VerifyBinanceGiftCardByGiftCardNumberResponse>> {
        const localVarAxiosArgs =
            await this.localVarAxiosParamCreator.verifyBinanceGiftCardByGiftCardNumber(
                requestParameters?.referenceNo,
                requestParameters?.recvWindow
            );
        return sendRequest<VerifyBinanceGiftCardByGiftCardNumberResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }
}
