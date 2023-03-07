# PaginationLinks

The URLs to navigate the different pages. 
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **prev** | **string** | The URL (with offset and limit parameters) of the previous page; only present if the offset is greater than 0.  | [optional] [readonly] [default to undefined] |
| **self** | **string** | The URL (with offset and limit parameters) of the current page.  | [optional] [readonly] [default to undefined] |
| **next** | **string** | The URL (with offset and limit parameters) of the next page; only present if the offset and limit is less than the total number of elements.  | [optional] [readonly] [default to undefined] |


