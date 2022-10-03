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


import { CreateClusterProperties } from './create-cluster-properties';
import { Metadata } from './metadata';

/**
 * The request payload with all data needed to create a new MongoDB cluster. 
 * @export
 * @interface CreateClusterRequest
 */
export interface CreateClusterRequest {

    /**
     * 
     * @type {Metadata}
     * @memberof CreateClusterRequest
     */
    metadata?: Metadata;

    /**
     * 
     * @type {CreateClusterProperties}
     * @memberof CreateClusterRequest
     */
    properties?: CreateClusterProperties;
}

