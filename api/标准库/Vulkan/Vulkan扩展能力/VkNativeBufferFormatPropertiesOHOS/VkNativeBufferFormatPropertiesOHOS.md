# VkNativeBufferFormatPropertiesOHOS

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-vulkan-vknativebufferformatpropertiesohos`

**DocID**: `59f1b6a6ad7a4662923166e67d4c4fbf`

**NodeID**: `000201775796219738809fb761954dbc`

---

VkNativeBufferFormatPropertiesOHOS

typedef struct VkNativeBufferFormatPropertiesOHOS {...} VkNativeBufferFormatPropertiesOHOS

概述

包含了NativeBuffer的一些格式属性。

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

void* pNext

下一级结构体指针。

VkFormat format

格式说明。

uint64_t externalFormat

外部定义的格式标识符。

VkFormatFeatureFlags formatFeatures

描述了与externalFormat对应的能力。

VkComponentMapping samplerYcbcrConversionComponents

表示一组VkComponentSwizzle。

VkSamplerYcbcrModelConversion suggestedYcbcrModel

色彩模型。

VkSamplerYcbcrRange suggestedYcbcrRange

色彩数值范围。

VkChromaLocation suggestedXChromaOffset

X色度偏移。

VkChromaLocation suggestedYChromaOffset

Y色度偏移。

---
*2026-04-22T15:54:00.669Z*