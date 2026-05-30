# JSVM_PropertyDescriptor

> **分区**: API参考  |  **Slug**: `capi-jsvm-jsvm-propertydescriptor`  |  **DocID**: `832f1e88bea747a3b6220d5a2b1175d8`

---

# JSVM_PropertyDescriptor

 ```
typedef struct {...} JSVM_PropertyDescriptor
```
  #### 概述

属性描述符。

 **起始版本：** 11

 **相关模块：** [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

 **所在头文件：** [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   const char* utf8name 描述属性键值的可选字符串，UTF-8编码。必须为属性提供utf8name或name之一。  [JSVM_Value](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-value--8h) name 可选的JSVM_Value，指向用作属性键的JavaScript字符串或符号。必须为属性提供utf8name或name之一。  [JSVM_Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-callbackstruct8h) method 设置此项使属性描述符对象的value属性成为method表示的JavaScript函数。  [JSVM_Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-callbackstruct8h) getter 执行对属性的获取访问时调用的函数。  [JSVM_Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-callbackstruct8h) setter 执行属性的设置访问时调用的函数。  [JSVM_Value](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-jsvm-value--8h) value 如果属性是数据属性，则通过属性的get访问检索到的值。  [JSVM_PropertyAttributes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h#jsvm_propertyattributes) attributes 与特定属性关联的属性。

---
*Updated: 2026-04-22 06:40:23*
