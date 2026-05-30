# format.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-format-h`

**DocID**: `2372bc827ea546118a6ee22303ba46fe`

**NodeID**: `000201775795857640756b9900b8cfaa`

---

format.h

概述

提供张量数据的排列格式。

引用文件：
 <mindspore/format.h>

库：
 libmindspore_lite_ndk.so

系统能力：
 SystemCapability.Ai.MindSpore

起始版本：
 9

相关模块：

MindSpore

汇总

[h2]枚举

名称

typedef关键字

描述

OH_AI_Format

OH_AI_Format

MSTensor保存的数据支持的排列格式。

枚举类型说明

[h2]OH_AI_Format

enum OH_AI_Format

描述

MSTensor保存的数据支持的排列格式。

起始版本：
 9

枚举项

描述

OH_AI_FORMAT_NCHW = 0

按批次N、通道C、高度H和宽度W的顺序存储张量数据。

OH_AI_FORMAT_NHWC = 1

按批次N、高度H、宽度W和通道C的顺序存储张量数据。

OH_AI_FORMAT_NHWC4 = 2

按批次N、高度H、宽度W和通道C的顺序存储张量数据，其中C轴是4字节对齐格式。

OH_AI_FORMAT_HWKC = 3

按高度H、宽度W、核数K和通道C的顺序存储张量数据。

OH_AI_FORMAT_HWCK = 4

按高度H、宽度W、通道C和核数K的顺序存储张量数据。

OH_AI_FORMAT_KCHW = 5

按核数K、通道C、高度H和宽度W的顺序存储张量数据。

OH_AI_FORMAT_CKHW = 6

按通道C、核数K、高度H和宽度W的顺序存储张量数据。

OH_AI_FORMAT_KHWC = 7

按核数K、高度H、宽度W和通道C的顺序存储张量数据。

OH_AI_FORMAT_CHWK = 8

按通道C、高度H、宽度W和核数K的顺序存储张量数据。

OH_AI_FORMAT_HW = 9

按高度H和宽度W的顺序存储张量数据。

OH_AI_FORMAT_HW4 = 10

按高度H和宽度W的顺序存储张量数据，其中W轴是4字节对齐格式。

OH_AI_FORMAT_NC = 11

按批次N和通道C的顺序存储张量数据。

OH_AI_FORMAT_NC4 = 12

按批次N和通道C的顺序存储张量数据，其中C轴是4字节对齐格式。

OH_AI_FORMAT_NC4HW4 = 13

按批次N、通道C、高度H和宽度W的顺序存储张量数据，其中C轴和W轴是4字节对齐格式。

OH_AI_FORMAT_NCDHW = 15

按批次N、通道C、深度D、高度H和宽度W的顺序存储张量数据。

OH_AI_FORMAT_NWC = 16

按批次N、宽度W和通道C的顺序存储张量数据。

OH_AI_FORMAT_NCW = 17

按批次N、通道C和宽度W的顺序存储张量数据。

---
*2026-04-22T15:54:00.592Z*