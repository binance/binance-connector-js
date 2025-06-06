/**
 * Binance Staking REST API
 *
 * OpenAPI Specification for the Binance Staking REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ConfigurationRestAPI, RestApiResponse, sendRequest } from '@binance/common';
import { EthStakingApi } from './modules/eth-staking-api';
import { SolStakingApi } from './modules/sol-staking-api';

import type {
    EthStakingAccountRequest,
    GetCurrentEthStakingQuotaRequest,
    GetEthRedemptionHistoryRequest,
    GetEthStakingHistoryRequest,
    GetWbethRateHistoryRequest,
    GetWbethRewardsHistoryRequest,
    GetWbethUnwrapHistoryRequest,
    GetWbethWrapHistoryRequest,
    RedeemEthRequest,
    SubscribeEthStakingRequest,
    WrapBethRequest,
} from './modules/eth-staking-api';
import type {
    ClaimBoostRewardsRequest,
    GetBnsolRateHistoryRequest,
    GetBnsolRewardsHistoryRequest,
    GetBoostRewardsHistoryRequest,
    GetSolRedemptionHistoryRequest,
    GetSolStakingHistoryRequest,
    GetSolStakingQuotaDetailsRequest,
    GetUnclaimedRewardsRequest,
    RedeemSolRequest,
    SolStakingAccountRequest,
    SubscribeSolStakingRequest,
} from './modules/sol-staking-api';

import type {
    EthStakingAccountResponse,
    GetCurrentEthStakingQuotaResponse,
    GetEthRedemptionHistoryResponse,
    GetEthStakingHistoryResponse,
    GetWbethRateHistoryResponse,
    GetWbethRewardsHistoryResponse,
    GetWbethUnwrapHistoryResponse,
    GetWbethWrapHistoryResponse,
    RedeemEthResponse,
    SubscribeEthStakingResponse,
    WrapBethResponse,
} from './types';
import type {
    ClaimBoostRewardsResponse,
    GetBnsolRateHistoryResponse,
    GetBnsolRewardsHistoryResponse,
    GetBoostRewardsHistoryResponse,
    GetSolRedemptionHistoryResponse,
    GetSolStakingHistoryResponse,
    GetSolStakingQuotaDetailsResponse,
    GetUnclaimedRewardsResponse,
    RedeemSolResponse,
    SolStakingAccountResponse,
    SubscribeSolStakingResponse,
} from './types';

export class RestAPI {
    private configuration: ConfigurationRestAPI;
    private ethStakingApi: EthStakingApi;
    private solStakingApi: SolStakingApi;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.ethStakingApi = new EthStakingApi(configuration);
        this.solStakingApi = new SolStakingApi(configuration);
    }

    /**
     * Generic function to send a request.
     * @param endpoint - The API endpoint to call.
     * @param method - HTTP method to use (GET, POST, DELETE, etc.).
     * @param params - Query parameters for the request.
     *
     * @returns A promise resolving to the response data object.
     */
    sendRequest<T>(
        endpoint: string,
        method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
        params: Record<string, unknown> = {}
    ): Promise<RestApiResponse<T>> {
        return sendRequest<T>(this.configuration, endpoint, method, params, undefined);
    }

    /**
     * Generic function to send a signed request.
     * @param endpoint - The API endpoint to call.
     * @param method - HTTP method to use (GET, POST, DELETE, etc.).
     * @param params - Query parameters for the request.
     *
     * @returns A promise resolving to the response data object.
     */
    sendSignedRequest<T>(
        endpoint: string,
        method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
        params: Record<string, unknown> = {}
    ): Promise<RestApiResponse<T>> {
        return sendRequest<T>(this.configuration, endpoint, method, params, undefined, {
            isSigned: true,
        });
    }

    /**
     * ETH Staking account
     *
     * Weight: 150
     *
     * @summary ETH Staking account(USER_DATA)
     * @param {EthStakingAccountRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<EthStakingAccountResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/eth-staking/account/ETH-Staking-account Binance API Documentation}
     */
    ethStakingAccount(
        requestParameters: EthStakingAccountRequest = {}
    ): Promise<RestApiResponse<EthStakingAccountResponse>> {
        return this.ethStakingApi.ethStakingAccount(requestParameters);
    }

    /**
     * Get current ETH staking quota
     *
     * Weight: 150
     *
     * @summary Get current ETH staking quota(USER_DATA)
     * @param {GetCurrentEthStakingQuotaRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetCurrentEthStakingQuotaResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/eth-staking/account/Get-current-ETH-staking-quota Binance API Documentation}
     */
    getCurrentEthStakingQuota(
        requestParameters: GetCurrentEthStakingQuotaRequest = {}
    ): Promise<RestApiResponse<GetCurrentEthStakingQuotaResponse>> {
        return this.ethStakingApi.getCurrentEthStakingQuota(requestParameters);
    }

    /**
     * Get ETH redemption history
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get ETH redemption history(USER_DATA)
     * @param {GetEthRedemptionHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetEthRedemptionHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/eth-staking/history/Get-ETH-redemption-history Binance API Documentation}
     */
    getEthRedemptionHistory(
        requestParameters: GetEthRedemptionHistoryRequest = {}
    ): Promise<RestApiResponse<GetEthRedemptionHistoryResponse>> {
        return this.ethStakingApi.getEthRedemptionHistory(requestParameters);
    }

    /**
     * Get ETH staking history
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get ETH staking history(USER_DATA)
     * @param {GetEthStakingHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetEthStakingHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/eth-staking/history/Get-ETH-staking-history Binance API Documentation}
     */
    getEthStakingHistory(
        requestParameters: GetEthStakingHistoryRequest = {}
    ): Promise<RestApiResponse<GetEthStakingHistoryResponse>> {
        return this.ethStakingApi.getEthStakingHistory(requestParameters);
    }

    /**
     * Get WBETH Rate History
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get WBETH Rate History(USER_DATA)
     * @param {GetWbethRateHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetWbethRateHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/eth-staking/history/Get-BETH-Rate-History Binance API Documentation}
     */
    getWbethRateHistory(
        requestParameters: GetWbethRateHistoryRequest = {}
    ): Promise<RestApiResponse<GetWbethRateHistoryResponse>> {
        return this.ethStakingApi.getWbethRateHistory(requestParameters);
    }

    /**
     * Get WBETH rewards history
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get WBETH rewards history(USER_DATA)
     * @param {GetWbethRewardsHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetWbethRewardsHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/eth-staking/history/Get-WBETH-rewards-history Binance API Documentation}
     */
    getWbethRewardsHistory(
        requestParameters: GetWbethRewardsHistoryRequest = {}
    ): Promise<RestApiResponse<GetWbethRewardsHistoryResponse>> {
        return this.ethStakingApi.getWbethRewardsHistory(requestParameters);
    }

    /**
     * Get WBETH unwrap history
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get WBETH unwrap history(USER_DATA)
     * @param {GetWbethUnwrapHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetWbethUnwrapHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/eth-staking/history/Get-WBETH-unwrap-history Binance API Documentation}
     */
    getWbethUnwrapHistory(
        requestParameters: GetWbethUnwrapHistoryRequest = {}
    ): Promise<RestApiResponse<GetWbethUnwrapHistoryResponse>> {
        return this.ethStakingApi.getWbethUnwrapHistory(requestParameters);
    }

    /**
     * Get WBETH wrap history
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get WBETH wrap history(USER_DATA)
     * @param {GetWbethWrapHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetWbethWrapHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/eth-staking/history/Get-WBETH-wrap-history Binance API Documentation}
     */
    getWbethWrapHistory(
        requestParameters: GetWbethWrapHistoryRequest = {}
    ): Promise<RestApiResponse<GetWbethWrapHistoryResponse>> {
        return this.ethStakingApi.getWbethWrapHistory(requestParameters);
    }

    /**
     * Redeem WBETH or BETH and get ETH
     *
     * You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.
     *
     * Weight: 150
     *
     * @summary Redeem ETH(TRADE)
     * @param {RedeemEthRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<RedeemEthResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/eth-staking/staking/Redeem-ETH Binance API Documentation}
     */
    redeemEth(requestParameters: RedeemEthRequest): Promise<RestApiResponse<RedeemEthResponse>> {
        return this.ethStakingApi.redeemEth(requestParameters);
    }

    /**
     * Subscribe ETH Staking
     *
     * You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.
     *
     * Weight: 150
     *
     * @summary Subscribe ETH Staking(TRADE)
     * @param {SubscribeEthStakingRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<SubscribeEthStakingResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/eth-staking/staking/Subscribe-ETH-Staking Binance API Documentation}
     */
    subscribeEthStaking(
        requestParameters: SubscribeEthStakingRequest
    ): Promise<RestApiResponse<SubscribeEthStakingResponse>> {
        return this.ethStakingApi.subscribeEthStaking(requestParameters);
    }

    /**
     * Wrap BETH
     *
     * You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.
     *
     * Weight: 150
     *
     * @summary Wrap BETH(TRADE)
     * @param {WrapBethRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<WrapBethResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/eth-staking/staking/Wrap-BETH Binance API Documentation}
     */
    wrapBeth(requestParameters: WrapBethRequest): Promise<RestApiResponse<WrapBethResponse>> {
        return this.ethStakingApi.wrapBeth(requestParameters);
    }

    /**
     * Claim Boost APR Airdrop Rewards
     *
     * You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.
     *
     * Weight: 150
     *
     * @summary Claim Boost Rewards(TRADE)
     * @param {ClaimBoostRewardsRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<ClaimBoostRewardsResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/sol-staking/staking/Claim-Boost-Rewards Binance API Documentation}
     */
    claimBoostRewards(
        requestParameters: ClaimBoostRewardsRequest = {}
    ): Promise<RestApiResponse<ClaimBoostRewardsResponse>> {
        return this.solStakingApi.claimBoostRewards(requestParameters);
    }

    /**
     * Get BNSOL Rate History
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get BNSOL Rate History(USER_DATA)
     * @param {GetBnsolRateHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetBnsolRateHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/sol-staking/history/Get-BNSOL-Rate-History Binance API Documentation}
     */
    getBnsolRateHistory(
        requestParameters: GetBnsolRateHistoryRequest = {}
    ): Promise<RestApiResponse<GetBnsolRateHistoryResponse>> {
        return this.solStakingApi.getBnsolRateHistory(requestParameters);
    }

    /**
     * Get BNSOL rewards history
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get BNSOL rewards history(USER_DATA)
     * @param {GetBnsolRewardsHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetBnsolRewardsHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/sol-staking/history/Get-BNSOL-rewards-history Binance API Documentation}
     */
    getBnsolRewardsHistory(
        requestParameters: GetBnsolRewardsHistoryRequest = {}
    ): Promise<RestApiResponse<GetBnsolRewardsHistoryResponse>> {
        return this.solStakingApi.getBnsolRewardsHistory(requestParameters);
    }

    /**
     * Get Boost rewards history
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get Boost Rewards History(USER_DATA)
     * @param {GetBoostRewardsHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetBoostRewardsHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/sol-staking/history/Get-Boost-Rewards-History Binance API Documentation}
     */
    getBoostRewardsHistory(
        requestParameters: GetBoostRewardsHistoryRequest
    ): Promise<RestApiResponse<GetBoostRewardsHistoryResponse>> {
        return this.solStakingApi.getBoostRewardsHistory(requestParameters);
    }

    /**
     * Get SOL redemption history
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get SOL redemption history(USER_DATA)
     * @param {GetSolRedemptionHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetSolRedemptionHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/sol-staking/history/Get-SOL-redemption-history Binance API Documentation}
     */
    getSolRedemptionHistory(
        requestParameters: GetSolRedemptionHistoryRequest = {}
    ): Promise<RestApiResponse<GetSolRedemptionHistoryResponse>> {
        return this.solStakingApi.getSolRedemptionHistory(requestParameters);
    }

    /**
     * Get SOL staking history
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get SOL staking history(USER_DATA)
     * @param {GetSolStakingHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetSolStakingHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/sol-staking/history/Get-SOL-staking-history Binance API Documentation}
     */
    getSolStakingHistory(
        requestParameters: GetSolStakingHistoryRequest = {}
    ): Promise<RestApiResponse<GetSolStakingHistoryResponse>> {
        return this.solStakingApi.getSolStakingHistory(requestParameters);
    }

    /**
     * Get SOL staking quota
     *
     * Weight: 150
     *
     * @summary Get SOL staking quota details(USER_DATA)
     * @param {GetSolStakingQuotaDetailsRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetSolStakingQuotaDetailsResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/sol-staking/account/Get-SOL-staking-quota-details Binance API Documentation}
     */
    getSolStakingQuotaDetails(
        requestParameters: GetSolStakingQuotaDetailsRequest = {}
    ): Promise<RestApiResponse<GetSolStakingQuotaDetailsResponse>> {
        return this.solStakingApi.getSolStakingQuotaDetails(requestParameters);
    }

    /**
     * Get Unclaimed rewards
     *
     * The time between `startTime` and `endTime` cannot be longer than 3 months.
     * If `startTime` and `endTime` are both not sent, then the last 30 days' data will be returned.
     * If `startTime` is sent but `endTime` is not sent, the next 30 days' data beginning from `startTime` will be returned.
     * If `endTime` is sent but `startTime` is not sent, the 30 days' data before `endTime` will be returned.
     *
     * Weight: 150
     *
     * @summary Get Unclaimed Rewards(USER_DATA)
     * @param {GetUnclaimedRewardsRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetUnclaimedRewardsResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/sol-staking/history/Get-Unclaimed-Rewards Binance API Documentation}
     */
    getUnclaimedRewards(
        requestParameters: GetUnclaimedRewardsRequest = {}
    ): Promise<RestApiResponse<GetUnclaimedRewardsResponse>> {
        return this.solStakingApi.getUnclaimedRewards(requestParameters);
    }

    /**
     * Redeem BNSOL get SOL
     *
     * You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.
     *
     * Weight: 150
     *
     * @summary Redeem SOL(TRADE)
     * @param {RedeemSolRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<RedeemSolResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/sol-staking/staking/Redeem-SOL Binance API Documentation}
     */
    redeemSol(requestParameters: RedeemSolRequest): Promise<RestApiResponse<RedeemSolResponse>> {
        return this.solStakingApi.redeemSol(requestParameters);
    }

    /**
     * SOL Staking account
     *
     * Weight: 150
     *
     * @summary SOL Staking account(USER_DATA)
     * @param {SolStakingAccountRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<SolStakingAccountResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/sol-staking/account/SOL-Staking-account Binance API Documentation}
     */
    solStakingAccount(
        requestParameters: SolStakingAccountRequest = {}
    ): Promise<RestApiResponse<SolStakingAccountResponse>> {
        return this.solStakingApi.solStakingAccount(requestParameters);
    }

    /**
     * Subscribe SOL Staking
     *
     * You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.
     *
     * Weight: 150
     *
     * @summary Subscribe SOL Staking(TRADE)
     * @param {SubscribeSolStakingRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<SubscribeSolStakingResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/staking/sol-staking/staking/Subscribe-SOL-Staking Binance API Documentation}
     */
    subscribeSolStaking(
        requestParameters: SubscribeSolStakingRequest
    ): Promise<RestApiResponse<SubscribeSolStakingResponse>> {
        return this.solStakingApi.subscribeSolStaking(requestParameters);
    }
}
