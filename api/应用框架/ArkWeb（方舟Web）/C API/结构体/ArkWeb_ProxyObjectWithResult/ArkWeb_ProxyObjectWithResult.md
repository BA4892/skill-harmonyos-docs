# ArkWeb_ProxyObjectWithResult

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-web-arkweb-proxyobjectwithresult`

**DocID**: `36b66b9173a847b99f7eaa43e70802ce`

**NodeID**: `000201775796216197113bd34fbc8122`

---

ArkWeb_ProxyObjectWithResult

typedef struct {...} ArkWeb_ProxyObjectWithResult

概述

注入的Proxy对象通用结构体。

起始版本：
 18

相关模块：

Web

所在头文件：

arkweb_type.h

汇总

[h2]成员变量

名称

描述

const char* objName

注入的对象名。

const 
ArkWeb_ProxyMethodWithResult
* methodList

注入的对象携带的方法结构体数组。

size_t size

方法结构体数组的长度。

---
*2026-04-22T15:53:58.776Z*