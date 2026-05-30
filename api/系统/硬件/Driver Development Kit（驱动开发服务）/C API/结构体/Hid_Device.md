# Hid_Device

> **分区**: API参考  |  **Slug**: `capi-hidddk-hid-device`  |  **DocID**: `4445074107d34b38b897149257153e9e`

---

# Hid_Device

 ```
typedef struct Hid_Device {...} Hid_Device
```
  #### 概述

设备基本信息。

 **起始版本：** 11

 **相关模块：** [HidDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidddk)

 **所在头文件：** [hid_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   const char* deviceName 设备名称  uint16_t vendorId 厂商ID  uint16_t productId 产品ID  uint16_t version 版本号  uint16_t bustype 总线类型  Hid_DeviceProp* properties 由[Hid_DeviceProp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h#hid_deviceprop)表示的设备特性  uint16_t propLength 设备特性数量

---
*Updated: 2026-04-22 06:48:46*
