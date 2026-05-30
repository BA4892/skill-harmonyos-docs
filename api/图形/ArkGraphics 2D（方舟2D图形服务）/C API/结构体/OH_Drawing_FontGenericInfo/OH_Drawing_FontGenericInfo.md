# OH_Drawing_FontGenericInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drawing-oh-drawing-fontgenericinfo`

**DocID**: `331d8e6ee91f40cca7b72ae541e62c3c`

**NodeID**: `0002017757958749201578eadf365025`

---

OH_Drawing_FontGenericInfo

typedef struct OH_Drawing_FontGenericInfo {...} OH_Drawing_FontGenericInfo

概述

系统所支持的通用字体集信息结构体。

起始版本：
 12

相关模块：

Drawing

所在头文件：

drawing_text_typography.h

汇总

[h2]成员变量

名称

描述

char* familyName

字体家族名。

size_t aliasInfoSize

别名字体列表的数量。

size_t adjustInfoSize

字重映射列表的数量。

OH_Drawing_FontAliasInfo
* aliasInfoSet

别名字体列表。

OH_Drawing_FontAdjustInfo
* adjustInfoSet

字重映射列表。

---
*2026-04-22T15:54:00.081Z*