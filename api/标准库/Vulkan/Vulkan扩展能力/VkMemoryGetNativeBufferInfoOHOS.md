# VkMemoryGetNativeBufferInfoOHOS

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-vulkan-vkmemorygetnativebufferinfoohos`

**DocID**: `9fa041899950474ca214162197b3db82`

**NodeID**: `000201775796219738811ef506df31c8`

---

VkMemoryGetNativeBufferInfoOHOS

typedef struct VkMemoryGetNativeBufferInfoOHOS {...} VkMemoryGetNativeBufferInfoOHOS

概述

用于从Vulkan内存中获取OH_NativeBuffer。

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

结构体类型，值必须为VK_STRUCTURE_TYPE_MEMORY_GET_NATIVE_BUFFER_INFO_OHOS。

const void* pNext

下一级结构体指针，值必须为空。

VkDeviceMemory memory

VkDeviceMemory对象，值必须为一个有效的VkDeviceMemory对象。

---
*2026-04-22T15:55:04.599Z*