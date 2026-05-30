# Projection

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-projection`

**DocID**: `91cf3f7cddde4510929ec498b277fca1`

**NodeID**: `00020177579594626732087873ac44b1`

---

Projection

导入模块

import { map, mapCommon } from '@kit.MapKit';

Projection

用于在屏幕坐标和经纬度之间进行转换，在调用map.
MapComponentController
类的
getProjection
方法时会返回该类型的实例。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

示例：

let projection: map.Projection = this.mapController?.getProjection();

[h2]fromScreenLocation

fromScreenLocation(point: mapCommon.MapPoint): mapCommon.LatLng

将屏幕像素点坐标转换成经纬度。屏幕位置是以相对于地图左上角（而不是整个屏幕的左上角）的屏幕像素（而非显示像素）指定的。

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

point

mapCommon.MapPoint

是

屏幕上的坐标点，单位：px。

返回值：

类型

说明

mapCommon.LatLng

经纬度坐标。

示例：

let point: mapCommon.MapPoint = {
 positionX: 10,
 positionY: 10
};
let latLng: mapCommon.LatLng = projection.fromScreenLocation(point);

[h2]toScreenLocation

toScreenLocation(position: mapCommon.LatLng): mapCommon.MapPoint

将经纬度转换为对应的屏幕上的点的坐标。屏幕上的点的坐标是以相对于地图左上角（而不是整个屏幕的左上角）的屏幕像素（而非显示像素）指定的。

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

position

mapCommon.LatLng

是

经纬度坐标。

返回值：

类型

说明

mapCommon.MapPoint

屏幕上的坐标点，单位：px。

示例：

let position: mapCommon.MapPoint = projection.toScreenLocation({ latitude: 31.984, longitude: 118.766 });

[h2]getVisibleRegion

getVisibleRegion(): mapCommon.VisibleRegion

获取可视区域的坐标信息。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

返回值：

类型

说明

mapCommon.VisibleRegion

可见区域。

示例：

let visibleRegion: mapCommon.VisibleRegion = projection.getVisibleRegion();

[h2]getMapBounds

getMapBounds(center: mapCommon.LatLng, zoom: number): mapCommon.LatLngBounds

根据中心点和缩放级别获取地图控件对应的目标区域。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本5.0.0(12)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
5.0.0(12)

参数：

参数名

类型

必填

说明

center

mapCommon.LatLng

是

中心点经纬度坐标。

zoom

number

是

缩放级别，取值范围：[2, 20]。传入的值大于最大层级，会取最大层级，传入的值小于最小层级，会取最小层级。

返回值：

类型

说明

mapCommon.LatLngBounds

目标区域。

示例：

let position: mapCommon.LatLng = {
 latitude: 31.98, longitude: 118.766
};
let result: mapCommon.LatLngBounds = projection.getMapBounds(position, 10);

---
*2026-04-22T15:54:00.351Z*