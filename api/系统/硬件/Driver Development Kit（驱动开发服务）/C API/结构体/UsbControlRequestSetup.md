# UsbControlRequestSetup

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-usbddk-usbcontrolrequestsetup`

**DocID**: `c7e463baa53b431fa33d24f67b934a70`

**NodeID**: `00020177579634168509916ce3d64051`

---

UsbControlRequestSetup

typedef struct UsbControlRequestSetup {...} __attribute__((aligned(8))) UsbControlRequestSetup

概述

控制传输setup包，对应USB协议中的Setup Data。

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

uint8_t bmRequestType

请求类型。

uint8_t bRequest

具体的请求。

uint16_t wValue

具体的请求不同，其代表的含义不一样。

uint16_t wIndex

具体的请求不同，其代表的含义不一样，通常用来传递索引或者偏移量。

uint16_t wLength

如果有数据阶段的传输，其代表传输的字节个数。

---
*2026-04-22T15:55:03.274Z*