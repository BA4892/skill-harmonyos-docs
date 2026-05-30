# ArkUI_AccessibleGridItemInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `i-arkui-accessibility-arkui-accessiblegriditeminfo`

**DocID**: `c18fb698fbcc48cb96e5f0a16f1d0efc`

**NodeID**: `0002017757962161972837e37e10b043`

---

ArkUI_AccessibleGridItemInfo

typedef struct {...} ArkUI_AccessibleGridItemInfo

概述

用于配置特定组件（
List
、
Flex
、
Select
、
Swiper
组件）的属性值。

起始版本：
 13

相关模块：

ArkUI_Accessibility

所在头文件：

native_interface_accessibility.h

汇总

[h2]成员变量

名称

描述

bool heading

是否是标题。true表示是标题，false表示不是标题。

bool selected

是否被选中。true表示被选中，false表示未被选中。

int32_t columnIndex

列下标。取值范围为大于0的整数。

int32_t rowIndex

行下标。取值范围为大于0的整数。

int32_t columnSpan

列跨度。取值范围为大于0的整数。

int32_t rowSpan

行跨度。取值范围为大于0的整数。

---
*2026-04-22T15:53:58.615Z*