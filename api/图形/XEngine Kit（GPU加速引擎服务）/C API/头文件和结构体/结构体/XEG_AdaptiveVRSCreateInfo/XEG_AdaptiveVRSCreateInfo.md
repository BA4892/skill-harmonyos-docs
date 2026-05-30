# XEG_AdaptiveVRSCreateInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `xengine-kit-xeg-adaptivevrscreateinfo`

**DocID**: `a30873960a0b43bba018ce83c3ac6147`

**NodeID**: `0002017757958749202740482b884820`

---

XEG_AdaptiveVRSCreateInfo

概述

此结构体描述创建
XEG_AdaptiveVRS
对象的参数信息，当结构体中的信息变化时，需要创建新的
XEG_AdaptiveVRS
对象。

起始版本：
 5.0.0(12)

相关模块： 

XEngine

所在头文件：

xeg_vulkan_adaptive_vrs.h

汇总

[h2]成员变量

名称

描述

VkExtent2D 
inputSize

上一帧渲染管线最终渲染的图像尺寸。

VkRect2D 
inputRegion

上一帧渲染管线最终渲染的图像区域。此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为渲染图像区域的左上角点的x与y值，extent为渲染图像区域的宽与高。

int32_t 
adaptiveTileSize

自适应VRS的渲染的分片大小，分片大的情况下性能会更好，但是画质会劣化。当前XEngine Adaptive VRS支持16和8两种规格。

float 
errorSensitivity

控制最终生成着色率纹理结果的阈值。该值越大，平均着色率越小，即性能更好但画质会劣化。取值范围为[0, 1]。

bool 
flip

是否执行图像上下翻转。true表示进行图像上下翻转，false表示不进行图像上下翻转。

结构体成员变量说明

[h2]adaptiveTileSize

int32_t XEG_AdaptiveVRSCreateInfo::adaptiveTileSize

描述

自适应VRS的渲染的分片大小，分片大的情况下性能会更好，但是画质会劣化。当前XEngine Adaptive VRS支持16和8两种规格。

[h2]errorSensitivity

float XEG_AdaptiveVRSCreateInfo::errorSensitivity

描述

控制最终生成着色率纹理结果的阈值。该值越大，平均着色率越小，即性能更好但画质会劣化。取值范围为[0, 1]。

[h2]flip

bool XEG_AdaptiveVRSCreateInfo::flip

描述

是否执行图像上下翻转。true表示进行图像上下翻转，false表示不进行图像上下翻转。

[h2]inputRegion

VkRect2D XEG_AdaptiveVRSCreateInfo::inputRegion

描述

上一帧渲染管线最终渲染的图像区域。此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为渲染图像区域的左上角点的x与y值，extent为渲染图像区域的宽与高。

[h2]inputSize

VkExtent2D XEG_AdaptiveVRSCreateInfo::inputSize

描述

上一帧渲染管线最终渲染的图像尺寸。

---
*2026-04-22T15:54:00.185Z*