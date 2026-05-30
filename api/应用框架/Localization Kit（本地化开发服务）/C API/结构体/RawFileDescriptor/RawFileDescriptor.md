# RawFileDescriptor

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-rawfile-rawfiledescriptor`

**DocID**: `9955c17f4a534e348ba5f88504ae2756`

**NodeID**: `000201775796216196618ccca87e5645`

---

RawFileDescriptor

typedef struct {...} RawFileDescriptor

概述

提供rawfile文件描述符信息。RawFileDescriptor是
OH_ResourceManager_GetRawFileDescriptor
的输出参数，涵盖了rawfile文件的文件描述符以及在HAP包中的起始位置和长度。

起始版本：
 8

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

long start

rawfile在HAP包中的起始位置，单位为long。

long length

rawfile在HAP包中的长度，单位为long。

---
*2026-04-22T15:53:58.913Z*