import { platform, arch } from 'os';
import { ConfigurationRestAPI, VIP_LOAN_REST_API_PROD_URL } from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

export interface ConfigurationVipLoan {
    configurationRestAPI?: ConfigurationRestAPI;
}

export class VipLoan {
    public restAPI!: RestAPI;

    constructor(config: ConfigurationVipLoan) {
        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(config.configurationRestAPI);
            configRestAPI.basePath = configRestAPI.basePath || VIP_LOAN_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': `${name}/${version} (Node.js/${process.version}; ${platform()}; ${arch()})`,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
    }
}
