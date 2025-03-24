import { platform, arch } from 'os';
import { ConfigurationRestAPI, CONVERT_REST_API_PROD_URL } from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

export interface ConfigurationConvert {
    configurationRestAPI?: ConfigurationRestAPI;
}

export class Convert {
    public restAPI!: RestAPI;

    constructor(config: ConfigurationConvert) {
        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(config.configurationRestAPI);
            configRestAPI.basePath = configRestAPI.basePath || CONVERT_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': `${name}/${version} (Node.js/${process.version}; ${platform()}; ${arch()})`,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
    }
}
