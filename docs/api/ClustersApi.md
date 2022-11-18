# ClustersApi

All URIs are relative to *https://api.ionos.com/databases/mongodb*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clustersDelete**](ClustersApi.md#clustersdelete) | **DELETE** /clusters/{clusterId} | Delete a Cluster |
| [**clustersFindById**](ClustersApi.md#clustersfindbyid) | **GET** /clusters/{clusterId} | Get a cluster by id |
| [**clustersGet**](ClustersApi.md#clustersget) | **GET** /clusters | Get Clusters |
| [**clustersPatch**](ClustersApi.md#clusterspatch) | **PATCH** /clusters/{clusterId} | Patch a cluster |
| [**clustersPost**](ClustersApi.md#clusterspost) | **POST** /clusters | Create a Cluster |


## clustersDelete

> <ClusterResponse> clustersDelete(clusterId)

Delete a Cluster

Deletes a MongoDB cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Delete a Cluster
api_instance
  .clustersDelete({
    clusterId: clusterId_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |

### Return type

[**ClusterResponse**](../models/ClusterResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersFindById

> <ClusterResponse> clustersFindById(clusterId)

Get a cluster by id

Get a cluster by id.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Get a cluster by id
api_instance
  .clustersFindById({
    clusterId: clusterId_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |

### Return type

[**ClusterResponse**](../models/ClusterResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersGet

> <ClusterList> clustersGet(opts)

Get Clusters

Retrieves a list of MongoDB clusters.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Get Clusters
api_instance
  .clustersGet({
    filterName: filterName_example
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **filterName** | **string** | Response filter to list only the MongoDB clusters that contain the specified name. The value is case insensitive and matched on the \&#39;displayName\&#39; field.  | [optional][default to undefined] |

### Return type

[**ClusterList**](../models/ClusterList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersPatch

> <ClusterResponse> clustersPatch(clusterId, patchClusterRequest)

Patch a cluster

Patch attributes of a MongoDB cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Patch a cluster
api_instance
  .clustersPatch({
    clusterId: clusterId_example,
    patchClusterRequest: patchClusterRequest_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **patchClusterRequest** | [**PatchClusterRequest**](../models/PatchClusterRequest.md) | Part of the cluster which should be modified. |  |

### Return type

[**ClusterResponse**](../models/ClusterResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clustersPost

> <ClusterResponse> clustersPost(createClusterRequest)

Create a Cluster

Creates a new MongoDB cluster. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Create a Cluster
api_instance
  .clustersPost({
    createClusterRequest: createClusterRequest_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **createClusterRequest** | [**CreateClusterRequest**](../models/CreateClusterRequest.md) | The cluster to be created. |  |

### Return type

[**ClusterResponse**](../models/ClusterResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

