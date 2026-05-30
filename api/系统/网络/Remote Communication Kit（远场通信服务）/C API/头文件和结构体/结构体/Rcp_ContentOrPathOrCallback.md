# Rcp_ContentOrPathOrCallback

> **分区**: API参考  |  **Slug**: `_rcp___content_or_path_or_callback`  |  **DocID**: `b44721c847e34b308552868667128eaf`

---

# Rcp_ContentOrPathOrCallback

  #### 概述

[Rcp_FormFieldFileValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_file_value)中使用的简单表单数据字段值。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_ContentOrPathOrCallbackType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_contentorpathorcallbacktype)[type](#type) 表示union中使用的数据类型。  union { 

  [Rcp_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___buffer)   [content](#content) 

  char   [path](#path) [[RCP_MAX_PATH_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_max_path_len)] 

  [Rcp_GetDataCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_getdatacallback)   [callback](#callback) 

  }

  content: 文本数据。

 path: 文件路径。

 callback: 获取数据的回调函数。

        #### 结构体成员变量说明

  #### [h2]callback

Rcp_GetDataCallback Rcp_ContentOrPathOrCallback::callback **描述**

 获取数据的回调。

   #### [h2]content

Rcp_Buffer Rcp_ContentOrPathOrCallback::content **描述**

 文本数据。

   #### [h2]path

char Rcp_ContentOrPathOrCallback::path[RCP_MAX_PATH_LEN] **描述**

 文件路径。

   #### [h2]type

Rcp_ContentOrPathOrCallbackType Rcp_ContentOrPathOrCallback::type **描述**

 union中使用的数据类型。

---
*Updated: 2026-04-22 06:48:55*
