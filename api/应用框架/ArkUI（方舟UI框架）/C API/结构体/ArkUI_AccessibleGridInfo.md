# ArkUI_AccessibleGridInfo

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-arkui-accessibility-arkui-accessiblegridinfo`

**DocID**: `728f43bb3268467ab5e867761b32bc05`

**NodeID**: `000201775796216197280f4d29c5860e`

---

ArkUI_AccessibleGridInfo

typedef struct {...} ArkUI_AccessibleGridInfo

概述

用于配置特定组件（如
List
、
Flex
、
Select
、
Swiper
组件）的网格布局属性。

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

int32_t rowCount

组件的行数。取值范围为大于0的整数。

int32_t columnCount

组件的列数。取值范围为大于0的整数。

int32_t selectionMode

值为0时表示仅选中网格的一行，非0值时表示选中网格的多行。

---
*2026-04-22T15:55:02.246Z*