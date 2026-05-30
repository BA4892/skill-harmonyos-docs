# VkNativeBufferUsageOHOS

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-vulkan-vknativebufferusageohos`

**DocID**: `989cc790990c4323afa908550a6890cb`

**NodeID**: `0002017757962197388070eb256bd533`

---

VkNativeBufferUsageOHOS

typedef struct VkNativeBufferUsageOHOS {...} VkNativeBufferUsageOHOS

概述

提供HarmonyOS NativeBuffer用途的说明。

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

结构体类型，值必须为VK_STRUCTURE_TYPE_NATIVE_BUFFER_USAGE_OHOS。

void* pNext

下一级结构体指针。

uint64_t OHOSNativeBufferUsage

NativeBuffer的用途说明。

---
*2026-04-22T15:55:04.596Z*