# MassPointOverlayCallback

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `map-map-masspointoverlaycallback`

**DocID**: `04d89ddceeb94cd0929ca61990cd59c1`

**NodeID**: `000201775795946267346ccb5d6886c5`

---

MassPointOverlayCallback

MassPointOverlayCallback

type MassPointOverlayCallback = (massPointOverlay: MassPointOverlay, massPointItem: mapCommon.MassPointItem) => void

无返回结果的回调函数，用于监听海量点图层的点击事件。

模型约束：
此接口仅可在Stage模型下使用。

元服务API：
从版本6.0.0(20)开始，该接口支持在元服务中使用。

系统能力：
SystemCapability.Map.Core

起始版本：
6.0.0(20)

参数
：

名称

类型

必填

说明

massPointOverlay

MassPointOverlay

是

海量点管理对象。

massPointItem

mapCommon.MassPointItem

是

海量点列表。

---
*2026-04-22T15:54:00.367Z*