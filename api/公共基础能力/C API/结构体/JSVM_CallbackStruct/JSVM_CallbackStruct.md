# JSVM_CallbackStruct

> **分区**: API参考  |  **Slug**: `capi-jsvm-jsvm-callbackstruct`  |  **DocID**: `1b3fa9605a864efb93e2b10397741eda`

---

# JSVM_CallbackStruct

 ```
typedef struct {...} JSVM_CallbackStruct
```
  #### 概述

用户提供的Native回调函数的指针和数据，这些函数通过JSVM-API接口暴露给JavaScript。

 **起始版本：** 11

 **相关模块：** [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

 **所在头文件：** [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   void* data 用户提供的Native回调函数的数据。       #### [h2]成员函数

 名称 描述   [JSVM_Value(JSVM_CDECL* callback)(JSVM_Env env,JSVM_CallbackInfo info)](#callback) 用户提供的Native回调函数的指针。       #### 成员函数说明

  #### [h2]callback()

JSVM_Value(JSVM_CDECL* callback)(JSVM_Env env,JSVM_CallbackInfo info) **描述**

 用户提供的Native回调函数的指针。

---
*Updated: 2026-04-22 06:40:22*
