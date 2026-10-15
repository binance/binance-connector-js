import {
    buildUserAgent,
    ConfigurationWebsocketStreams,
    CMS_WS_STREAMS_PROD_URL,
} from '@binance/common';
import { name, version } from '../package.json';

import { WebsocketStreams } from './websocket-streams';

export interface ConfigurationCms {
    configurationWebsocketStreams?: ConfigurationWebsocketStreams;
}

export class Cms {
    public websocketStreams!: WebsocketStreams;

    constructor(config: ConfigurationCms) {
        const userAgent = buildUserAgent(name, version);

        if (config?.configurationWebsocketStreams) {
            const configWebsocketStreams = new ConfigurationWebsocketStreams(
                config.configurationWebsocketStreams
            ) as ConfigurationWebsocketStreams & {
                userAgent: string;
            };
            configWebsocketStreams.wsURL = configWebsocketStreams.wsURL || CMS_WS_STREAMS_PROD_URL;
            configWebsocketStreams.userAgent = userAgent;
            this.websocketStreams = new WebsocketStreams(configWebsocketStreams);
        }
    }
}
