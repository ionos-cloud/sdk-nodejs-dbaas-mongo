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


import { PaginationLinks } from './pagination-links';

/**
 * 
 * @export
 * @interface Pagination
 */
export interface Pagination {

    /**
     * The offset specified in the request (if none was specified, the default offset is 0) (not implemented yet). 
     * @type {number}
     * @memberof Pagination
     */
    offset?: number;

    /**
     * The limit specified in the request (if none was specified, use the endpoint\'s default pagination limit) (not implemented yet, always return number of items). 
     * @type {number}
     * @memberof Pagination
     */
    limit?: number;

    /**
     * 
     * @type {PaginationLinks}
     * @memberof Pagination
     */
    _links?: PaginationLinks;
}

