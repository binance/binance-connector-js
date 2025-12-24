import { buildUserAgent, ConfigurationRestAPI, ALGO_REST_API_PROD_URL } from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

/**
 * @interface ConfigurationAlgo
 * Interface for configuring the Algo client, primarily containing optional
 * REST API settings.
 */
export interface ConfigurationAlgo {
    configurationRestAPI?: ConfigurationRestAPI;
}

/**
 * @class Algo
 * The main entry point for the Binance Algo Trading client.
 * It handles configuration and provides access to the RestAPI client.
 */
export class Algo {
    // Making restAPI optional ('?') ensures that accessing it must be checked 
    // by the consumer if the configuration wasn't provided, 
    // preventing runtime errors if the constructor didn't initialize it.
    public restAPI?: RestAPI;

    /**
     * @constructor
     * @param config - The configuration object for the Algo client.
     */
    constructor(config: ConfigurationAlgo = {}) {
        // Prepare the User-Agent string using package details for API identification.
        const userAgent: string = buildUserAgent(name, version);

        if (config.configurationRestAPI) {
            // Use the provided configuration as a base.
            // TypeScript automatically handles the type widening; no need for explicit complex casting.
            const configRestAPI = config.configurationRestAPI;

            // Ensure base path is set, defaulting to the production URL if not provided.
            configRestAPI.basePath = configRestAPI.basePath ?? ALGO_REST_API_PROD_URL;
            
            // Ensure base options exist to prevent runtime access errors.
            // It's safer to use an empty object fallback.
            configRestAPI.baseOptions = configRestAPI.baseOptions ?? {};

            // Ensure headers object exists within baseOptions.
            configRestAPI.baseOptions.headers = configRestAPI.baseOptions.headers ?? {};

            // Merge the generated User-Agent into existing headers.
            (configRestAPI.baseOptions.headers as Record<string, string>) = {
                ...(configRestAPI.baseOptions.headers as Record<string, string>),
                'User-Agent': userAgent,
            };

            // Initialize the RestAPI client with the finalized configuration.
            this.restAPI = new RestAPI(configRestAPI);
        }
    }
}
