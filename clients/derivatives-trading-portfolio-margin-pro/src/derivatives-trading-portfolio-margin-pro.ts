import {
    buildUserAgent,
    ConfigurationRestAPI,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL,
} from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

export interface ConfigurationDerivativesTradingPortfolioMarginPro {
    configurationRestAPI?: ConfigurationRestAPI;
}

export class DerivativesTradingPortfolioMarginPro {
    public restAPI!: RestAPI;

    constructor(config: ConfigurationDerivativesTradingPortfolioMarginPro) {
        const userAgent = buildUserAgent(name, version);

        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(
                config.configurationRestAPI
            ) as ConfigurationRestAPI & {
                baseOptions: Record<string, unknown>;
            };
            configRestAPI.basePath =
                configRestAPI.basePath ||
                DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': userAgent,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
    }
}
