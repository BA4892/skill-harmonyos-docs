# UsbDdkConfigDescriptor

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-usbddk-usbddkconfigdescriptor`

**DocID**: `6ee8c17820fa4b5987baa79b71ab39b3`

**NodeID**: `0002017757963416851145dba9bcdfd8`

---

UsbDdkConfigDescriptor

typedef struct UsbDdkConfigDescriptor {...} UsbDdkConfigDescriptor

概述

配置描述符。

起始版本：
 10

相关模块：

UsbDDK

所在头文件：

usb_ddk_types.h

汇总

[h2]成员变量

名称

描述

struct UsbConfigDescriptor configDescriptor

标准配置描述符。

struct UsbDdkInterface* interface

该配置所包含的接口。

const uint8_t* extra

未做解析的描述符，包含特定于类或供应商的描述符。

uint32_t extraLength

未做解析的描述符长度。

---
*2026-04-22T15:53:59.493Z*