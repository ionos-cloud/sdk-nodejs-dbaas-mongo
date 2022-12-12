/* tslint:disable */
/* eslint-disable */
/**
 * IONOS DBaaS MongoDB REST API
 * With IONOS Cloud Database as a Service, you have the ability to quickly set up and manage a MongoDB database. You can also delete clusters, manage backups and users via the API.   MongoDB is an open source, cross-platform, document-oriented database program. Classified as a NoSQL database program, it uses JSON-like documents with optional schemas.  The MongoDB API allows you to create additional database clusters or modify existing ones. Both tools, the Data Center Designer (DCD) and the API use the same concepts consistently and are well suited for smooth and intuitive use. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { UserRoles } from './user-roles';

/**
 * Mongodb user properties.
 * @export
 * @interface UserProperties
 */
export interface UserProperties {

    /**
     * 
     * @type {string}
     * @memberof UserProperties
     */
    username: string;

    /**
     * 
     * @type {string}
     * @memberof UserProperties
     */
    password: string;

    /**
     * 
     * @type {Array<UserRoles>}
     * @memberof UserProperties
     */
    roles?: Array<UserRoles>;
}


