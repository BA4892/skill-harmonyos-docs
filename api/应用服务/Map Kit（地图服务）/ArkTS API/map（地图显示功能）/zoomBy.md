# zoomBy

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-zoomby`

**DocID**: `897ee6747da54686a41d878b99dd3c73`

**NodeID**: `000201775795946267353f1394b735a2`

---

zoomBy

导入模块

import { map, mapCommon } from '@kit.MapKit';

zoomBy

zoomBy(amount: number, focus?: mapCommon.MapPoint): CameraUpdate

根据给定增量并以给定的屏幕像素点为中心点缩放地图级别。

以屏幕左顶点为（0, 0）点，focus.positionX正值代表可视区域向右移动，负值代表可视区域向左移动。focus.positionY正值代表可视区域向下移动，负值代表可视区域向上移动。

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

amount

number

是

地图缩放级别增量。

focus

mapCommon.MapPoint

否

地图缩放中心点对应的屏幕坐标。

返回值：

类型

说明

CameraUpdate

描述地图状态将要发生的变化。

错误码：

以下错误码的详细介绍请参见
ArkTS API错误码
。

错误码ID

错误信息

401

Invalid input parameter.

示例：

let focus: mapCommon.MapPoint = {
 positionX: 100,
 positionY: 200
};
let cameraUpdate: map.CameraUpdate = map.zoomBy(10, focus);

---
*2026-04-22T15:55:04.239Z*