# ClusterProperties

Properties of a database cluster.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **displayName** | **string** | The name of your cluster. | [optional] [default to undefined] |
| **mongoDBVersion** | **string** | The MongoDB version of your cluster. | [optional] [default to undefined] |
| **location** | **string** | The physical location where the cluster will be created. This is the location where all your instances will be located. This property is immutable.  | [optional] [default to undefined] |
| **instances** | **number** | The total number of instances in the cluster (one primary and n-1 secondaries).  | [optional] [default to undefined] |
| **connections** | [**Array&lt;Connection&gt;**](Connection.md) |  | [optional] [default to undefined] |
| **maintenanceWindow** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] [default to undefined] |
| **templateID** | **string** | The unique ID of the template, which specifies the number of cores, storage size, and memory.  | [optional] [default to undefined] |
| **connectionString** | **string** | The connection string for your cluster. | [optional] [default to undefined] |


