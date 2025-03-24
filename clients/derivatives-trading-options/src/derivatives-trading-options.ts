import { platform, arch } from 'os';
import {
    ConfigurationRestAPI,
    ConfigurationWebsocketStreams,
    DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
    DERIVATIVES_TRADING_OPTIONS_WS_STREAMS_PROD_URL,
} from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

import { WebsocketStreams } from './websocket-streams';

export interface ConfigurationDerivativesTradingOptions {
    configurationRestAPI?: ConfigurationRestAPI;

    configurationWebsocketStreams?: ConfigurationWebsocketStreams;
}

export class DerivativesTradingOptions {
    public restAPI!: RestAPI;

    public websocketStreams!: WebsocketStreams;

    constructor(config: ConfigurationDerivativesTradingOptions) {
        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(config.configurationRestAPI);
            configRestAPI.basePath =
                configRestAPI.basePath || DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': `${name}/${version} (Node.js/${process.version}; ${platform()}; ${arch()})`,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
        if (config?.configurationWebsocketStreams) {
            const configWebsocketStreams = new ConfigurationWebsocketStreams(
                config.configurationWebsocketStreams
            );
            configWebsocketStreams.wsURL =
                configWebsocketStreams.wsURL || DERIVATIVES_TRADING_OPTIONS_WS_STREAMS_PROD_URL;
            this.websocketStreams = new WebsocketStreams(configWebsocketStreams);
        }
    }
}
