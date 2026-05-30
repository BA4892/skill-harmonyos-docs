# MarkerClusterInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-markerclusterinfo`

**DocID**: `d2639ea4f587448faac96ca4e11a3aff`

**NodeID**: `00020177579594626733984579ff5ffe`

---

MarkerClusterInfo

导入模块

import { map, mapCommon } from '@kit.MapKit';

MarkerClusterInfo

聚合图层的标记的信息。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本5.0.3(15)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
5.0.3(15)

名称

类型

只读

可选

说明

marker

Marker

否

否

聚合图层的标记。

clusterItems

Array<
mapCommon.ClusterItem
>

否

否

聚合节点数组。

示例：

let clusterItem1: mapCommon.ClusterItem = {
 position: {
 latitude: 31.984,
 longitude: 118.766
 }
};
let clusterItem2: mapCommon.ClusterItem = {
 position: {
 latitude: 31.974,
 longitude: 118.75
 }
};
let array: Array<mapCommon.ClusterItem> = [
 clusterItem1,
 clusterItem2
];
let clusterOverlayParams: mapCommon.ClusterOverlayParams = { distance: 40, clusterItems: array };
let clusterOverlay: map.ClusterOverlay = await this.mapController.addClusterOverlay(clusterOverlayParams);
let callback1 = (markerClusterInfo: map.MarkerClusterInfo) => {
 console.info("markerClusterClick", `callback1 markerClusterInfo`);
};
clusterOverlay.on("markerClusterClick", callback1);

---
*2026-04-22T15:55:04.228Z*