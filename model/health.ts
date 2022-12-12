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



/**
 * The current health status reported by the cluster. * **HEALTHY** Primary exists and number of replicas is equal to specified. * **UNHEALTHY** Primary does not exist or cluster doesn\'t have majority. * **DEGRADED** Primary exists and number of replicas is less than specified. * **UNKNOWN** The health status is unknown. 
 * @export
 * @enum {string}
 */
export enum Health {
    Healthy = 'HEALTHY',
    Unhealthy = 'UNHEALTHY',
    Degraded = 'DEGRADED',
    Unknown = 'UNKNOWN'
}


