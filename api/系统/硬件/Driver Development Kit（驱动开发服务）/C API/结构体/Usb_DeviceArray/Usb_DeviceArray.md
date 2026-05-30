# Usb_DeviceArray

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-usbddk-usb-devicearray`

**DocID**: `878b162467514614b5ed3f503e3ff0f9`

**NodeID**: `00020177579634168511991917f1bbfc`

---

Usb_DeviceArray

typedef struct Usb_DeviceArray {...} Usb_DeviceArray

概述

设备ID清单，用于存放OH_Usb_GetDevices接口获取到的设备ID列表和设备数量。

起始版本：
 18

相关模块：

UsbDDK

所在头文件：

usb_ddk_types.h

汇总

[h2]成员变量

名称

描述

uint64_t* deviceIds

开发者申请好的设备ID数组首地址，申请的数组大小建议一般不超过128，以避免过度占用内存。

uint32_t num

实际返回的设备数量，根据数量遍历deviceIds获得设备ID。当该值为0时，表示不存在USB设备。

---
*2026-04-22T15:53:59.495Z*