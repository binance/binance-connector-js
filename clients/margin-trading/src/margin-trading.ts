import {
    buildUserAgent,
    ConfigurationRestAPI,
    MARGIN_TRADING_REST_API_PROD_URL,
} from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

export interface ConfigurationMarginTrading {
    configurationRestAPI?: ConfigurationRestAPI;
}

export class MarginTrading {
    public restAPI!: RestAPI;

    constructor(config: ConfigurationMarginTrading) {
        const userAgent = buildUserAgent(name, version);

        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(
                config.configurationRestAPI
            ) as ConfigurationRestAPI & {
                baseOptions: Record<string, unknown>;
            };
            configRestAPI.basePath = configRestAPI.basePath || MARGIN_TRADING_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': userAgent,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
    }
}
