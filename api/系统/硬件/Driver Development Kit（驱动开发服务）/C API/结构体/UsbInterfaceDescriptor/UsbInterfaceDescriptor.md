# UsbInterfaceDescriptor

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-usbddk-usbinterfacedescriptor`

**DocID**: `b0f9261bd03c4110958b7ffe80a974bd`

**NodeID**: `0002017757963416851052f1eb6a712e`

---

UsbInterfaceDescriptor

typedef struct UsbInterfaceDescriptor {...} __attribute__((packed)) UsbInterfaceDescriptor

概述

标准接口描述符，对应USB协议中Standard Interface Descriptor。

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

uint8_t bInterfaceNumber

接口编号。

uint8_t bAlternateSetting

用来选择该接口的备用配置的值。

uint8_t bNumEndpoints

该接口所使用的端点数量（不包括端点零）。

uint8_t bInterfaceClass

由USB标准化组织（USB-IF）分配的设备类代码。

uint8_t bInterfaceSubClass

由USB标准化组织（USB-IF）分配的子类代码，其值由{@link bInterfaceClass}的值限定。

uint8_t bInterfaceProtocol

由USB标准化组织（USB-IF）分配的协议代码，其值由{@link bInterfaceClass}和{@link bInterfaceSubClass}的值限定。

uint8_t iInterface

描述该接口的字符串描述符的索引。

---
*2026-04-22T15:53:59.489Z*