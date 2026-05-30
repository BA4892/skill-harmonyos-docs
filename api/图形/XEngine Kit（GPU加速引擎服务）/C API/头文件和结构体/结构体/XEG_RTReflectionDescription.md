# XEG_RTReflectionDescription

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `xengine-kit-xeg-rtreflectiondescription`

**DocID**: `beb53004f3d84274a617c1082082f486`

**NodeID**: `000201775795874920323a36cca66494`

---

XEG_RTReflectionDescription

概述

此结构体描述下发光线求交命令时的输入信息。

起始版本：
 6.0.0(20)

相关模块： 

XEngine

所在头文件：

xeg_vulkan_rt_reflection.h

汇总

[h2]成员变量

名称

描述

XEG_StructureType 
sType

识别此结构的
XEG_StructureType
值，必须是XEG_STRUCTURE_TYPE_RT_REFLECTION_DESCRIPTION。

const void * 
pNext

指向扩展结构的指针。

VkImageView 
inputRayOriginImage

光线原点图像，不能为空。格式必须是至少3通道的float类型，RGB通道分别存储原点的xyz坐标。

VkImageView 
inputRayDirectionImage

光线方向图像，不能为空。格式必须是至少3通道的float类型，RGB通道分别存储方向的xyz坐标。 如果格式为有符号的float类型，不做特殊处理，如果格式为无符号的float类型，方向信息需要按照以下方式量化：direction = (direction + 1.0) / 2.0 。

VkImageView 
outputReflectionInfoImage

输出的反射光线求交结果，格式必须为R32G32B32A32_UINT。求交结果会将光线追踪最近的命中信息打包成128bit，解析方式参考结构体成员变量说明中
outputReflectionInfoImage
描述。

VkAccelerationStructureKHR 
accelerationStructure

场景的光线追踪加速结构。

float 
rayMin

光线起点到最近可能相交点之间的最小距离。必须为非负值，且小于等于rayMax。

float 
rayMax

光线起点到最远可能相交点之间的最大距离。超出此范围的任何相交都将被忽略。

uint32_t 
reflectionCullMask

配置光线查询
rayQueryInitializeEXT
函数中的rayFlags和cullMask参数。高24bit表示rayFlags，低8bit表示cullMask。

结构体成员变量说明

[h2]accelerationStructure

VkAccelerationStructureKHR XEG_RTReflectionDescription::accelerationStructure

描述

场景的光线追踪加速结构。

[h2]inputRayDirectionImage

VkImageView XEG_RTReflectionDescription::inputRayDirectionImage

描述

光线方向图像，不能为空。格式必须是至少3通道的float类型，RGB通道分别存储方向的xyz坐标。 如果格式为有符号的float类型，不做特殊处理，如果格式为无符号的float类型，方向信息需要按照以下方式量化：direction = (direction + 1.0) / 2.0 。

[h2]inputRayOriginImage

VkImageView XEG_RTReflectionDescription::inputRayOriginImage

描述

光线原点图像，不能为空。格式必须是至少3通道的float类型，RGB通道分别存储原点的xyz坐标。

[h2]outputReflectionInfoImage

VkImageView XEG_RTReflectionDescription::outputReflectionInfoImage

描述

输出的反射光线求交结果，格式必须为R32G32B32A32_UINT。求交结果会将光线追踪最近的命中信息打包成128bit，解析方式如下：

uint raymiss = outputReflectionInfoImage.x & 1;
uint primitiveId = (outputReflectionInfoImage.x >> 1) & (0x3ffff);
uint instanceId = outputReflectionInfoImage.x >> 19;
vec2 barycentrics = unpackHalf2x16(outputReflectionInfoImage.z);
float hitT = uintBitsToFloat(outputReflectionInfoImage.w);
uint sbtOffest = (outputReflectionInfoImage.y >> 16);
uint geomtryIndex = (outputReflectionInfoImage.y) & 0xffff;

[h2]pNext

const void* XEG_RTReflectionDescription::pNext

描述

指向扩展结构的指针。

[h2]rayMax

float XEG_RTReflectionDescription::rayMax

描述

光线起点到最远可能相交点之间的最大距离。超出此范围的任何相交都将被忽略。

[h2]rayMin

float XEG_RTReflectionDescription::rayMin

描述

光线起点到最近可能相交点之间的最小距离。必须为非负值，且小于等于rayMax。

[h2]reflectionCullMask

uint32_t XEG_RTReflectionDescription::reflectionCullMask

描述

配置光线查询
rayQueryInitializeEXT
函数中的rayFlags和cullMask参数。高24bit表示rayFlags，低8bit表示cullMask。

[h2]sType

XEG_StructureType XEG_RTReflectionDescription::sType

描述

识别此结构的
XEG_StructureType
值，必须是XEG_STRUCTURE_TYPE_RT_REFLECTION_DESCRIPTION。

---
*2026-04-22T15:55:04.035Z*