# FG_ResolutionInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_g___resolution_info`

**DocID**: `a48c19fb0baa4606816771c90a1c2afb`

**NodeID**: `00020177579587492031637ce6f88f0c`

---

FG_ResolutionInfo

概述

此结构体描述超帧输入输出图像的分辨率。

起始版本：
 5.0.0(12)

相关模块：

GraphicsAccelerate

汇总

[h2]成员变量

名称

描述

FG_Dimension2D

inputColorResolution

真实渲染帧颜色缓冲区分辨率。

FG_Dimension2D

inputDepthStencilResolution

真实渲染帧深度模板缓冲区分辨率。当设置成0时, 系统中会默认使用
inputColorResolution
作为真实帧深度模板缓冲区分辨率。

FG_Dimension2D

outputColorResolution

预测帧缓冲区分辨率。当设置成0时, 系统中会默认使用
inputColorResolution
作为预测帧缓冲区分辨率。

结构体成员变量说明

[h2]inputColorResolution

FG_Dimension2D
 FG_ResolutionInfo::inputColorResolution

描述

真实渲染帧颜色缓冲区分辨率。

[h2]inputDepthStencilResolution

FG_Dimension2D
 FG_ResolutionInfo::inputDepthStencilResolution

描述

真实渲染帧深度模板缓冲区分辨率。当设置成0时, 系统中会默认使用
inputColorResolution
作为真实帧深度模板缓冲区分辨率。

[h2]outputColorResolution

FG_Dimension2D
 FG_ResolutionInfo::outputColorResolution

描述

预测帧缓冲区分辨率。当设置成0时, 系统中会默认使用
inputColorResolution
作为预测帧缓冲区分辨率。

---
*2026-04-22T15:54:00.154Z*