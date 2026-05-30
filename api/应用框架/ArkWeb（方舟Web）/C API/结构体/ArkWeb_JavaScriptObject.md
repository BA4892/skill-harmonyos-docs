# ArkWeb_JavaScriptObject

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-web-arkweb-javascriptobject`

**DocID**: `49534f5143084adbac64fdb10951fec7`

**NodeID**: `000201775796216197054681562acce0`

---

ArkWeb_JavaScriptObject

typedef struct {...} ArkWeb_JavaScriptObject

概述

注入的JavaScript结构体。

起始版本：
 12

相关模块：

Web

所在头文件：

arkweb_type.h

汇总

[h2]成员变量

名称

描述

const uint8_t* buffer

注入的JavaScript代码。

size_t size

JavaScript代码长度。

ArkWeb_OnJavaScriptCallback
 callback

JavaScript执行完成的回调。

void* userData

需要在回调中携带的自定义数据。

---
*2026-04-22T15:55:02.430Z*