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
import { ErrorResponse } from '../model';
// @ts-ignore
import { User } from '../model';
// @ts-ignore
import { UsersList } from '../model';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes a MongoDB user specified by its ID.
         * @summary Delete a MongoDB User by ID
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} database The authentication database.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersUsersDelete: async (clusterId: string, database: string, username: string, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling clustersUsersDelete.');
            }
            if (database === null || database === undefined) {
                throw new RequiredError('database','Required parameter database was null or undefined when calling clustersUsersDelete.');
            }
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling clustersUsersDelete.');
            }
            const localVarPath = `/clusters/{clusterId}/users/{database}/{username}`
                .replace(`{${"clusterId"}}`, encodeURIComponent(String(clusterId)))
                .replace(`{${"database"}}`, encodeURIComponent(String(database)))
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
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
        /**
         * Retrieves the MongoDB user identified by the username and database parameters.
         * @summary Get a MongoDB User by ID
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} database The authentication database.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersUsersFindById: async (clusterId: string, database: string, username: string, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling clustersUsersFindById.');
            }
            if (database === null || database === undefined) {
                throw new RequiredError('database','Required parameter database was null or undefined when calling clustersUsersFindById.');
            }
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling clustersUsersFindById.');
            }
            const localVarPath = `/clusters/{clusterId}/users/{database}/{username}`
                .replace(`{${"clusterId"}}`, encodeURIComponent(String(clusterId)))
                .replace(`{${"database"}}`, encodeURIComponent(String(database)))
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
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
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
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
        /**
         * Retrieves a list of MongoDB users.
         * @summary Get a Cluster Users
         * @param {string} clusterId The unique ID of the cluster.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersUsersGet: async (clusterId: string, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling clustersUsersGet.');
            }
            const localVarPath = `/clusters/{clusterId}/users`
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
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
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
        /**
         * Creates a MongoDB user. 
         * @summary Create MongoDB User
         * @param {string} clusterId The unique ID of the cluster.
         * @param {User} user The user to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersUsersPost: async (clusterId: string, user: User, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling clustersUsersPost.');
            }
            if (user === null || user === undefined) {
                throw new RequiredError('user','Required parameter user was null or undefined when calling clustersUsersPost.');
            }
            const localVarPath = `/clusters/{clusterId}/users`
                .replace(`{${"clusterId"}}`, encodeURIComponent(String(clusterId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
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
            const nonString = typeof user !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(user !== undefined ? user : {})
                : (user || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Deletes a MongoDB user specified by its ID.
         * @summary Delete a MongoDB User by ID
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} database The authentication database.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clustersUsersDelete(clusterId: string, database: string, username: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const axiosArgs = await UsersApiAxiosParamCreator(configuration).clustersUsersDelete(clusterId, database, username, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Retrieves the MongoDB user identified by the username and database parameters.
         * @summary Get a MongoDB User by ID
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} database The authentication database.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clustersUsersFindById(clusterId: string, database: string, username: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const axiosArgs = await UsersApiAxiosParamCreator(configuration).clustersUsersFindById(clusterId, database, username, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Retrieves a list of MongoDB users.
         * @summary Get a Cluster Users
         * @param {string} clusterId The unique ID of the cluster.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clustersUsersGet(clusterId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersList>> {
            const axiosArgs = await UsersApiAxiosParamCreator(configuration).clustersUsersGet(clusterId, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Creates a MongoDB user. 
         * @summary Create MongoDB User
         * @param {string} clusterId The unique ID of the cluster.
         * @param {User} user The user to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clustersUsersPost(clusterId: string, user: User, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const axiosArgs = await UsersApiAxiosParamCreator(configuration).clustersUsersPost(clusterId, user, options);
            return runRequest(axiosArgs, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Deletes a MongoDB user specified by its ID.
         * @summary Delete a MongoDB User by ID
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} database The authentication database.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersUsersDelete(clusterId: string, database: string, username: string, options?: any): AxiosPromise<User> {
            return UsersApiFp(configuration).clustersUsersDelete(clusterId, database, username, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the MongoDB user identified by the username and database parameters.
         * @summary Get a MongoDB User by ID
         * @param {string} clusterId The unique ID of the cluster.
         * @param {string} database The authentication database.
         * @param {string} username The authentication username.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersUsersFindById(clusterId: string, database: string, username: string, options?: any): AxiosPromise<User> {
            return UsersApiFp(configuration).clustersUsersFindById(clusterId, database, username, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of MongoDB users.
         * @summary Get a Cluster Users
         * @param {string} clusterId The unique ID of the cluster.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersUsersGet(clusterId: string, options?: any): AxiosPromise<UsersList> {
            return UsersApiFp(configuration).clustersUsersGet(clusterId, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a MongoDB user. 
         * @summary Create MongoDB User
         * @param {string} clusterId The unique ID of the cluster.
         * @param {User} user The user to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersUsersPost(clusterId: string, user: User, options?: any): AxiosPromise<User> {
            return UsersApiFp(configuration).clustersUsersPost(clusterId, user, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for clustersUsersDelete operation in UsersApi.
 * @export
 * @interface UsersApiClustersUsersDeleteRequest
 */
export interface UsersApiClustersUsersDeleteRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof UsersApiClustersUsersDelete
     */
    readonly clusterId: string

    /**
     * The authentication database.
     * @type {string}
     * @memberof UsersApiClustersUsersDelete
     */
    readonly database: string

    /**
     * The authentication username.
     * @type {string}
     * @memberof UsersApiClustersUsersDelete
     */
    readonly username: string
}

/**
 * Request parameters for clustersUsersFindById operation in UsersApi.
 * @export
 * @interface UsersApiClustersUsersFindByIdRequest
 */
export interface UsersApiClustersUsersFindByIdRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof UsersApiClustersUsersFindById
     */
    readonly clusterId: string

    /**
     * The authentication database.
     * @type {string}
     * @memberof UsersApiClustersUsersFindById
     */
    readonly database: string

    /**
     * The authentication username.
     * @type {string}
     * @memberof UsersApiClustersUsersFindById
     */
    readonly username: string
}

/**
 * Request parameters for clustersUsersGet operation in UsersApi.
 * @export
 * @interface UsersApiClustersUsersGetRequest
 */
export interface UsersApiClustersUsersGetRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof UsersApiClustersUsersGet
     */
    readonly clusterId: string
}

/**
 * Request parameters for clustersUsersPost operation in UsersApi.
 * @export
 * @interface UsersApiClustersUsersPostRequest
 */
export interface UsersApiClustersUsersPostRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof UsersApiClustersUsersPost
     */
    readonly clusterId: string

    /**
     * The user to be created.
     * @type {User}
     * @memberof UsersApiClustersUsersPost
     */
    readonly user: User
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Deletes a MongoDB user specified by its ID.
     * @summary Delete a MongoDB User by ID
     * @param {UsersApiClustersUsersDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public clustersUsersDelete(requestParameters: UsersApiClustersUsersDeleteRequest, options?: any) {
        return UsersApiFp(this.configuration).clustersUsersDelete(requestParameters.clusterId, requestParameters.database, requestParameters.username, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the MongoDB user identified by the username and database parameters.
     * @summary Get a MongoDB User by ID
     * @param {UsersApiClustersUsersFindByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public clustersUsersFindById(requestParameters: UsersApiClustersUsersFindByIdRequest, options?: any) {
        return UsersApiFp(this.configuration).clustersUsersFindById(requestParameters.clusterId, requestParameters.database, requestParameters.username, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a list of MongoDB users.
     * @summary Get a Cluster Users
     * @param {UsersApiClustersUsersGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public clustersUsersGet(requestParameters: UsersApiClustersUsersGetRequest, options?: any) {
        return UsersApiFp(this.configuration).clustersUsersGet(requestParameters.clusterId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a MongoDB user. 
     * @summary Create MongoDB User
     * @param {UsersApiClustersUsersPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public clustersUsersPost(requestParameters: UsersApiClustersUsersPostRequest, options?: any) {
        return UsersApiFp(this.configuration).clustersUsersPost(requestParameters.clusterId, requestParameters.user, options).then((request) => request(this.axios, this.basePath));
    }
}
