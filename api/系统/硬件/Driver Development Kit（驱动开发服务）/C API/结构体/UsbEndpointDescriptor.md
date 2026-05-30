# UsbEndpointDescriptor

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-usbddk-usbendpointdescriptor`

**DocID**: `b8335ba82f6e4f44858949869cd310d2`

**NodeID**: `0002017757963416851071991feed995`

---

UsbEndpointDescriptor

typedef struct UsbEndpointDescriptor {...} __attribute__((packed)) UsbEndpointDescriptor

概述

标准端点描述符，对应USB协议中Standard Endpoint Descriptor。

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

uint8_t bLength

该描述符的大小，单位为字节。

uint8_t bDescriptorType

描述符类型。

uint8_t bEndpointAddress

端点地址，包含端点编号以及端点方向。

uint8_t bmAttributes

端点属性，包括传输类型、同步类型、使用类型。

uint16_t wMaxPacketSize

该端点所能承载的最大包的大小。

uint8_t bInterval

数据传输轮询端点的时间间隔。

uint8_t bRefresh

用于音频类设备，同步反馈的速率。

uint8_t bSynchAddress

用于音频类设备，同步端点的地址。

---
*2026-04-22T15:55:03.276Z*