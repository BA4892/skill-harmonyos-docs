# OH_Drawing_FontAliasInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-drawing-oh-drawing-fontaliasinfo`

**DocID**: `af148aa5e49b44c0b53c8800eeb0cbab`

**NodeID**: `0002017757958749201553f9df994124`

---

OH_Drawing_FontAliasInfo

typedef struct OH_Drawing_FontAliasInfo {...} OH_Drawing_FontAliasInfo

概述

别名字体信息结构体。

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

int weight

字体字重值，当字重值大于0时，表示此字体集只包含所指定weight的字体，当字重值等于0时，表示此字体集包含所有字体。

---
*2026-04-22T15:55:03.907Z*