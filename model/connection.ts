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



/**
 * The network connection  details for your cluster.
 * @export
 * @interface Connection
 */
export interface Connection {

    /**
     * The datacenter to which your cluster will be connected.
     * @type {string}
     * @memberof Connection
     */
    datacenterId: string;

    /**
     * The numeric LAN ID with which you connect your cluster.
     * @type {string}
     * @memberof Connection
     */
    lanId: string;

    /**
     * The list of IPs for your cluster. All IPs must be in a /24 network. Note the following unavailable IP ranges: 10.233.114.0/24 
     * @type {Array<string>}
     * @memberof Connection
     */
    cidrList: Array<string>;
}


