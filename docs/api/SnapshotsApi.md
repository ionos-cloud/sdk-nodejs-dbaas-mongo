# SnapshotsApi

All URIs are relative to *https://api.ionos.com/databases/mongodb*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clustersSnapshotsGet**](SnapshotsApi.md#clusterssnapshotsget) | **GET** /clusters/{clusterId}/snapshots | Get the snapshots of your cluster |


## clustersSnapshotsGet

> <SnapshotList> clustersSnapshotsGet(clusterId)

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

[**SnapshotList**](../models/SnapshotList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

