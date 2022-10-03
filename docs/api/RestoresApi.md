# RestoresApi

All URIs are relative to *https://api.ionos.com/databases/mongodb*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clustersRestorePost**](RestoresApi.md#clustersrestorepost) | **POST** /clusters/{clusterId}/restore | In-place restore of a cluster |


## clustersRestorePost

> clustersRestorePost(clusterId, createRestoreRequest)

In-place restore of a cluster

Triggers an in-place restore of the given MongoDB cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RestoresApi(config);
// In-place restore of a cluster
api_instance
  .clustersRestorePost({
    clusterId: clusterId_example,
    createRestoreRequest: createRestoreRequest_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **createRestoreRequest** | [**CreateRestoreRequest**](../models/CreateRestoreRequest.md) | The restore request to create. |  |

### Return type

nil (empty response body)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

