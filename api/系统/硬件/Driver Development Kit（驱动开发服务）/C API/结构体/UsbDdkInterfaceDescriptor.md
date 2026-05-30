# UsbDdkInterfaceDescriptor

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-usbddk-usbddkinterfacedescriptor`

**DocID**: `82c40168c0f94d8eb54bcaafda075f51`

**NodeID**: `000201775796341685110919b3a2e9e9`

---

UsbDdkInterfaceDescriptor

typedef struct UsbDdkInterfaceDescriptor {...} UsbDdkInterfaceDescriptor

概述

接口描述符。

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

struct UsbInterfaceDescriptor interfaceDescriptor

标准接口描述符。

struct UsbDdkEndpointDescriptor* endPoint

该接口所包含的端点描述符。

const uint8_t* extra

未做解析的描述符，包含特定于类或供应商的描述符。

uint32_t extraLength

未做解析的描述符长度。

---
*2026-04-22T15:55:03.278Z*