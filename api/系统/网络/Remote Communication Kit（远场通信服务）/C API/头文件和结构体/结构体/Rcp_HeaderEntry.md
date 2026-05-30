# Rcp_HeaderEntry

> **分区**: API参考  |  **Slug**: `_rcp___header_entry`  |  **DocID**: `bba856eaf73845d18930d3906b9f6ae1`

---

# Rcp_HeaderEntry

  #### 概述

请求或响应的标头的所有键值对。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char * [key](#key) 键。如果用户希望使用自定义的content-type覆盖系统原有的content-type，键必须使用小写的“content-type”。  [Rcp_HeaderValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_value) * [value](#value) 值。  struct [Rcp_HeaderEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_entry) * [next](#next) 链式存储。指向下一个键值对[Rcp_HeaderEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_entry)。       #### 结构体成员变量说明

  #### [h2]key

char* Rcp_HeaderEntry::key **描述**

 键。如果用户希望使用自定义的content-type覆盖系统原有的content-type，键必须使用小写的“content-type”。

   #### [h2]next

struct Rcp_HeaderEntry* Rcp_HeaderEntry::next **描述**

 链式存储。指向下一个键值对[Rcp_HeaderEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_entry)。

   #### [h2]value

Rcp_HeaderValue* Rcp_HeaderEntry::value **描述**

 标头键值对的值。

---
*Updated: 2026-04-22 06:49:03*
