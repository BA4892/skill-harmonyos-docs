# CameraUpdate

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-cameraupdate`

**DocID**: `ce7bbf4e94f846fa8aef6f91089ce8aa`

**NodeID**: `000201775795946267319769cae81995`

---

CameraUpdate

导入模块

import { map, mapCommon } from '@kit.MapKit';

CameraUpdate

CameraUpdate定义了相机移动参数。CameraUpdate的创建方法参见
newCameraPosition
等function。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

示例：

let target: mapCommon.LatLng = {
 latitude: 39.9,
 longitude: 116.4
};
let cameraPosition: mapCommon.CameraPosition = {
 target: target,
 zoom: 10
};
// 新建CameraUpdate对象
let cameraUpdate: map.CameraUpdate = map.newCameraPosition(cameraPosition);
// 移动相机
this.mapController.moveCamera(cameraUpdate);

---
*2026-04-22T15:55:04.212Z*