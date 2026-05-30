# TimeZoneRuleQuery

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-i18n-timezonerulequery`

**DocID**: `dd5d0d076edc4e299ac555757ae11c87`

**NodeID**: `000201775796216197048e2511a27eca`

---

TimeZoneRuleQuery

typedef struct TimeZoneRuleQuery {...} TimeZoneRuleQuery

概述

用于传入查询的信息，并接收查询的结果。

起始版本：
 22

相关模块：

i18n

所在头文件：

timezone.h

汇总

[h2]成员变量

名称

描述

double base

查询的基准时间。

int32_t prevRawOffset

上一次的时区原始偏移量。

int32_t prevDSTSavings

上一次的夏令时偏移量。

bool inclusive

查询结果是否包含基准时间。true：查询结果包含基准时间；false：查询结果不包含基准时间。

double result

查询结果。

---
*2026-04-22T15:55:02.592Z*