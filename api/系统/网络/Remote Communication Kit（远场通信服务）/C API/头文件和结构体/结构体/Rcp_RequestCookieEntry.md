# Rcp_RequestCookieEntry

> **分区**: API参考  |  **Slug**: `_rcp___request_cookie_entry`  |  **DocID**: `f4890bbca7104d2bb9ecd00f623d5fd3`

---

# Rcp_RequestCookieEntry

  #### 概述

描述请求的所有Cookie键值对。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char * [key](#key) 请求Cookie键值对的键。  char * [value](#value) 请求Cookie键值对的值。  struct [Rcp_RequestCookieEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_cookie_entry) * [next](#next) 链式存储。指向下一个[Rcp_RequestCookieEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_cookie_entry)的指针。       #### 结构体成员变量说明

  #### [h2]key

char* Rcp_RequestCookieEntry::key **描述**

 请求Cookie键值对的键。

   #### [h2]next

struct Rcp_RequestCookieEntry* Rcp_RequestCookieEntry::next **描述**

 链式存储。指向下一个[Rcp_RequestCookieEntry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_cookie_entry)的指针。

   #### [h2]value

char* Rcp_RequestCookieEntry::value **描述**

 请求Cookie键值对的值。

---
*Updated: 2026-04-22 06:49:05*
