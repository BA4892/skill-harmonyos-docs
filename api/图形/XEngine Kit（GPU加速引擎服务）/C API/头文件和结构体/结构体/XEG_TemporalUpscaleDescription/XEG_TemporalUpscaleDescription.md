# XEG_TemporalUpscaleDescription

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `xengine-kit-xeg-temporalupscaledescription`

**DocID**: `553e6903d91e49a0b8af7cd95204c6f6`

**NodeID**: `00020177579587492033902c4e3e0daa`

---

XEG_TemporalUpscaleDescription

概述

此结构体描述下发时域AI超分渲染命令时的输入信息。

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

VkImageView 
inputImage

输入图像。

VkImageView 
depthImage

深度图像。

VkImageView 
motionVectorImage

运动矢量图像。运动矢量的计算方式为当前渲染像素的NDC坐标的XY值减去上一帧的NDC坐标的XY值。图像格式需要是VK_FORMAT_R16G16_SFLOAT或更高精度。

VkImageView 
dynamicMaskImage

物体的动态遮罩图像，格式需要是VK_FORMAT_R8_UNORM或其兼容格式。R通道的合法值为0.0，0.2或1.0，其中0.0表示静态物体，0.2表示运动物体如人物，1.0表示特效或半透明物体。

VkImageView 
outputImage

输出图像。

float 
jitterX

相机在X方向上的抖动。

float 
jitterY

相机在Y方向上的抖动。

bool 
resetHistory

是否重置历史帧数据，true表示重置，false表示不重置。在历史帧未使用超分，当前帧开始使用超分的情况下建议设置为true。

float 
steadyLevel

画面偏向当前帧（鬼影少但可能存在闪烁）还是历史帧（鬼影多但是更稳定）的平衡程度。取值范围为[0.0, 1.0]，值越大越偏向历史帧。

结构体成员变量说明

[h2]depthImage

VkImageView XEG_TemporalUpscaleDescription::depthImage

描述

深度图像。

[h2]dynamicMaskImage

VkImageView XEG_TemporalUpscaleDescription::dynamicMaskImage

描述

物体的动态遮罩图像，格式需要是VK_FORMAT_R8_UNORM或其兼容格式。R通道的合法值为0.0，0.2或1.0，其中0.0表示静态物体，0.2表示运动物体如人物，1.0表示特效或半透明物体。

[h2]inputImage

VkImageView XEG_TemporalUpscaleDescription::inputImage

描述

输入图像。

[h2]jitterX

float XEG_TemporalUpscaleDescription::jitterX

描述

相机在X方向上的抖动。

[h2]jitterY

float XEG_TemporalUpscaleDescription::jitterY

描述

相机在Y方向上的抖动。

[h2]motionVectorImage

VkImageView XEG_TemporalUpscaleDescription::motionVectorImage

描述

运动矢量图像。运动矢量的计算方式为当前渲染像素的NDC坐标的XY值减去上一帧的NDC坐标的XY值。图像格式需要是VK_FORMAT_R16G16_SFLOAT或更高精度。

[h2]outputImage

VkImageView XEG_TemporalUpscaleDescription::outputImage

描述

输出图像。

[h2]resetHistory

bool XEG_TemporalUpscaleDescription::resetHistory

描述

是否重置历史帧数据，true表示重置，false表示不重置。在历史帧未使用超分，当前帧开始使用超分的情况下建议设置为true。

[h2]steadyLevel

float XEG_TemporalUpscaleDescription::steadyLevel

描述

画面偏向当前帧（鬼影少但可能存在闪烁）还是历史帧（鬼影多但是更稳定）的平衡程度。取值范围为[0.0, 1.0]，值越大越偏向历史帧。

---
*2026-04-22T15:54:00.199Z*