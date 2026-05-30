# MapPolygon

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-mappolygon`

**DocID**: `7510731d0d44473ea398e0bbe16b4f97`

**NodeID**: `0002017757959462673051b2a00d3965`

---

MapPolygon

导入模块

import { map, mapCommon } from '@kit.MapKit';

MapPolygon

多边形，继承
BaseOverlay
。多边形可以是凸面或凹面，它可以跨越180子午线并且可以具有未填充的孔。在调用map.
MapComponentController
类的
addPolygon
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

let polygonOptions: mapCommon.MapPolygonOptions = {
 points: [
 { latitude: 31.9844102, longitude: 118.7662 },
 { latitude: 31.9844102, longitude: 123.7662 },
 { latitude: 36.9844102, longitude: 123.7662 },
 { latitude: 36.9844102, longitude: 118.7662 }
 ],
 fillColor: 0xffff4500
};
let mapPolygon = await this.mapController.addPolygon(polygonOptions);

[h2]getFillColor

getFillColor(): number

获取ARGB格式的多边形的填充色值。

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

number

ARGB格式的颜色值。

示例：

let fillColor: number = mapPolygon.getFillColor();

[h2]getHoles

getHoles(): Array<Array<mapCommon.LatLng>>

获取多边形的空心洞。

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

Array<Array<
mapCommon.LatLng
>>

多边形的空心洞数组，其中空心洞是
LatLng
数组。

示例：

let holes: Array<Array<mapCommon.LatLng>> = mapPolygon.getHoles();

[h2]getPoints

getPoints(): Array<mapCommon.LatLng>

获取多边形的顶点坐标。

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

Array<
mapCommon.LatLng
>

多边形的顶点坐标。

示例：

let points: Array<mapCommon.LatLng> = mapPolygon.getPoints();

[h2]getStrokeColor

getStrokeColor(): number

获取多边形的边框颜色。

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

number

ARGB格式颜色值。

示例：

let strokeColor: number = mapPolygon.getStrokeColor();

[h2]getJointType

getJointType(): mapCommon.JointType

获取多边形的顶点样式。

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

mapCommon.JointType

多边形的顶点样式。

示例：

let jointType: mapCommon.JointType = mapPolygon.getJointType();

[h2]getPatterns

getPatterns(): Array<mapCommon.PatternItem>

获取多边形的边框样式。

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

Array<
mapCommon.PatternItem
>

多边形的边框样式。

示例：

let patterns: Array<mapCommon.PatternItem> = mapPolygon.getPatterns();

[h2]getStrokeWidth

getStrokeWidth(): number

获取多边形的边框宽度。

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

number

多边形的边框宽度，单位：px。

示例：

let strokeWidth: number = mapPolygon.getStrokeWidth();

[h2]isClickable

isClickable(): boolean

获取多边形的可点击性。

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

boolean

多边形的可点击性。

true：可点击

false：不可点击

示例：

let clickable: boolean = mapPolygon.isClickable();

[h2]isGeodesic

isGeodesic(): boolean

获取多边形的每个线段是否为大地线。

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

boolean

多边形的每个线段是否为大地线。

true：大地线

false：非大地线

示例：

let geodesic: boolean = mapPolygon.isGeodesic();

[h2]setClickable

setClickable(clickable: boolean): void

设置多边形的可点击性。

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

clickable

boolean

是

多边形的可点击性，异常值不处理。

true：可点击

false：不可点击

示例：

mapPolygon.setClickable(true);

[h2]setFillColor

setFillColor(color: number): void

设置多边形的填充色。

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

color

number

是

多边形的填充色，ARGB格式颜色值，异常值不处理。

示例：

mapPolygon.setFillColor(0xff000FFF);

[h2]setGeodesic

setGeodesic(geodesic: boolean): void

设置是否将多边形的每个线段绘制为大地线。

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

geodesic

boolean

是

将多边形的每个线段绘制为大地线，异常值不处理。

true：每段绘制为大地线

false：不是大地线

示例：

mapPolygon.setGeodesic(true);

[h2]setHoles

setHoles(holes: Array<Array<mapCommon.LatLng>>): void

设置多边形的空心洞。

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

holes

Array<Array<
mapCommon.LatLng
>>

是

空心洞数组，其中空心洞是
LatLng
数组。异常值不处理。

示例：

let holes: Array<Array<mapCommon.LatLng>> = [
 [
 {
 latitude: 32.98,
 longitude: 121.76
 },
 {
 latitude: 32.98,
 longitude: 119.76
 },
 {
 latitude: 35.98,
 longitude: 119.76
 },
 {
 latitude: 35.98,
 longitude: 121.76
 }
 ]
];
mapPolygon.setHoles(holes);

当空心洞的坐标贴合多边形边缘时，会导致渲染出现异常，渲染多余的空心区域。

[h2]setPoints

setPoints(points: Array<mapCommon.LatLng>): void

重新设置多边形的顶点坐标。

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

points

Array<
mapCommon.LatLng
>

是

顶点坐标数组。异常值不处理。

示例：

let points: Array<mapCommon.LatLng> = [
 { 
 latitude: 31.98,
 longitude: 115.76
 },
 { 
 latitude: 31.98,
 longitude: 118.76
 },
 { 
 latitude: 35.98,
 longitude: 118.76
 },
 { 
 latitude: 35.98,
 longitude: 118.76
 }
];
mapPolygon.setPoints(points);

[h2]setStrokeColor

setStrokeColor(color: number): void

设置多边形的边框颜色。

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

color

number

是

ARGB格式颜色值，异常值不处理。

示例：

mapPolygon.setStrokeColor(0xff00DB93);

[h2]setJointType

setJointType(jointType: mapCommon.JointType): void

设置多边形的顶点样式。

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

jointType

mapCommon.JointType

是

顶点样式，异常值不处理。

示例：

mapPolygon.setJointType(mapCommon.JointType.ROUND);

[h2]setPatterns

setPatterns(patterns: Array<mapCommon.PatternItem>): void

设置多边形的边框样式。

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

patterns

Array<
mapCommon.PatternItem
>

是

PatternItem
对象的数组，异常值不处理。

示例：

let linePatterns: Array<mapCommon.PatternItem> = [
 { 
 type: mapCommon.PatternItemType.DASH,
 length: 100
 },
 { 
 type: mapCommon.PatternItemType.DOT,
 length: 100
 },
 { 
 type: mapCommon.PatternItemType.GAP,
 length: 100 
 }
];
mapPolygon.setPatterns(linePatterns);

[h2]setStrokeWidth

setStrokeWidth(width: number): void

设置多边形的边框宽度。

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

width

number

是

边框的宽度，单位：px，取值范围：大于等于0，异常值不处理。

示例：

mapPolygon.setStrokeWidth(30);

---
*2026-04-22T15:55:04.209Z*