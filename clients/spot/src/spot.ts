import {
    buildUserAgent,
    ConfigurationRestAPI,
    ConfigurationWebsocketAPI,
    ConfigurationWebsocketStreams,
    SPOT_REST_API_PROD_URL,
    SPOT_WS_API_PROD_URL,
    SPOT_WS_STREAMS_PROD_URL,
} from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';
import { WebsocketAPI } from './websocket-api';
import { WebsocketStreams } from './websocket-streams';

export interface ConfigurationSpot {
    configurationRestAPI?: ConfigurationRestAPI;
    configurationWebsocketAPI?: ConfigurationWebsocketAPI;
    configurationWebsocketStreams?: ConfigurationWebsocketStreams;
}

export class Spot {
    public restAPI!: RestAPI;
    public websocketAPI!: WebsocketAPI;
    public websocketStreams!: WebsocketStreams;

    constructor(config: ConfigurationSpot) {
        const userAgent = buildUserAgent(name, version);

        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(
                config.configurationRestAPI
            ) as ConfigurationRestAPI & {
                baseOptions: Record<string, unknown>;
            };
            configRestAPI.basePath = configRestAPI.basePath || SPOT_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': userAgent,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
        if (config?.configurationWebsocketAPI) {
            const configWebsocketAPI = new ConfigurationWebsocketAPI(
                config.configurationWebsocketAPI
            ) as ConfigurationWebsocketAPI & {
                userAgent: string;
            };
            configWebsocketAPI.wsURL = configWebsocketAPI.wsURL || SPOT_WS_API_PROD_URL;
            configWebsocketAPI.userAgent = userAgent;
            this.websocketAPI = new WebsocketAPI(configWebsocketAPI);
        }
        if (config?.configurationWebsocketStreams) {
            const configWebsocketStreams = new ConfigurationWebsocketStreams(
                config.configurationWebsocketStreams
            ) as ConfigurationWebsocketStreams & {
                userAgent: string;
            };
            configWebsocketStreams.wsURL = configWebsocketStreams.wsURL || SPOT_WS_STREAMS_PROD_URL;
            configWebsocketStreams.userAgent = userAgent;
            this.websocketStreams = new WebsocketStreams(configWebsocketStreams);
        }
    }
}
