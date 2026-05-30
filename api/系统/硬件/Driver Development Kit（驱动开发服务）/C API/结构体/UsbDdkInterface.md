# UsbDdkInterface

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-usbddk-usbddkinterface`

**DocID**: `ff3702bbdb4d46c6ace272468e2ba0ea`

**NodeID**: `000201775796341685113819a4c2c33e`

---

UsbDdkInterface

typedef struct UsbDdkInterface {...} UsbDdkInterface

概述

USB接口，是特定接口下备用设置的集合。

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

uint8_t numAltsetting

接口的备用设置数量。

struct UsbDdkInterfaceDescriptor* altsetting

接口的备用设置。

---
*2026-04-22T15:55:03.278Z*