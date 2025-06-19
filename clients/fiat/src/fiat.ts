import { buildUserAgent, ConfigurationRestAPI, FIAT_REST_API_PROD_URL } from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

export interface ConfigurationFiat {
    configurationRestAPI?: ConfigurationRestAPI;
}

export class Fiat {
    public restAPI!: RestAPI;

    constructor(config: ConfigurationFiat) {
        const userAgent = buildUserAgent(name, version);

        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(
                config.configurationRestAPI
            ) as ConfigurationRestAPI & {
                baseOptions: Record<string, unknown>;
            };
            configRestAPI.basePath = configRestAPI.basePath || FIAT_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': userAgent,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
    }
}
