# XEG_RTReflectionCreateInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `xengine-kit-xeg-rtreflectioncreateinfo`

**DocID**: `e8080f8fab554941aa3fad3841f5da4f`

**NodeID**: `000201775795874920318ed7340d8f16`

---

XEG_RTReflectionCreateInfo

概述

此结构体描述创建
XEG_RTReflection
对象的信息。当结构体中的信息变化时，需要创建新的
XEG_RTReflection
对象。

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
值，必须是XEG_STRUCTURE_TYPE_RT_REFLECTION_CREATE_INFO。

const void * 
pNext

指向扩展结构的指针。

VkExtent2D 
renderSize

输入图像的尺寸。

bool 
enableFastTrace

是否开启快速求交模式，相较常规求交模式，快速求交模式的性能更好。true表示开启快速求交模式，false表示使用常规求交模式。

结构体成员变量说明

[h2]enableFastTrace

bool XEG_RTReflectionCreateInfo::enableFastTrace

描述

是否开启快速求交模式，相较常规求交模式，快速求交模式的性能更好。true表示开启快速求交模式，false表示使用常规求交模式。

[h2]pNext

const void* XEG_RTReflectionCreateInfo::pNext

描述

指向扩展结构的指针。

[h2]renderSize

VkExtent2D XEG_RTReflectionCreateInfo::renderSize

描述

输入图像的尺寸。

[h2]sType

XEG_StructureType XEG_RTReflectionCreateInfo::sType

描述

识别此结构的
XEG_StructureType
值，必须是XEG_STRUCTURE_TYPE_RT_REFLECTION_CREATE_INFO。

---
*2026-04-22T15:54:00.193Z*