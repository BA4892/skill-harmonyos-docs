# JSVM_DefineClassOptions

> **分区**: API参考  |  **Slug**: `capi-jsvm-jsvm-defineclassoptions`  |  **DocID**: `368b13582cbc46c08901597c55978dbb`

---

# JSVM_DefineClassOptions

 ```
typedef struct {...} JSVM_DefineClassOptions
```
  #### 概述

定义Class的选项。

 **起始版本：** 18

 **相关模块：** [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

 **所在头文件：** [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [JSVM_DefineClassOptionsId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h#jsvm_defineclassoptionsid) id 定义Class的选项ID。  content id对应的定义Class选项值联合体。  content.ptr 指向定义Class选项值的指针。  content.num 存储整数类型的定义Class选项值。  content.boolean 存储布尔类型的定义Class选项值。

---
*Updated: 2026-04-22 06:40:23*
