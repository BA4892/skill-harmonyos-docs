# Rcp_HeaderValue

> **分区**: API参考  |  **Slug**: `_rcp___header_value`  |  **DocID**: `0ec1adc3c4c6412380ea95c5d37ccd6c`

---

# Rcp_HeaderValue

  #### 概述

请求或响应的标头映射的值类型。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char * [value](#value) 标头键值对的值。  struct [Rcp_HeaderValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_value) * [next](#next) 链式存储。指向下一个[Rcp_HeaderValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_value)。       #### 结构体成员变量说明

  #### [h2]next

struct Rcp_HeaderValue* Rcp_HeaderValue::next **描述**

 链式存储。指向下一个[Rcp_HeaderValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___header_value)。

   #### [h2]value

char* Rcp_HeaderValue::value **描述**

 标头键值对的值。

---
*Updated: 2026-04-22 06:49:04*
