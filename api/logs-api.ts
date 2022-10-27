/* tslint:disable */
/* eslint-disable */
/**
 * IONOS DBaaS MongoDB REST API
 * With IONOS Cloud Database as a Service, you have the ability to quickly set up and manage a MongoDB database. You can also delete clusters, manage backups and users via the API.   MongoDB is an open source, cross-platform, document-oriented database program. Classified as a NoSQL database program, it uses JSON-like documents with optional schemas.  The MongoDB API allows you to create additional database clusters or modify existing ones. Both tools, the Data Center Designer (DCD) and the API use the same concepts consistently and are well suited for smooth and intuitive use. 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration, DEFAULT_MAX_RETRIES, DEFAULT_MAX_WAIT_TIME } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, backOff, runRequest } from '../base';
// @ts-ignore
import { ClusterLogs } from '../model';
// @ts-ignore
import { ErrorResponse } from '../model';
/**
 * LogsApi - axios parameter creator
 * @export
 */
export const LogsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves MongoDB logs based on the given parameters.
         * @summary Get logs of your cluster
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} [start] The start time for the query in RFC3339 format. Must not be more than 30 days ago but before the end parameter. The default is 30 days ago.
         * @param {string} [end] The end time for the query in RFC3339 format. Must not be greater than now. The default is the current timestamp.
         * @param {'BACKWARD' | 'FORWARD'} [direction] The direction in which to scan through the logs. The logs are returned in order of the direction.
         * @param {number} [limit] The maximal number of log lines to return.  If the limit is reached then log lines will be cut at the end (respecting the scan direction).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersLogsGet: async (clusterId: string, start?: string, end?: string, direction?: 'BACKWARD' | 'FORWARD', limit?: number, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling clustersLogsGet.');
            }
            const localVarPath = `/clusters/{clusterId}/logs`
                .replace(`{${"clusterId"}}`, encodeURIComponent(String(clusterId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }

            if ((start === undefined) && (configuration !== undefined)) {
                start = configuration.getDefaultParamValue('start');
            }
            if (start !== undefined) {
                localVarQueryParameter['start'] = (start as any instanceof Date) ?
                    (start as any).toISOString() :
                    start;
            }

            if ((end === undefined) && (configuration !== undefined)) {
                end = configuration.getDefaultParamValue('end');
            }
            if (end !== undefined) {
                localVarQueryParameter['end'] = (end as any instanceof Date) ?
                    (end as any).toISOString() :
                    end;
            }

            if ((direction === undefined) && (configuration !== undefined)) {
                direction = configuration.getDefaultParamValue('direction');
            }
            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if ((limit === undefined) && (configuration !== undefined)) {
                limit = configuration.getDefaultParamValue('limit');
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LogsApi - functional programming interface
 * @export
 */
export const LogsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves MongoDB logs based on the given parameters.
         * @summary Get logs of your cluster
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} [start] The start time for the query in RFC3339 format. Must not be more than 30 days ago but before the end parameter. The default is 30 days ago.
         * @param {string} [end] The end time for the query in RFC3339 format. Must not be greater than now. The default is the current timestamp.
         * @param {'BACKWARD' | 'FORWARD'} [direction] The direction in which to scan through the logs. The logs are returned in order of the direction.
         * @param {number} [limit] The maximal number of log lines to return.  If the limit is reached then log lines will be cut at the end (respecting the scan direction).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clustersLogsGet(clusterId: string, start?: string, end?: string, direction?: 'BACKWARD' | 'FORWARD', limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClusterLogs>> {
            const axiosArgs = await LogsApiAxiosParamCreator(configuration).clustersLogsGet(clusterId, start, end, direction, limit, options);
            return runRequest(axiosArgs, configuration);
        },
    }
};

/**
 * LogsApi - factory interface
 * @export
 */
export const LogsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves MongoDB logs based on the given parameters.
         * @summary Get logs of your cluster
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} [start] The start time for the query in RFC3339 format. Must not be more than 30 days ago but before the end parameter. The default is 30 days ago.
         * @param {string} [end] The end time for the query in RFC3339 format. Must not be greater than now. The default is the current timestamp.
         * @param {'BACKWARD' | 'FORWARD'} [direction] The direction in which to scan through the logs. The logs are returned in order of the direction.
         * @param {number} [limit] The maximal number of log lines to return.  If the limit is reached then log lines will be cut at the end (respecting the scan direction).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersLogsGet(clusterId: string, start?: string, end?: string, direction?: 'BACKWARD' | 'FORWARD', limit?: number, options?: any): AxiosPromise<ClusterLogs> {
            return LogsApiFp(configuration).clustersLogsGet(clusterId, start, end, direction, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for clustersLogsGet operation in LogsApi.
 * @export
 * @interface LogsApiClustersLogsGetRequest
 */
export interface LogsApiClustersLogsGetRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof LogsApiClustersLogsGet
     */
    readonly clusterId: string

    /**
     * The start time for the query in RFC3339 format. Must not be more than 30 days ago but before the end parameter. The default is 30 days ago.
     * @type {string}
     * @memberof LogsApiClustersLogsGet
     */
    readonly start?: string

    /**
     * The end time for the query in RFC3339 format. Must not be greater than now. The default is the current timestamp.
     * @type {string}
     * @memberof LogsApiClustersLogsGet
     */
    readonly end?: string

    /**
     * The direction in which to scan through the logs. The logs are returned in order of the direction.
     * @type {'BACKWARD' | 'FORWARD'}
     * @memberof LogsApiClustersLogsGet
     */
    readonly direction?: 'BACKWARD' | 'FORWARD'

    /**
     * The maximal number of log lines to return.  If the limit is reached then log lines will be cut at the end (respecting the scan direction).
     * @type {number}
     * @memberof LogsApiClustersLogsGet
     */
    readonly limit?: number
}

/**
 * LogsApi - object-oriented interface
 * @export
 * @class LogsApi
 * @extends {BaseAPI}
 */
export class LogsApi extends BaseAPI {
    /**
     * Retrieves MongoDB logs based on the given parameters.
     * @summary Get logs of your cluster
     * @param {LogsApiClustersLogsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogsApi
     */
    public clustersLogsGet(requestParameters: LogsApiClustersLogsGetRequest, options?: any) {
        return LogsApiFp(this.configuration).clustersLogsGet(requestParameters.clusterId, requestParameters.start, requestParameters.end, requestParameters.direction, requestParameters.limit, options).then((request) => request(this.axios, this.basePath));
    }
}
