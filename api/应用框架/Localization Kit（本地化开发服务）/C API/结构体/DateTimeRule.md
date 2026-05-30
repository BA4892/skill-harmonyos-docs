# DateTimeRule

> **分区**: API参考  |  **Slug**: `capi-i18n-datetimerule`  |  **DocID**: `c7301193acd74950ad536effefc6ddc6`

---

# DateTimeRule

 ```
typedef struct DateTimeRule {...} DateTimeRule
```
  #### 概述

时间日期规则。

 **起始版本：** 22

 **相关模块：** [i18n](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-i18n)

 **所在头文件：** [timezone.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-timezone-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   int32_t month 月份。  int32_t dayOfMonth 当月的第几天。  int32_t dayOfWeek 当周的第几天。  int32_t weekInMonth 当月的第几周。  int32_t millisInDay 从当天凌晨0点开始到当前时间的毫秒值。  [DateRuleType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-timezone-h#dateruletype) dateRuleType 日期规则类型。  [TimeRuleType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-timezone-h#timeruletype) timeRuleType 时间规则类型。

---
*Updated: 2026-04-22 06:44:18*
