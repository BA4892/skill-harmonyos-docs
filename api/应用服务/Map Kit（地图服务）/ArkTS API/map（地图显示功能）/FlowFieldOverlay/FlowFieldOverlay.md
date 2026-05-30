# FlowFieldOverlay

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-flowfieldoverlay`

**DocID**: `57eb01c377554e83a28f0555fe269181`

**NodeID**: `00020177579594626734454ba16a7574`

---

FlowFieldOverlay

导入模块

import { map, mapCommon } from '@kit.MapKit';

FlowFieldOverlay

流场图层管理对象。在调用map.
MapComponentController
类的
addFlowFieldOverlay
方法时会返回该类型的实例，继承
BaseOverlay
。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本6.0.0(20)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core.EnhancedOverlay

起始版本：
6.0.0(20)

示例：

let params: mapCommon.FlowFieldOverlayParams = {
 // data为GRIB2规范的json数据，需开发者自行传输，可参考
流场数据格式参考

 data: 'xxx'
};
let fieldOverlay = await mapController.addFlowFieldOverlay(params);

[h2]setStyle

setStyle(style: mapCommon.ParticleStyle): void

设置粒子样式。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本6.0.0(20)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core.EnhancedOverlay

起始版本：
6.0.0(20)

参数：

参数名

类型

必填

说明

style

mapCommon.ParticleStyle

是

粒子样式。

示例：

let style: mapCommon.ParticleStyle = {
 count: 200,
 color: 0xff009575,
 maxSpeed: 60,
 speedFactor: 0.3
};
fieldOverlay.setStyle(style);

[h2]getStyle

getStyle(): mapCommon.ParticleStyle

获取粒子样式。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本6.0.0(20)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core.EnhancedOverlay

起始版本：
6.0.0(20)

返回值：

类型

说明

mapCommon.ParticleStyle

粒子样式。

示例：

let style: mapCommon.ParticleStyle = fieldOverlay.getStyle();

---
*2026-04-22T15:54:00.366Z*