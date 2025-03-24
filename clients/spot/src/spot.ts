import { platform, arch } from 'os';
import {
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
        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(config.configurationRestAPI);
            configRestAPI.basePath = configRestAPI.basePath || SPOT_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': `${name}/${version} (Node.js/${process.version}; ${platform()}; ${arch()})`,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
        if (config?.configurationWebsocketAPI) {
            const configWebsocketAPI = new ConfigurationWebsocketAPI(
                config.configurationWebsocketAPI
            );
            configWebsocketAPI.wsURL = configWebsocketAPI.wsURL || SPOT_WS_API_PROD_URL;
            this.websocketAPI = new WebsocketAPI(configWebsocketAPI);
        }
        if (config?.configurationWebsocketStreams) {
            const configWebsocketStreams = new ConfigurationWebsocketStreams(
                config.configurationWebsocketStreams
            );
            configWebsocketStreams.wsURL = configWebsocketStreams.wsURL || SPOT_WS_STREAMS_PROD_URL;
            this.websocketStreams = new WebsocketStreams(configWebsocketStreams);
        }
    }
}
