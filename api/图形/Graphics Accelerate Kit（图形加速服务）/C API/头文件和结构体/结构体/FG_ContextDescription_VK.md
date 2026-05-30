# FG_ContextDescription_VK

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `_f_g___context_description___v_k`

**DocID**: `0b8d1eaf34db49b884a024aaa60230aa`

**NodeID**: `000201775795874920289226564d90b5`

---

FG_ContextDescription_VK

概述

此结构体描述创建超帧上下文实例
FG_Context_VK
所需的属性信息。

起始版本：
 5.0.0(12)

相关模块：

GraphicsAccelerate

汇总

[h2]成员变量

名称

描述

VkInstance 
vkInstance

Vulkan实例，需在
FG_Context_VK
的整个生命周期内有效。

VkPhysicalDevice 
vkPhysicalDevice

Vulkan物理设备句柄, 需在
FG_Context_VK
的整个生命周期内有效。

VkDevice 
vkDevice

Vulkan逻辑设备句柄，需在
FG_Context_VK
的整个生命周期内有效。

uint8_t 
framesInFlight

设置并行渲染图像数。例如，如果下一帧图像需要等待上一帧图像送显后再进行渲染，则framesInFlight应设置为1；如果上一帧图像送显的同时，下一帧图像已经在进行渲染，则framesInFlight应设置为2。注意：framesInFlight不允许设置成0。

取值范围：[1, 2]。

PFN_vkGetInstanceProcAddr 
fnVulkanLoaderFunction

指向Vulkan的vkGetInstanceProcAddr的函数指针，不允许设置为空。

结构体成员变量说明

[h2]fnVulkanLoaderFunction

PFN_vkGetInstanceProcAddr FG_ContextDescription_VK::fnVulkanLoaderFunction

描述

指向Vulkan的vkGetInstanceProcAddr的函数指针，不允许设置为空。

[h2]framesInFlight

uint8_t FG_ContextDescription_VK::framesInFlight

描述

设置并行渲染图像数。 例如，如果下一帧图像需要等待上一帧图像送显后再进行渲染，则framesInFlight应设置为1； 如果上一帧图像送显的同时，下一帧图像已经在进行渲染，则framesInFlight应设置为2。注意：framesInFlight不允许设置成0。

[h2]vkDevice

VkDevice FG_ContextDescription_VK::vkDevice

描述

Vulkan逻辑设备句柄，需在
FG_Context_VK
的整个生命周期内有效。

[h2]vkInstance

VkInstance FG_ContextDescription_VK::vkInstance

描述

Vulkan实例, 需在
FG_Context_VK
的整个生命周期内有效。

[h2]vkPhysicalDevice

VkPhysicalDevice FG_ContextDescription_VK::vkPhysicalDevice

描述

Vulkan物理设备句柄, 需在
FG_Context_VK
的整个生命周期内有效。

---
*2026-04-22T15:55:03.989Z*