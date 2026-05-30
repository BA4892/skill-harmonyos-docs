# @performance/timezone-interface-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-timezone-interface-check`  |  **DocID**: `c1d9e8c693f9473088758f5a378297c2`  |  **NodeID**: `00020177579012255857451833b847f5`

---

# @performance/timezone-interface-check

 在获取非本地时间时，建议使用统一标准的i18n.Calendar接口获取时间时区相关信息。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/timezone-interface-check": "suggestion",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例1

```
import i18n from '@ohos.i18n';

let calendar = i18n.getCalendar(i18n.getSystemLocale());
calendar.setTimeZone(i18n.getTimeZone().getID()); 
```
  #### 正例2

```
import i18n from '@ohos.i18n';

let timeZone1 = '123';
let calendar1 = i18n.getCalendar(i18n.getSystemLocale());
calendar1.setTimeZone(timeZone1);
calendar1.get('zone_offset'); 
calendar1.get('dst_offset');
```
  #### 反例1

```
import i18n from '@ohos.i18n';

let timeZone1 = '123';
let calendar1 = i18n.getCalendar(i18n.getSystemLocale());
calendar1.setTimeZone(timeZone1);
//告警，缺少获取dst_offset
calendar1.get('zone_offset'); 
//calendar1.get('dst_offset');
```
  #### 反例2

```
import moment from '@hview/moment';
//告警
moment().utcOffset();
//告警
moment().utcOffset(120);
//告警
moment().utcOffset("+08:00");
//告警
moment().utcOffset(-5, true);
```
  #### 规则集

plugin:@performance/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
