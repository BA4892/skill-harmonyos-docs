# HiCollie_SetTimerParam

> **分区**: API参考  |  **Slug**: `capi-hicollie-hicollie-settimerparam`  |  **DocID**: `b62a26952e66436cac517f8ecb0302a0`

---

# HiCollie_SetTimerParam

 ```
typedef struct HiCollie_SetTimerParam {...} HiCollie_SetTimerParam
```
  #### 概述

定义OH_HiCollie_SetTimer函数的输入参数。

 **起始版本：** 18

 **相关模块：** [HiCollie](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie)

 **所在头文件：** [hicollie.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   const char *name timer任务名称。  unsigned int timeout 任务超时时间阈值，单位：s。  [OH_HiCollie_Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie-h#oh_hicollie_callback) func 超时发生时执行的回调函数。  void *arg 回调函数的参数。  [HiCollie_Flag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie-h#hicollie_flag) flag 超时发生时执行的动作，参考[HiCollie_Flag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie-h#hicollie_flag)。

---
*Updated: 2026-04-22 06:49:00*
