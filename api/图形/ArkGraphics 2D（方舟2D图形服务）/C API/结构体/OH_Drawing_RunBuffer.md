# OH_Drawing_RunBuffer

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drawing-oh-drawing-runbuffer`

**DocID**: `dafa0840179847d2800fa588ee90a424`

**NodeID**: `0002017757958749201338acc8defeb6`

---

OH_Drawing_RunBuffer

typedef struct {...} OH_Drawing_RunBuffer

概述

结构体用于描述一块内存，描述文字和位置信息。

起始版本：
 11

相关模块：

Drawing

所在头文件：

drawing_text_blob.h

汇总

[h2]成员变量

名称

描述

uint16_t* glyphs

存储文字索引。

float* pos

存储文字的位置。

char* utf8text

存储文字UTF-8编码。

uint32_t* clusters

存储文字簇UTF-8编码（簇指的是集合）。

---
*2026-04-22T15:55:03.902Z*