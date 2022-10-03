# Connection

The network connection  details for your cluster.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **datacenterId** | **string** | The datacenter to which your cluster will be connected. | [default to undefined] |
| **lanId** | **string** | The numeric LAN ID with which you connect your cluster. | [default to undefined] |
| **cidrList** | **Array&lt;string&gt;** | The list of IPs and subnet for your cluster. Note the following unavailable IP ranges: 10.233.64.0/18 10.233.0.0/18 10.233.114.0/24  | [default to undefined] |


