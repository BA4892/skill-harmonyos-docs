# VkNativeBufferOHOS

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-vulkan-vknativebufferohos`

**DocID**: `ba641ae886904644a05bd4e40b06a832`

**NodeID**: `000201775796219738804ee95f28f1e9`

---

VkNativeBufferOHOS

typedef struct VkNativeBufferOHOS {...} VkNativeBufferOHOS

概述

包含本地显存的参数。

起始版本：
 10

相关模块：

Vulkan

所在头文件：

vulkan_ohos.h

汇总

[h2]成员变量

名称

描述

VkStructureType sType

结构体类型。

const void* pNext

下一级结构体指针，pNext为空或者下一级结构体指针。

struct 
OHBufferHandle*
 handle

显存句柄。

---
*2026-04-22T15:54:00.666Z*