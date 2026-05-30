# Rcp_RequestContent

> **分区**: API参考  |  **Slug**: `_rcp___request_content`  |  **DocID**: `1d8530659856492fa0cc61b5e841e7aa`

---

# Rcp_RequestContent

  #### 概述

请求的内容。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   [Rcp_ContentType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_contenttype)[type](#type) 表示union中使用的数据类型。  union { 

  [Rcp_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___buffer)   [contentStr](#contentstr) 

  [Rcp_Form](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_form) *   [form](#form) 

  [Rcp_MultipartForm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_multipartform) *   [multipartForm](#multipartform) 

  [Rcp_GetDataCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_getdatacallback)   [getDataCallback](#getdatacallback) 

  }

  contentStr：文本。

 form：表单。

 multipartForm：多部分表单。

 getDataCallback：使用回调函数获取数据。

        #### 结构体成员变量说明

  #### [h2]contentStr

Rcp_Buffer Rcp_RequestContent::contentStr **描述**

 字符串内容。

   #### [h2]form

Rcp_Form* Rcp_RequestContent::form **描述**

 表单内容。

   #### [h2]getDataCallback

Rcp_GetDataCallback Rcp_RequestContent::getDataCallback **描述**

 回调函数。

   #### [h2]multipartForm

Rcp_MultipartForm* Rcp_RequestContent::multipartForm **描述**

 多部分表单内容。

   #### [h2]type

Rcp_ContentType Rcp_RequestContent::type **描述**

 表示union中使用的数据类型。

---
*Updated: 2026-04-22 06:49:05*
