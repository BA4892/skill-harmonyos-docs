# OH_Drawing_String

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drawing-oh-drawing-string`

**DocID**: `1862412979d948098b0cd6c8e577de7a`

**NodeID**: `00020177579587492017983112425fdc`

---

OH_Drawing_String

typedef struct {...} OH_Drawing_String

概述

采用UTF-16编码的字符串信息结构体。

起始版本：
 14

相关模块：

Drawing

所在头文件：

drawing_types.h

汇总

[h2]成员变量

名称

描述

uint8_t* strData

指向包含UTF-16编码的字节数组的指针。

uint32_t strLen

strData指向的字符串的实际长度，单位为字节。

---
*2026-04-22T15:55:03.914Z*