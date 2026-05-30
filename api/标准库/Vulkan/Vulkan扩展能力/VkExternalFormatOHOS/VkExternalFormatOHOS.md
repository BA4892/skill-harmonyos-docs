# VkExternalFormatOHOS

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-vulkan-vkexternalformatohos`

**DocID**: `ca577237325a4672876734f011068291`

**NodeID**: `000201775796219738812c32bb168e81`

---

VkExternalFormatOHOS

typedef struct VkExternalFormatOHOS {...} VkExternalFormatOHOS

概述

表示外部定义的格式标识符。

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

结构体类型，值必须为VK_STRUCTURE_TYPE_EXTERNAL_FORMAT_OHOS。

void* pNext

pNext为空或者下一级结构体指针。

uint64_t externalFormat

外部定义的格式标识符。

---
*2026-04-22T15:54:00.671Z*