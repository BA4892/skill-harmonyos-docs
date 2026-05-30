# TimeArrayTimeZoneRule

> **分区**: API参考  |  **Slug**: `capi-i18n-timearraytimezonerule`  |  **DocID**: `4950f3afbb59459c8f7c02be2cf74b22`

---

# TimeArrayTimeZoneRule

 ```
typedef struct TimeArrayTimeZoneRule {...} TimeArrayTimeZoneRule
```
  #### 概述

起始时间戳数组定义的时区规则。

 **起始版本：** 22

 **相关模块：** [i18n](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-i18n)

 **所在头文件：** [timezone.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-timezone-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char* name 时区规则的名称。  int32_t rawOffset 时区的原始偏移量。  int32_t dstSavings 夏令时的偏移量。  double* startTimes 规则生效的起始时间戳数组。  int32_t numStartTimes 规则生效的起始时间戳数组的大小。  [TimeRuleType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-timezone-h#timeruletype) timeRuleType 时间规则类型。

---
*Updated: 2026-04-22 06:44:38*
