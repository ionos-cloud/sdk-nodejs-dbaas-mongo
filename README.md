# Node API Client For IONOS Cloud DBaaS Mongo
[![[ CI ] DBaaS Mongo / Node](https://github.com/ionos-cloud/sdk-resources/actions/workflows/ci-dbaas-mongo-node.yml/badge.svg)](https://github.com/ionos-cloud/sdk-resources/actions/workflows/ci-dbaas-mongo-node.yml)
# Overview
An enterprise-grade Database is provided as a Service (DBaaS) solution that
can be managed through a browser-based \"Data Center Designer\" (DCD) tool or
via an easy to use API.

The API allows you to create additional database clusters or modify existing
ones. It is designed to allow users to leverage the same power and
flexibility found within the DCD visual tool. Both tools are consistent with
their concepts and lend well to making the experience smooth and intuitive.


## Getting Started

An IONOS account is required for access to the Cloud API; credentials from your registration are used to authenticate against the IONOS Cloud API.

## Installation

Install the following dependencies:

```shell
npm i --save @ionos-cloud/sdk-nodejs-dbaas-mongo
```

## Usage
Import the SDK using:

```javascript
const sdk = require('@ionos-cloud/sdk-nodejs-dbaas-mongo')
```

Or, if the import is done from an ES module, use:

```javascript
import * as sdk from '@ionos-cloud/sdk-nodejs-dbaas-mongo';
```

Usage example:
```javascript
const config = new sdk.Configuration({username: 'YOUR_USERNAME', password: 'YOUR_PASSWORD'});
const clustersApi = new sdk.ClustersApi(config);

clustersApi.clustersGet().then((response) => console.log(response));
```

### Authentication

The username and password or the authentication token can be manually specified when initializing the SDK client:

```typescript
const config = new sdk.Configuration({username: 'YOUR_USERNAME', password: 'YOUR_PASSWORD'});
const clustersApi = new sdk.ClustersApi(config);
```

Environment variables can also be used; the SDK uses the following variables:

* IONOS\_USERNAME - to specify the username used to login
* IONOS\_PASSWORD - to specify the password
* IONOS\_TOKEN - if an authentication token is being used

In this case, the client configuration must be initialized using `fromEnv()`:

```javascript
clustersApi = new sdk.ClustersApi(sdk.Configuration.fromEnv());
```

**Warning**: Make sure to follow the Information Security Best Practices when using credentials within your code or storing them in a file.

## Feature Reference

The IONOS Cloud SDK for Nodejs DBaaS Mongo aims to offer access to all resources in the IONOS DBaaS Mongo API, and has additional features to make integration easier:

* Authentication for API calls
* Asynchronous request handling

## FAQ

1. How can I open a bug report/feature request?

Bug reports and feature requests can be opened in the Issues repository: [https://github.com/ionos-cloud/sdk-nodejs-dbaas-mongo/issues/new/choose](https://github.com/ionos-cloud/sdk-nodejs-dbaas-mongo/issues/new/choose)

2. Can I contribute to the NodeJS DBaaS Mongo SDK?

Our SDKs are automatically generated using OpenAPI Generator and don’t support manual changes. If you require changes, please open an issue and we will try to address it.
