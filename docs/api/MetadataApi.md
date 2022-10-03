# MetadataApi

All URIs are relative to *https://api.ionos.com/databases/mongodb*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**infosVersionGet**](MetadataApi.md#infosversionget) | **GET** /infos/version | Get API Version |
| [**infosVersionsGet**](MetadataApi.md#infosversionsget) | **GET** /infos/versions | Get All API Versions |


## infosVersionGet

> <APIVersion> infosVersionGet

Get API Version

Retrieves the current version of the responding API.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.MetadataApi(config);
// Get API Version
api_instance
  .infosVersionGet()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**APIVersion**](../models/APIVersion.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## infosVersionsGet

> <Array<APIVersion>> infosVersionsGet

Get All API Versions

Retrieves all available versions of the responding API.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.MetadataApi(config);
// Get All API Versions
api_instance
  .infosVersionsGet()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;APIVersion&gt;**](../models/APIVersion.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

