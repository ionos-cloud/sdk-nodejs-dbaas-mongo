# SnapshotsApi

All URIs are relative to *https://api.ionos.com/databases/mongodb*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clustersSnapshotsGet**](SnapshotsApi.md#clusterssnapshotsget) | **GET** /clusters/{clusterId}/snapshots | Get the snapshots of your cluster |


## clustersSnapshotsGet

> <SnapshotList> clustersSnapshotsGet(clusterId, opts)

Get the snapshots of your cluster

Retrieves MongoDB snapshots.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SnapshotsApi(config);
// Get the snapshots of your cluster
api_instance
  .clustersSnapshotsGet({
    clusterId: clusterId_example,
    limit: 100,
    offset: 200, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **limit** | **number** | The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination. | [optional][default to 100] |
| **offset** | **number** | The first element to return. Use together with \&#39;limit\&#39; for pagination. | [optional][default to 0] |

### Return type

[**SnapshotList**](../models/SnapshotList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

