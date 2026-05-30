# VkSurfaceCreateInfoOHOS

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-vulkan-vksurfacecreateinfoohos`

**DocID**: `5e6aff76459e4b3b840038de85ef1e30`

**NodeID**: `0002017757962197388030b214d41cc3`

---

VkSurfaceCreateInfoOHOS

typedef struct VkSurfaceCreateInfoOHOS {...} VkSurfaceCreateInfoOHOS

概述

包含创建Vulkan Surface时必要的参数。

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

结构体类型，值必须为VK_STRUCTURE_TYPE_SURFACE_CREATE_INFO_OHOS。

const void* pNext

下一级结构体指针，值必须为空。

VkSurfaceCreateFlagsOHOS flags

预留的标志类型参数，值必须为0。

OHNativeWindow
* window

OHNativeWindow指针。

---
*2026-04-22T15:54:00.666Z*