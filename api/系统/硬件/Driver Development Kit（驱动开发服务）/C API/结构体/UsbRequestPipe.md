# UsbRequestPipe

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-usbddk-usbrequestpipe`

**DocID**: `cdd405995c1d430f85db81136bfec8fe`

**NodeID**: `0002017757963416851178f9310ad3b8`

---

UsbRequestPipe

typedef struct UsbRequestPipe {...} __attribute__((aligned(8))) UsbRequestPipe

概述

请求管道。

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

uint64_t interfaceHandle

接口操作句柄。

uint8_t endpoint

要通信的端点的地址。

uint32_t timeout

超时时间，单位是毫秒。

---
*2026-04-22T15:55:03.280Z*