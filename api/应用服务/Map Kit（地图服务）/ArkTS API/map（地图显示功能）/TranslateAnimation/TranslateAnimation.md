# TranslateAnimation

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-translateanimation`

**DocID**: `ac80cbd4788549bcb1239e6be9080d91`

**NodeID**: `0002017757959462673262c0892fd078`

---

TranslateAnimation

导入模块

import { map, mapCommon } from '@kit.MapKit';

TranslateAnimation

控制移动的动画类，继承
Animation
。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
4.1.0(11)

[h2]constructor

constructor(target: mapCommon.LatLng)

构造器，构造控制移动的动画实例。

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

target

mapCommon.LatLng

是

需要移动的目标位置，位置类型为经纬度。

示例：

let target: mapCommon.LatLng = { latitude: 31, longitude: 118 };
let animation: map.TranslateAnimation = new map.TranslateAnimation(target);

---
*2026-04-22T15:54:00.355Z*