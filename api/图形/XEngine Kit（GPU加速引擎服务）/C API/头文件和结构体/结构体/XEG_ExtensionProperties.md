# XEG_ExtensionProperties

> **分区**: API参考  |  **Slug**: `xengine-kit-xeg-extensionproperties`  |  **DocID**: `caa4ee63bb50475786df73612c5ec7d6`

---

# XEG_ExtensionProperties

  #### 概述

此结构体描述通过[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询到的XEngine扩展特性集合。

 **起始版本：** 5.0.0(12)

 **相关模块：** [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

 **所在头文件：** [xeg_vulkan_extension.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-extension-8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char [extensionName](#extensionname) [[XEG_MAX_EXTENSION_NAME_SIZE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_max_extension_name_size)] XEngine支持的扩展特性名称。  uint32_t [version](#version) XEngine支持的扩展特性版本号。       #### 结构体成员变量说明

  #### [h2]extensionName

char XEG_ExtensionProperties::extensionName[XEG_MAX_EXTENSION_NAME_SIZE] **描述**

 XEngine支持的扩展特性名称。

   #### [h2]version

uint32_t XEG_ExtensionProperties::version **描述**

 XEngine支持的扩展特性版本号。

---
*Updated: 2026-04-22 06:40:38*
