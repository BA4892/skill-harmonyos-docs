# FG_IntegrationInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_g___intergration_info`

**DocID**: `7be7e334890a441593b59c23f7f601af`

**NodeID**: `00020177579587492032413ca00e523a`

---

FG_IntegrationInfo

概述

此结构体描述超帧集成的信息。包括显示模式，是否需要额外缓存深度和颜色纹理，以及是否需要翻转颜色纹理。仅在
FG_PredictionMode
为FG_PREDICTION_MODE_INTERPOLATION时生效。

起始版本
：5.1.0(18)

相关模块：

GraphicsAccelerate

汇总

[h2]成员变量

名称

描述

FG_PresentMode

presentMode

预测帧展示模式。取值为FG_PRESENT_BY_SYSTEM时，仅在
FG_PredictionMode
为FG_PREDICTION_MODE_INTERPOLATION时生效。

bool 
textureCachedByGame

深度纹理和颜色纹理是否被游戏单独缓存来用于超帧。缓存情况下算法将直接使用不再额外缓存。取值为True时，仅在
FG_PredictionMode
为FG_PREDICTION_MODE_INTERPOLATION时生效。

取值范围：[true, false]。

bool 
needFlipInputColor

输入的颜色纹理是否需要翻转。需要翻转情况下，算法映射Y轴坐标读取颜色纹理。取值为True时，仅在
FG_PredictionMode
为FG_PREDICTION_MODE_INTERPOLATION时生效。

取值范围：[true, false]。

bool 
needFlipOutputColor

预测帧是否需要翻转。需要翻转情况下，算法映射Y轴坐标进行翻转输出。取值为True时，仅在
FG_PredictionMode
为FG_PREDICTION_MODE_INTERPOLATION时生效。

取值范围：[true, false]。

结构体成员变量说明

[h2]presentMode

FG_PresentMode
 FG_IntegrationInfo::presentMode

描述

展示模式。

[h2]textureCachedByGame

bool FG_IntegrationInfo::textureCachedByGame

描述

深度纹理和颜色纹理是否被游戏单独缓存来用于超帧。缓存情况下算法将直接使用不再额外缓存。取值为True时，仅在
FG_PredictionMode
为FG_PREDICTION_MODE_INTERPOLATION生效。

[h2]needFlipInputColor

bool FG_IntegrationInfo::needFlipInputColor

描述

输入的颜色纹理是否需要翻转。需要翻转情况下，算法映射Y轴坐标读取颜色纹理。取值为True时，仅在
FG_PredictionMode
为FG_PREDICTION_MODE_INTERPOLATION生效。

[h2]needFlipOutputColor

bool FG_IntegrationInfo::needFlipOutputColor

描述

预测帧是否需要翻转。需要翻转情况下，算法映射Y轴坐标进行翻转输出。取值为True时，仅在
FG_PredictionMode
为FG_PREDICTION_MODE_INTERPOLATION生效。

---
*2026-04-22T15:54:00.156Z*