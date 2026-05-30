# RawFileDescriptor64

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-rawfile-rawfiledescriptor64`

**DocID**: `dfe4735d1cb540538f8cbc4c623ab33c`

**NodeID**: `000201775796216196698f15dd449dc8`

---

RawFileDescriptor64

typedef struct {...} RawFileDescriptor64

概述

提供较大rawfile文件描述符信息。RawFileDescriptor64是
OH_ResourceManager_GetRawFileDescriptor64
的输出参数,涵盖了rawfile文件的文件描述符以及在HAP包中的起始位置和长度。

起始版本：
 11

相关模块：

rawfile

所在头文件：

raw_file.h

汇总

[h2]成员变量

名称

描述

int fd

rawfile文件描述符，单位为int。

int64_t start

rawfile在HAP包中的起始位置，单位为int64_t。

int64_t length

rawfile在HAP包中的长度，单位为int64_t。

---
*2026-04-22T15:53:58.913Z*