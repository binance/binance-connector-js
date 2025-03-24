import { platform, arch } from 'os';
import { ConfigurationRestAPI, CRYPTO_LOAN_REST_API_PROD_URL } from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

export interface ConfigurationCryptoLoan {
    configurationRestAPI?: ConfigurationRestAPI;
}

export class CryptoLoan {
    public restAPI!: RestAPI;

    constructor(config: ConfigurationCryptoLoan) {
        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(config.configurationRestAPI);
            configRestAPI.basePath = configRestAPI.basePath || CRYPTO_LOAN_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': `${name}/${version} (Node.js/${process.version}; ${platform()}; ${arch()})`,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
    }
}
