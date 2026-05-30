# ArkWeb_ProxyMethodWithResult

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-web-arkweb-proxymethodwithresult`

**DocID**: `b80df58813f4421eb14c9006a15b8405`

**NodeID**: `000201775796216197084ccd636fcc00`

---

ArkWeb_ProxyMethodWithResult

typedef struct {...} ArkWeb_ProxyMethodWithResult

概述

注入的Proxy方法通用结构体。

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

const char* methodName

注入的方法名。

ArkWeb_OnJavaScriptProxyCallbackWithResult
 callback

Proxy方法执行的回调。

void* userData

需要在回调中携带的自定义数据。

---
*2026-04-22T15:53:58.774Z*