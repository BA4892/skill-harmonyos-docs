# USBSerialDdk

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-serialddk`

**DocID**: `e1308b0d5de242ddab021e96397460d6`

**NodeID**: `000201775796341684897e1f0a8dab66`

---

USBSerialDdk

概述

提供USB Serial DDK接口，包括枚举类型和USB Serial DDK API使用的数据结构。工业用途及一些老旧设备会使用到串口通信，如：发卡机、身份证读卡器等。通过构建USB Serial DDK，支持外设扩展驱动基于USB Serial DDK开发非标外设扩展驱动。

系统能力：
 SystemCapability.Driver.UsbSerial.Extension

起始版本：
 18

文件汇总

名称

描述

usb_serial_api.h

声明用于主机侧访问串口设备的USB Serial DDK接口。

usb_serial_types.h

提供USB Serial DDK中的枚举变量、结构体定义与宏定义。

---
*2026-04-22T15:53:59.466Z*