# xeg_vulkan_extension.h

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-vulkan-extension-8h`  |  **DocID**: `d72b88c2ab91437cb7b0e60b2e60faa5`

---

# xeg_vulkan_extension.h

  #### 概述

XEngine扩展特性查询接口（Vulkan）。

 **引用文件**：<xengine/xeg_vulkan_extension.h>

 **库：** libxengine.so

 **系统能力：** SystemCapability.Graphic.XEngine

 **起始版本：** 5.0.0(12)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

   #### 汇总

  #### [h2]结构体

 名称 描述   struct  [XEG_ExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extensionproperties) 此结构体描述通过[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询到的XEngine扩展特性集合。       #### [h2]宏定义

 名称 描述   [XEG_MAX_EXTENSION_NAME_SIZE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_max_extension_name_size)   256 XEngine扩展特性名称支持的最大长度。       #### [h2]类型定义

 名称 描述   typedef struct [XEG_ExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extensionproperties) XEG_ExtensionProperties 此结构体描述通过[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询到的XEngine扩展特性集合。  typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_enumeratedeviceextensionproperties)) (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, [XEG_ExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extensionproperties) *pProperties) XEngine Vulkan扩展特性查询接口函数指针定义。       #### [h2]函数

 名称 描述   VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties) (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, [XEG_ExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extensionproperties) *pProperties) XEngine Vulkan扩展特性查询接口。

---
*Updated: 2026-04-22 06:40:38*
