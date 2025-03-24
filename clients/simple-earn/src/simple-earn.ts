import { platform, arch } from 'os';
import { ConfigurationRestAPI, SIMPLE_EARN_REST_API_PROD_URL } from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

export interface ConfigurationSimpleEarn {
    configurationRestAPI?: ConfigurationRestAPI;
}

export class SimpleEarn {
    public restAPI!: RestAPI;

    constructor(config: ConfigurationSimpleEarn) {
        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(config.configurationRestAPI);
            configRestAPI.basePath = configRestAPI.basePath || SIMPLE_EARN_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': `${name}/${version} (Node.js/${process.version}; ${platform()}; ${arch()})`,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
    }
}
