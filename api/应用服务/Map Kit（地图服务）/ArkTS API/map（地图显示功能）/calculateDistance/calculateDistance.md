# calculateDistance

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-calculatedistance`

**DocID**: `fe5a93f504f44c07a26ecd2a7dd31345`

**NodeID**: `000201775795946267357db4c88010e1`

---

calculateDistance

导入模块

import { map, mapCommon } from '@kit.MapKit';

calculateDistance

calculateDistance(from: mapCommon.LatLng, to: mapCommon.LatLng): number

计算坐标点之间的距离。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

参数：

参数名

类型

必填

说明

from

mapCommon.LatLng

是

起点坐标。

to

mapCommon.LatLng

是

终点坐标。

返回值：

类型

说明

number

两个坐标点之间的距离，单位：米。

入参为空返回0。

示例：

let fromLatLng: mapCommon.LatLng = {
 latitude: 38,
 longitude: 118
};
let toLatLng: mapCommon.LatLng = {
 latitude: 39,
 longitude: 119
};

let distance = map.calculateDistance(fromLatLng, toLatLng);

---
*2026-04-22T15:54:00.374Z*