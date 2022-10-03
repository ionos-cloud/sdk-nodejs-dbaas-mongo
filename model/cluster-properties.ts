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


import { Connection } from './connection';
import { MaintenanceWindow } from './maintenance-window';

/**
 * Properties of a database cluster.
 * @export
 * @interface ClusterProperties
 */
export interface ClusterProperties {

    /**
     * The name of your cluster.
     * @type {string}
     * @memberof ClusterProperties
     */
    displayName?: string;

    /**
     * The MongoDB version of your cluster.
     * @type {string}
     * @memberof ClusterProperties
     */
    mongoDBVersion?: string;

    /**
     * The physical location where the cluster will be created. This is the location where all your instances will be located. This property is immutable. 
     * @type {string}
     * @memberof ClusterProperties
     */
    location?: string;

    /**
     * The total number of instances in the cluster (one primary and n-1 secondaries). 
     * @type {number}
     * @memberof ClusterProperties
     */
    instances?: number;

    /**
     * 
     * @type {Array<Connection>}
     * @memberof ClusterProperties
     */
    connections?: Array<Connection>;

    /**
     * 
     * @type {MaintenanceWindow}
     * @memberof ClusterProperties
     */
    maintenanceWindow?: MaintenanceWindow;

    /**
     * The unique ID of the template, which specifies the number of cores, storage size, and memory. 
     * @type {string}
     * @memberof ClusterProperties
     */
    templateID?: string;

    /**
     * The connection string for your cluster.
     * @type {string}
     * @memberof ClusterProperties
     */
    connectionString?: string;
}

