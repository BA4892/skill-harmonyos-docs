# Rcp_Urls

> **分区**: API参考  |  **Slug**: `_rcp___urls`  |  **DocID**: `c92488428ace4fd088025c8323459f06`

---

# Rcp_Urls

  #### 概述

URLs，用于确定主机是否正在使用代理。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   const char * [url](#url) 匹配的URL。  struct [Rcp_Urls](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___urls) * [next](#next) 链式存储。指向下一个[Rcp_Urls](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___urls)的指针。       #### 结构体成员变量说明

  #### [h2]next

struct Rcp_Urls* Rcp_Urls::next **描述**

 链式存储。指向下一个[Rcp_Urls](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___urls)的指针。

   #### [h2]url

const char* Rcp_Urls::url **描述**

 匹配的URL。

---
*Updated: 2026-04-22 06:49:05*
