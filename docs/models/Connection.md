# Connection

The network connection  details for your cluster.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **datacenterId** | **string** | The datacenter to which your cluster will be connected. | [default to undefined] |
| **lanId** | **string** | The numeric LAN ID with which you connect your cluster. | [default to undefined] |
| **cidrList** | **Array&lt;string&gt;** | The list of IPs for your cluster. All IPs must be in a /24 network. Note the following unavailable IP ranges: 10.233.114.0/24  | [default to undefined] |


