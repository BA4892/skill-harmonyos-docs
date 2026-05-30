# ArkWeb_JavaScriptBridgeData

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-web-arkweb-javascriptbridgedata`

**DocID**: `618e8b939d5c4d2385c9b782df5d4c90`

**NodeID**: `0002017757962161979572dccd7bb452`

---

ArkWeb_JavaScriptBridgeData

typedef struct {...} ArkWeb_JavaScriptBridgeData

概述

定义JavaScript Bridge数据的基础结构。

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

指向传输数据的指针。仅支持前端传入String和ArrayBuffer类型，其余类型会被json序列化后，以String类型传递。

size_t size

传输数据的长度。

---
*2026-04-22T15:53:58.771Z*