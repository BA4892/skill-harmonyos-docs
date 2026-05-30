# error_code.h

> **分区**: API参考  |  **Slug**: `capi-error-code-h`  |  **DocID**: `6d9bc0197d814152bd0342581c693c20`

---

# error_code.h

  #### 概述

提供文件管理模块的错误码定义。

 **引用文件：** <filemanagement/fileio/error_code.h>

 **库：** NA

 **系统能力：** SystemCapability.FileManagement.File.FileIO

 **起始版本：** 12

 **相关模块：** [FileIO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-fileio)

   #### 汇总

  #### [h2]枚举

 名称 typedef关键字 描述   [FileManagement_ErrCode](#filemanagement_errcode) FileManagement_ErrCode 文件管理模块错误码。       #### 枚举类型说明

  #### [h2]FileManagement_ErrCode

enum FileManagement_ErrCode **描述**

 文件管理模块错误码。

 **起始版本：** 12

  枚举项 描述   ERR_OK = 0 接口调用成功。  ERR_PERMISSION_ERROR = 201 接口权限校验失败。  ERR_INVALID_PARAMETER = 401 无效入参。  ERR_DEVICE_NOT_SUPPORTED = 801 当前设备不支持此接口。  ERR_EPERM = 13900001 操作不被允许。  ERR_ENOENT = 13900002 不存在此文件或文件夹。  ERR_ENOMEM = 13900011 内存溢出。  ERR_UNKNOWN = 13900042 内部未知错误。

---
*Updated: 2026-04-22 06:43:16*
