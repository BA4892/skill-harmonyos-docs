# UsbSerial_Params

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-serialddk-usbserial-params`

**DocID**: `ddfeaa8186684cff9cb0f2457bf9ac43`

**NodeID**: `000201775796341685120efd9a401c1c`

---

UsbSerial_Params

typedef struct UsbSerial_Params {...} __attribute__((aligned(8))) UsbSerial_Params

概述

定义USB Serial DDK使用的USB串口参数.

起始版本：
 18

相关模块：

SerialDdk

所在头文件：

usb_serial_types.h

汇总

[h2]成员变量

名称

描述

uint32_t baudRate

波特率，单位为波特。

uint8_t nDataBits

数据位比特数。

uint8_t nStopBits

停止位比特数。

uint8_t parity

校验参数设置（0：无校验；1：奇校验；2：偶校验；3：1校验；4：0校验；）。

---
*2026-04-22T15:53:59.496Z*