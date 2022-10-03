# UsersApi

All URIs are relative to *https://api.ionos.com/databases/mongodb*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clustersUsersDelete**](UsersApi.md#clustersusersdelete) | **DELETE** /clusters/{clusterId}/users/{database}/{username} | Delete a MongoDB User by ID |
| [**clustersUsersFindById**](UsersApi.md#clustersusersfindbyid) | **GET** /clusters/{clusterId}/users/{database}/{username} | Get a MongoDB User by ID |
| [**clustersUsersGet**](UsersApi.md#clustersusersget) | **GET** /clusters/{clusterId}/users | Get a Cluster Users |
| [**clustersUsersPost**](UsersApi.md#clustersuserspost) | **POST** /clusters/{clusterId}/users | Create MongoDB User |


## clustersUsersDelete

> <User> clustersUsersDelete(clusterId, database, username)

Delete a MongoDB User by ID

Deletes a MongoDB user specified by its ID.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UsersApi(config);
// Delete a MongoDB User by ID
api_instance
  .clustersUsersDelete({
    clusterId: clusterId_example,
    database: database_example,
    username: username_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **database** | **string** | The authentication database. | [default to undefined] |
| **username** | **string** | The authentication username. | [default to undefined] |

### Return type

[**User**](../models/User.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersUsersFindById

> <User> clustersUsersFindById(clusterId, database, username)

Get a MongoDB User by ID

Retrieves the MongoDB user identified by the username and database parameters.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UsersApi(config);
// Get a MongoDB User by ID
api_instance
  .clustersUsersFindById({
    clusterId: clusterId_example,
    database: database_example,
    username: username_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **database** | **string** | The authentication database. | [default to undefined] |
| **username** | **string** | The authentication username. | [default to undefined] |

### Return type

[**User**](../models/User.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersUsersGet

> <UsersList> clustersUsersGet(clusterId)

Get a Cluster Users

Retrieves a list of MongoDB users.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UsersApi(config);
// Get a Cluster Users
api_instance
  .clustersUsersGet({
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

[**UsersList**](../models/UsersList.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersUsersPost

> <User> clustersUsersPost(clusterId, user)

Create MongoDB User

Creates a MongoDB user. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mongo');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UsersApi(config);
// Create MongoDB User
api_instance
  .clustersUsersPost({
    clusterId: clusterId_example,
    user: user_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **user** | [**User**](../models/User.md) | The user to be created. |  |

### Return type

[**User**](../models/User.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

