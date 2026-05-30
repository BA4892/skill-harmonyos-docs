# AnnualTimeZoneRule

> **分区**: API参考  |  **Slug**: `capi-i18n-annualtimezonerule`  |  **DocID**: `5044c2eabcea4392864fb73bd4b0e112`

---

# AnnualTimeZoneRule

 ```
typedef struct AnnualTimeZoneRule {...} AnnualTimeZoneRule
```
  #### 概述

每年生效的时区规则。

 **起始版本：** 22

 **相关模块：** [i18n](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-i18n)

 **所在头文件：** [timezone.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-timezone-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char* name 时区规则的名称。  int32_t startYear 时区规则生效的起始年份。  int32_t endYear 时区规则生效的终止年份。  int32_t rawOffset 时区的原始偏移量。  int32_t dstSavings 夏令时的偏移量。  [DateTimeRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-i18n-datetimerule) dateTimeRule 时间日期规则。

---
*Updated: 2026-04-22 06:44:42*
