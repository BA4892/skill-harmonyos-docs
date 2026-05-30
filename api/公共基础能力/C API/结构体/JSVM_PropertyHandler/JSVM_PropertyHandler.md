# JSVM_PropertyHandler

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-jsvm-jsvm-propertyhandler`

**DocID**: `51dae7d39d6b4006bc4c76e5c297fd0e`

**NodeID**: `000201775795859580833f2dd147f37e`

---

JSVM_PropertyHandler

typedef struct {...} JSVM_PropertyHandler

概述

包含将class作为函数进行调用时所触发的回调函数的函数指针，以及访问实例对象属性时触发的回调函数的函数指针集。

起始版本：
 18

相关模块：

JSVM

所在头文件：

jsvm_types.h

汇总

[h2]成员变量

名称

描述

JSVM_PropertyHandlerCfg
 propertyHandlerCfg

访问实例对象属性触发相应的回调函数。

JSVM_Callback
 callAsFunctionCallback

实例对象作为函数调用将触发此回调。

---
*2026-04-22T15:54:00.643Z*