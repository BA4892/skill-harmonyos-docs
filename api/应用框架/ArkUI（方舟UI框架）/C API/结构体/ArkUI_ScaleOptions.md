# ArkUI_ScaleOptions

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-arkui-nativemodule-arkui-scaleoptions`

**DocID**: `864032e5a0d347e7b2d9270773fd827d`

**NodeID**: `0002017757962161973299b53cdd888c`

---

ArkUI_ScaleOptions

typedef struct {...} ArkUI_ScaleOptions

概述

定义组件转场时的缩放效果对象。

起始版本：
 12

相关模块：

ArkUI_NativeModule

所在头文件：

native_type.h

汇总

[h2]成员变量

名称

描述

float x

x轴的缩放倍数。x>1时以x轴方向放大，0<x<1时以x轴方向缩小，x=0时表示在x轴方向缩小成0，x=1时表示在x轴方向缩放倍数是1，x<0时沿x轴反向并缩放。

float y

y轴的缩放倍数。y>1时以y轴方向放大，0<y<1时以y轴方向缩小，y=0时表示在y轴方向缩小成0，y=1时表示在y轴方向缩放倍数是1，y<0时沿y轴反向并缩放。

float z

当前为二维显示，该参数无效。

float centerX

变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标，单位为vp。

float centerY

变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标，单位为vp。

---
*2026-04-22T15:55:02.277Z*