# JSVM_PropertyHandlerConfigurationStruct

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-jsvm-jsvm-propertyhandlerconfigurationstruct`

**DocID**: `1a99b9bd7b6d4135924b1351f921b22d`

**NodeID**: `0002017757958595808296fb36dfd755`

---

JSVM_PropertyHandlerConfigurationStruct

typedef struct {...} JSVM_PropertyHandlerConfigurationStruct

概述

当执行对象的getter、setter、deleter和enumerator操作时，该结构体中对应的函数回调将会触发。

起始版本：
 12

相关模块：

JSVM

所在头文件：

jsvm_types.h

汇总

[h2]成员变量

名称

描述

JSVM_Value
 namedPropertyData

命名属性回调使用的数据。

JSVM_Value
 indexedPropertyData

索引属性回调使用的数据。

[h2]成员函数

名称

描述

JSVM_Value (JSVM_CDECL* genericNamedPropertyGetterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value thisArg,JSVM_Value namedPropertyData)

通过获取实例对象的命名属性而触发的回调函数。

JSVM_Value (JSVM_CDECL* genericNamedPropertySetterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value property,JSVM_Value thisArg,JSVM_Value namedPropertyData)

通过设置实例对象的命名属性而触发的回调函数。

JSVM_Value (JSVM_CDECL* genericNamedPropertyDeleterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value thisArg,JSVM_Value namedPropertyData)

通过删除实例对象的命名属性而触发的回调函数。

JSVM_Value (JSVM_CDECL* genericNamedPropertyEnumeratorCallback)(JSVM_Env env,JSVM_Value thisArg,JSVM_Value namedPropertyData)

通过获取对象上的所有命名属性而触发的回调函数。

JSVM_Value (JSVM_CDECL* genericIndexedPropertyGetterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value thisArg,JSVM_Value indexedPropertyData)

通过获取实例对象的索引属性而触发的回调函数。

JSVM_Value (JSVM_CDECL* genericIndexedPropertySetterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value property,JSVM_Value thisArg,JSVM_Value indexedPropertyData)

通过设置实例对象的索引属性而触发的回调函数。

JSVM_Value (JSVM_CDECL* genericIndexedPropertyDeleterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value thisArg,JSVM_Value indexedPropertyData)

通过删除实例对象的索引属性而触发的回调函数。

JSVM_Value (JSVM_CDECL* genericIndexedPropertyEnumeratorCallback)(JSVM_Env env,JSVM_Value thisArg,JSVM_Value indexedPropertyData)

通过获取对象上的所有索引属性而触发的回调函数。

成员函数说明

[h2]genericNamedPropertyGetterCallback()

JSVM_Value (JSVM_CDECL* genericNamedPropertyGetterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value thisArg,JSVM_Value namedPropertyData)

描述

通过获取实例对象的命名属性而触发的回调函数。

[h2]genericNamedPropertySetterCallback()

JSVM_Value (JSVM_CDECL* genericNamedPropertySetterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value property,JSVM_Value thisArg,JSVM_Value namedPropertyData)

描述

通过设置实例对象的命名属性而触发的回调函数。

[h2]genericNamedPropertyDeleterCallback()

JSVM_Value (JSVM_CDECL* genericNamedPropertyDeleterCallback)(JSVM_Env env,JSVM_Value name,JSVM_Value thisArg,JSVM_Value namedPropertyData)

描述

通过删除实例对象的命名属性而触发的回调函数。

[h2]genericNamedPropertyEnumeratorCallback()

JSVM_Value (JSVM_CDECL* genericNamedPropertyEnumeratorCallback)(JSVM_Env env,JSVM_Value thisArg,JSVM_Value namedPropertyData)

描述

通过获取对象上的所有命名属性而触发的回调函数。

[h2]genericIndexedPropertyGetterCallback()

JSVM_Value (JSVM_CDECL* genericIndexedPropertyGetterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value thisArg,JSVM_Value indexedPropertyData)

描述

通过获取实例对象的索引属性而触发的回调函数。

[h2]genericIndexedPropertySetterCallback()

JSVM_Value (JSVM_CDECL* genericIndexedPropertySetterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value property,JSVM_Value thisArg,JSVM_Value indexedPropertyData)

描述

通过设置实例对象的索引属性而触发的回调函数。

[h2]genericIndexedPropertyDeleterCallback()

JSVM_Value (JSVM_CDECL* genericIndexedPropertyDeleterCallback)(JSVM_Env env,JSVM_Value index,JSVM_Value thisArg,JSVM_Value indexedPropertyData)

描述

通过删除实例对象的索引属性而触发的回调函数。

[h2]genericIndexedPropertyEnumeratorCallback()

JSVM_Value (JSVM_CDECL* genericIndexedPropertyEnumeratorCallback)(JSVM_Env env,JSVM_Value thisArg,JSVM_Value indexedPropertyData)

描述

通过获取对象上的所有索引属性而触发的回调函数。

---
*2026-04-22T15:54:00.640Z*