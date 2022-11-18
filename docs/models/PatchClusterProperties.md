# PatchClusterProperties

Properties of the payload to change a cluster.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **displayName** | **string** | The name of your cluster. | [optional] [default to undefined] |
| **maintenanceWindow** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] [default to undefined] |
| **instances** | **number** | The total number of instances in the cluster (one primary and n-1 secondaries).  | [optional] [default to undefined] |
| **connections** | [**Array&lt;Connection&gt;**](Connection.md) |  | [optional] [default to undefined] |
| **templateID** | **string** | The unique ID of the template, which specifies the number of cores, storage size, and memory. You cannot downgrade to a smaller template or minor edition (e.g. from business to playground). To get a list of all templates to confirm the changes use the /templates endpoint.  | [optional] [default to undefined] |


