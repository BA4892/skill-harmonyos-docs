# ArkUI_GridItemRect

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-arkui-nativemodule-arkui-griditemrect`

**DocID**: `fe5b2b5025f54da3898c2d1a6b9b6055`

**NodeID**: `00020177579621619740788fce2c8dfa`

---

ArkUI_GridItemRect

typedef struct {...} ArkUI_GridItemRect

概述

定义Grid布局选项onGetRectByIndex回调返回值结构体。

起始版本：
 22

相关模块：

ArkUI_NativeModule

所在头文件：

native_type.h

相关示例：

native_type_sample

汇总

[h2]成员变量

名称

描述

uint32_t rowStart

GridItem行起始位置。

uint32_t columnStart

GridItem列起始位置。

uint32_t rowSpan

GridItem占用的行数。

uint32_t columnSpan

GridItem占用的列数。

---
*2026-04-22T15:55:02.328Z*