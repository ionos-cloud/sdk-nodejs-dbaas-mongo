# CreateClusterProperties

The properties with all data needed to create a new MongoDB cluster. 
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **templateID** | **string** | The unique ID of the template, which specifies the number of cores, storage size, and memory.  | [default to undefined] |
| **mongoDBVersion** | **string** | The MongoDB version of your cluster. | [optional] [default to undefined] |
| **instances** | **number** | The total number of instances in the cluster (one primary and n-1 secondaries).  | [default to undefined] |
| **connections** | [**Array&lt;Connection&gt;**](Connection.md) |  | [default to undefined] |
| **location** | **string** | The physical location where the cluster will be created. This is the location where all your instances will be located. This property is immutable.  | [default to undefined] |
| **displayName** | **string** | The name of your cluster. | [default to undefined] |
| **maintenanceWindow** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] [default to undefined] |


