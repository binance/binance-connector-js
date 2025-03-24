/**
 * Binance Public Algo REST API
 *
 * OpenAPI Specification for the Binance Public Algo REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ConfigurationRestAPI, RestApiResponse, sendRequest } from '@binance/common';
import { FutureAlgoApi } from './modules/future-algo-api';
import { SpotAlgoApi } from './modules/spot-algo-api';

import type {
    CancelAlgoOrderFutureAlgoRequest,
    QueryCurrentAlgoOpenOrdersFutureAlgoRequest,
    QueryHistoricalAlgoOrdersFutureAlgoRequest,
    QuerySubOrdersFutureAlgoRequest,
    TimeWeightedAveragePriceFutureAlgoRequest,
    VolumeParticipationFutureAlgoRequest,
} from './modules/future-algo-api';
import type {
    CancelAlgoOrderSpotAlgoRequest,
    QueryCurrentAlgoOpenOrdersSpotAlgoRequest,
    QueryHistoricalAlgoOrdersSpotAlgoRequest,
    QuerySubOrdersSpotAlgoRequest,
    TimeWeightedAveragePriceSpotAlgoRequest,
} from './modules/spot-algo-api';

import type {
    CancelAlgoOrderFutureAlgoResponse,
    QueryCurrentAlgoOpenOrdersFutureAlgoResponse,
    QueryHistoricalAlgoOrdersFutureAlgoResponse,
    QuerySubOrdersFutureAlgoResponse,
    TimeWeightedAveragePriceFutureAlgoResponse,
    VolumeParticipationFutureAlgoResponse,
} from './types';
import type {
    CancelAlgoOrderSpotAlgoResponse,
    QueryCurrentAlgoOpenOrdersSpotAlgoResponse,
    QueryHistoricalAlgoOrdersSpotAlgoResponse,
    QuerySubOrdersSpotAlgoResponse,
    TimeWeightedAveragePriceSpotAlgoResponse,
} from './types';

export class RestAPI {
    private configuration: ConfigurationRestAPI;
    private futureAlgoApi: FutureAlgoApi;
    private spotAlgoApi: SpotAlgoApi;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.futureAlgoApi = new FutureAlgoApi(configuration);
        this.spotAlgoApi = new SpotAlgoApi(configuration);
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
     * Cancel an active order.
     *
     * You need to enable `Futures Trading Permission` for the api key which requests this endpoint.
     * Base URL: https://api.binance.com
     *
     * Weight: 1
     *
     * @summary Cancel Algo Order(TRADE)
     * @param {CancelAlgoOrderFutureAlgoRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<CancelAlgoOrderFutureAlgoResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/algo/future-algo/Cancel-Algo-Order Binance API Documentation}
     */
    cancelAlgoOrderFutureAlgo(
        requestParameters: CancelAlgoOrderFutureAlgoRequest
    ): Promise<RestApiResponse<CancelAlgoOrderFutureAlgoResponse>> {
        return this.futureAlgoApi.cancelAlgoOrderFutureAlgo(requestParameters);
    }

    /**
     * Query Current Algo Open Orders
     *
     * You need to enable `Futures Trading Permission` for the api key which requests this endpoint.
     * Base URL: https://api.binance.com
     *
     * Weight: 1
     *
     * @summary Query Current Algo Open Orders(USER_DATA)
     * @param {QueryCurrentAlgoOpenOrdersFutureAlgoRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<QueryCurrentAlgoOpenOrdersFutureAlgoResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/algo/future-algo/Query-Current-Algo-Open-Orders Binance API Documentation}
     */
    queryCurrentAlgoOpenOrdersFutureAlgo(
        requestParameters: QueryCurrentAlgoOpenOrdersFutureAlgoRequest = {}
    ): Promise<RestApiResponse<QueryCurrentAlgoOpenOrdersFutureAlgoResponse>> {
        return this.futureAlgoApi.queryCurrentAlgoOpenOrdersFutureAlgo(requestParameters);
    }

    /**
     * Query Historical Algo Order
     *
     * You need to enable `Futures Trading Permission` for the api key which requests this endpoint.
     * Base URL: https://api.binance.com
     *
     * Weight: 1
     *
     * @summary Query Historical Algo Orders(USER_DATA)
     * @param {QueryHistoricalAlgoOrdersFutureAlgoRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<QueryHistoricalAlgoOrdersFutureAlgoResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/algo/future-algo/Query-Historical-Algo-Orders Binance API Documentation}
     */
    queryHistoricalAlgoOrdersFutureAlgo(
        requestParameters: QueryHistoricalAlgoOrdersFutureAlgoRequest = {}
    ): Promise<RestApiResponse<QueryHistoricalAlgoOrdersFutureAlgoResponse>> {
        return this.futureAlgoApi.queryHistoricalAlgoOrdersFutureAlgo(requestParameters);
    }

    /**
     * Get respective sub orders for a specified algoId
     *
     * You need to enable `Futures Trading Permission` for the api key which requests this endpoint.
     * Base URL: https://api.binance.com
     *
     * Weight: 1
     *
     * @summary Query Sub Orders(USER_DATA)
     * @param {QuerySubOrdersFutureAlgoRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<QuerySubOrdersFutureAlgoResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/algo/future-algo/Query-Sub-Orders Binance API Documentation}
     */
    querySubOrdersFutureAlgo(
        requestParameters: QuerySubOrdersFutureAlgoRequest
    ): Promise<RestApiResponse<QuerySubOrdersFutureAlgoResponse>> {
        return this.futureAlgoApi.querySubOrdersFutureAlgo(requestParameters);
    }

    /**
     * Send in a Twap new order.
     * Only support on USDⓈ-M Contracts.
     *
     * Total Algo open orders max allowed: `30` orders.
     * Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi.
     * Receiving `"success": true` does not mean that your order will be executed. Please use the query order endpoints（`GET sapi/v1/algo/futures/openOrders` or `GET sapi/v1/algo/futures/historicalOrders`） to check the order status.
     * For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive `"success": true`, but the order status will be `expired` after we check it.
     * `quantity` * 60 / `duration` should be larger than minQty
     * `duration` cannot be less than 5 mins or more than 24 hours.
     * For delivery contracts, TWAP end time should be one hour earlier than the delivery time of the symbol.
     * You need to enable `Futures Trading Permission` for the api key which requests this endpoint.
     * Base URL: https://api.binance.com
     *
     * Weight: 3000
     *
     * @summary Time-Weighted Average Price(Twap) New Order(TRADE)
     * @param {TimeWeightedAveragePriceFutureAlgoRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<TimeWeightedAveragePriceFutureAlgoResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/algo/future-algo/Time-Weighted-Average-Price-New-Order Binance API Documentation}
     */
    timeWeightedAveragePriceFutureAlgo(
        requestParameters: TimeWeightedAveragePriceFutureAlgoRequest
    ): Promise<RestApiResponse<TimeWeightedAveragePriceFutureAlgoResponse>> {
        return this.futureAlgoApi.timeWeightedAveragePriceFutureAlgo(requestParameters);
    }

    /**
     * Send in a VP new order.
     * Only support on USDⓈ-M Contracts.
     *
     * Total Algo open orders max allowed: `10` orders.
     * Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi.
     * Receiving `"success": true` does not mean that your order will be executed. Please use the query order endpoints（`GET sapi/v1/algo/futures/openOrders` or `GET sapi/v1/algo/futures/historicalOrders`） to check the order status.
     * For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive `"success": true`, but the order status will be `expired` after we check it.
     * You need to enable `Futures Trading Permission` for the api key which requests this endpoint.
     * Base URL: https://api.binance.com
     *
     * Weight: 300
     *
     * @summary Volume Participation(VP) New Order (TRADE)
     * @param {VolumeParticipationFutureAlgoRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<VolumeParticipationFutureAlgoResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/algo/future-algo/Volume-Participation-New-Order Binance API Documentation}
     */
    volumeParticipationFutureAlgo(
        requestParameters: VolumeParticipationFutureAlgoRequest
    ): Promise<RestApiResponse<VolumeParticipationFutureAlgoResponse>> {
        return this.futureAlgoApi.volumeParticipationFutureAlgo(requestParameters);
    }

    /**
     * Cancel an open TWAP order
     *
     * Weight: 1
     *
     * @summary Cancel Algo Order(TRADE)
     * @param {CancelAlgoOrderSpotAlgoRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<CancelAlgoOrderSpotAlgoResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/algo/spot-algo/Cancel-Algo-Order Binance API Documentation}
     */
    cancelAlgoOrderSpotAlgo(
        requestParameters: CancelAlgoOrderSpotAlgoRequest
    ): Promise<RestApiResponse<CancelAlgoOrderSpotAlgoResponse>> {
        return this.spotAlgoApi.cancelAlgoOrderSpotAlgo(requestParameters);
    }

    /**
     * Get all open SPOT TWAP orders
     *
     * Weight: 1
     *
     * @summary Query Current Algo Open Orders(USER_DATA)
     * @param {QueryCurrentAlgoOpenOrdersSpotAlgoRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<QueryCurrentAlgoOpenOrdersSpotAlgoResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/algo/spot-algo/Query-Current-Algo-Open-Orders Binance API Documentation}
     */
    queryCurrentAlgoOpenOrdersSpotAlgo(
        requestParameters: QueryCurrentAlgoOpenOrdersSpotAlgoRequest = {}
    ): Promise<RestApiResponse<QueryCurrentAlgoOpenOrdersSpotAlgoResponse>> {
        return this.spotAlgoApi.queryCurrentAlgoOpenOrdersSpotAlgo(requestParameters);
    }

    /**
     * Get all historical SPOT TWAP orders
     *
     * Weight: 1
     *
     * @summary Query Historical Algo Orders(USER_DATA)
     * @param {QueryHistoricalAlgoOrdersSpotAlgoRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<QueryHistoricalAlgoOrdersSpotAlgoResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/algo/spot-algo/Query-Historical-Algo-Orders Binance API Documentation}
     */
    queryHistoricalAlgoOrdersSpotAlgo(
        requestParameters: QueryHistoricalAlgoOrdersSpotAlgoRequest = {}
    ): Promise<RestApiResponse<QueryHistoricalAlgoOrdersSpotAlgoResponse>> {
        return this.spotAlgoApi.queryHistoricalAlgoOrdersSpotAlgo(requestParameters);
    }

    /**
     * Get respective sub orders for a specified algoId
     *
     * Weight: 1
     *
     * @summary Query Sub Orders(USER_DATA)
     * @param {QuerySubOrdersSpotAlgoRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<QuerySubOrdersSpotAlgoResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/algo/spot-algo/Query-Sub-Orders Binance API Documentation}
     */
    querySubOrdersSpotAlgo(
        requestParameters: QuerySubOrdersSpotAlgoRequest
    ): Promise<RestApiResponse<QuerySubOrdersSpotAlgoResponse>> {
        return this.spotAlgoApi.querySubOrdersSpotAlgo(requestParameters);
    }

    /**
     * Place a new spot TWAP order with Algo service.
     *
     * Total Algo open orders max allowed: `20` orders.
     *
     * Weight: 3000
     *
     * @summary Time-Weighted Average Price(Twap) New Order(TRADE)
     * @param {TimeWeightedAveragePriceSpotAlgoRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<TimeWeightedAveragePriceSpotAlgoResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/algo/spot-algo/Time-Weighted-Average-Price-New-Order Binance API Documentation}
     */
    timeWeightedAveragePriceSpotAlgo(
        requestParameters: TimeWeightedAveragePriceSpotAlgoRequest
    ): Promise<RestApiResponse<TimeWeightedAveragePriceSpotAlgoResponse>> {
        return this.spotAlgoApi.timeWeightedAveragePriceSpotAlgo(requestParameters);
    }
}
