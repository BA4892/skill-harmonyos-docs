# Rcp_FormFieldFileValue

> **分区**: API参考  |  **Slug**: `_rcp___form_field_file_value`  |  **DocID**: `072e394f317643948a29e000af485c12`

---

# Rcp_FormFieldFileValue

  #### 概述

表单字段文件值。

 **起始版本：** 5.0.0(12)

 **相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

 **所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

   #### 汇总

  #### [h2]成员变量

 名称 描述   char [contentType](#contenttype) [[RCP_MAX_CONTENT_TYPE_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_max_content_type_len)] 多部分表单数据内容类型。  char [remoteFileName](#remotefilename) [[RCP_MAX_FILENAME_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_max_filename_len)] 多部分表单数据远程文件名。  [Rcp_ContentOrPathOrCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___content_or_path_or_callback)[contentOrPathOrCb](#contentorpathorcb) 多部分表单数据内容。       #### 结构体成员变量说明

  #### [h2]contentOrPathOrCb

Rcp_ContentOrPathOrCallback Rcp_FormFieldFileValue::contentOrPathOrCb **描述**

 多部分表单数据内容。

   #### [h2]contentType

char Rcp_FormFieldFileValue::contentType[RCP_MAX_CONTENT_TYPE_LEN] **描述**

 多部分表单数据内容类型。

   #### [h2]remoteFileName

char Rcp_FormFieldFileValue::remoteFileName[RCP_MAX_FILENAME_LEN] **描述**

 多部分表单数据远程文件名。

---
*Updated: 2026-04-22 06:49:03*
