import {
    buildUserAgent,
    ConfigurationRestAPI,
    DUAL_INVESTMENT_REST_API_PROD_URL,
} from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

export interface ConfigurationDualInvestment {
    configurationRestAPI?: ConfigurationRestAPI;
}

export class DualInvestment {
    public restAPI!: RestAPI;

    constructor(config: ConfigurationDualInvestment) {
        const userAgent = buildUserAgent(name, version);

        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(
                config.configurationRestAPI
            ) as ConfigurationRestAPI & {
                baseOptions: Record<string, unknown>;
            };
            configRestAPI.basePath = configRestAPI.basePath || DUAL_INVESTMENT_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': userAgent,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
    }
}
