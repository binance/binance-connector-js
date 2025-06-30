import {
    buildUserAgent,
    ConfigurationRestAPI,
    ConfigurationWebsocketStreams,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_WS_STREAMS_PROD_URL,
} from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

import { WebsocketStreams } from './websocket-streams';

export interface ConfigurationDerivativesTradingPortfolioMarginPro {
    configurationRestAPI?: ConfigurationRestAPI;

    configurationWebsocketStreams?: ConfigurationWebsocketStreams;
}

export class DerivativesTradingPortfolioMarginPro {
    public restAPI!: RestAPI;

    public websocketStreams!: WebsocketStreams;

    constructor(config: ConfigurationDerivativesTradingPortfolioMarginPro) {
        const userAgent = buildUserAgent(name, version);

        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(
                config.configurationRestAPI
            ) as ConfigurationRestAPI & {
                baseOptions: Record<string, unknown>;
            };
            configRestAPI.basePath =
                configRestAPI.basePath ||
                DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': userAgent,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
        if (config?.configurationWebsocketStreams) {
            const configWebsocketStreams = new ConfigurationWebsocketStreams(
                config.configurationWebsocketStreams
            ) as ConfigurationWebsocketStreams & {
                userAgent: string;
            };
            configWebsocketStreams.wsURL =
                configWebsocketStreams.wsURL ||
                DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_WS_STREAMS_PROD_URL;
            configWebsocketStreams.userAgent = userAgent;
            this.websocketStreams = new WebsocketStreams(configWebsocketStreams);
        }
    }
}
