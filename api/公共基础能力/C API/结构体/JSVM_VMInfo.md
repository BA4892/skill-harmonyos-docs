# JSVM_VMInfo

> **分区**: API参考  |  **Slug**: `capi-jsvm-jsvm-vminfo`  |  **DocID**: `e1f83219a38a4eea93d5ae92a8e1bdfb`

---

# JSVM_VMInfo

 ```
typedef struct {...} JSVM_VMInfo
```
  #### 概述

JavaScript虚拟机信息。

 **起始版本：** 11

 **相关模块：** [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

 **所在头文件：** [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   uint32_t apiVersion 此虚拟机支持的最高API版本。  const char* engine 实现虚拟机的引擎名称。  const char* version 虚拟机的版本。  uint32_t cachedDataVersionTag 缓存数据版本标签。

---
*Updated: 2026-04-22 06:40:23*
