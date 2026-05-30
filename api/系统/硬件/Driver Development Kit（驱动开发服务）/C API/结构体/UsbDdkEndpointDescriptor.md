# UsbDdkEndpointDescriptor

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-usbddk-usbddkendpointdescriptor`

**DocID**: `61216af502f94678827bc3fc4e11a462`

**NodeID**: `000201775796341685108ce0eabef0fc`

---

UsbDdkEndpointDescriptor

typedef struct UsbDdkEndpointDescriptor {...} UsbDdkEndpointDescriptor

概述

端点描述符。

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

struct UsbEndpointDescriptor endpointDescriptor

标准端点描述符。

const uint8_t* extra

未做解析的描述符，包含特定于类或供应商的描述符。

uint32_t extraLength

未做解析的描述符长度。

---
*2026-04-22T15:55:03.277Z*