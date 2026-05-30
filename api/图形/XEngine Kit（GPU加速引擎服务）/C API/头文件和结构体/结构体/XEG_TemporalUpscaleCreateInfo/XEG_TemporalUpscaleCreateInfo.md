# XEG_TemporalUpscaleCreateInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `xengine-kit-xeg-temporalupscalecreateinfo`

**DocID**: `3e90eff94c3f42dfbe2490df53bdb81c`

**NodeID**: `0002017757958749203373b94731cd1a`

---

XEG_TemporalUpscaleCreateInfo

概述

此结构体描述创建
XEG_TemporalUpscale
对象的信息。当结构体中的信息变化时，需要创建新的
XEG_TemporalUpscale
对象。

起始版本：
 5.0.0(12)

相关模块： 

XEngine

所在头文件：

xeg_vulkan_temporal_upscale.h

汇总

[h2]成员变量

名称

描述

VkExtent2D 
inputSize

输入图像的尺寸。支持的最大尺寸为2048 * 1024。

VkExtent2D 
outputSize

输出图像的尺寸。

VkRect2D 
outputRegion

超分输出图像区域。

VkFormat 
outputFormat

输出图像的格式。

int 
jitterNum

相机抖动的周期数，取值范围为[4, 16]，推荐8。

bool 
isDepthReversed

是否存在深度反转，如果使用0.0表示最远深度则需要设置此参数值为true，否则设置为false。

结构体成员变量说明

[h2]inputSize

VkExtent2D XEG_TemporalUpscaleCreateInfo::inputSize

描述

输入图像的尺寸。支持的最大尺寸为2048 * 1024。

[h2]isDepthReversed

bool XEG_TemporalUpscaleCreateInfo::isDepthReversed

描述

是否存在深度反转，如果使用0.0表示最远深度则需要设置此参数值为true，否则设置为false。

[h2]jitterNum

int XEG_TemporalUpscaleCreateInfo::jitterNum

描述

相机抖动的周期数，取值范围为[4, 16]，推荐8。

[h2]outputFormat

VkFormat XEG_TemporalUpscaleCreateInfo::outputFormat

描述

输出图像的格式。

[h2]outputRegion

VkRect2D XEG_TemporalUpscaleCreateInfo::outputRegion

描述

超分输出图像区域。

[h2]outputSize

VkExtent2D XEG_TemporalUpscaleCreateInfo::outputSize

描述

输出图像的尺寸。

---
*2026-04-22T15:54:00.198Z*