# ArkUI_ContextCallback

> **分区**: API参考  |  **Slug**: `capi-arkui-nativemodule-arkui-contextcallback`  |  **DocID**: `5c97a7846d88446daad7e40e4a385cd2`

---

# ArkUI_ContextCallback

 ```
typedef struct {...} ArkUI_ContextCallback
```
  #### 概述

事件回调类型。

 **起始版本：** 12

 **相关模块：** [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

 **所在头文件：** [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   void* userData 自定义类型，开发者自定义类型的数据，在回调时作为参数传入。       #### [h2]成员函数

 名称 描述   [void (*callback)(void* userData)](#callback) 事件回调。       #### 成员函数说明

  #### [h2]callback()

void (*callback)(void* userData) **描述：**

 事件回调。

---
*Updated: 2026-04-22 06:45:18*
