# ArkTS API错误码

> **分区**: API参考  |  **Slug**: `filemanagerservice-arkts-errorcode`  |  **DocID**: `cd9c21bf76cd4384bdec4b15136ceff1`

---

# ArkTS API错误码

   以下仅介绍本模块特有错误码，通用错误码请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

    #### 1014000001 操作不允许

**错误信息**

 Operation not permitted

 **错误描述**

 操作不允许。

 **可能原因**

 当前用户文件操作不被允许，URI或path访问未授权。

 **处理步骤**

 1、通过系统文件选择器（FilePicker），[选择用户文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/select-user-file)从而获取URI临时权限。

 2、通过程序访问控制机制，[向用户申请授权](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-user-authorization)从而获取目录权限。

   #### 1014000002 没有该文件或目录

**错误信息**

 No such file or directory

 **错误描述**

 没有该文件或目录。

 **可能原因**

 1、文件或目录不存在。

 2、当前调用方对该文件或目录无访问权限。

 **处理步骤**

 1、确认文件路径是否存在。

 2、确认当前调用方对该文件或目录是否有访问权限。

   #### 1014000003 存储空间不足

**错误信息**

 No space left on device

 **错误描述**

 存储空间不足。

 **可能原因**

 存储空间不足。

 **处理步骤**

 清理设备存储空间。

   #### 1014000004 系统内部错误

**错误信息**

 System inner fail

 **错误描述**

 系统内部错误。

 **可能原因**

 系统异常，发生错误。

 **处理步骤**

 重启设备，或请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

   #### 1014000005 无效的快捷方式文件

**错误信息**

 Invalid shortcut file

 **错误描述**

 无效的快捷方式文件。

 **可能原因**

 快捷方式文件URI或内容错误，无法正常解析。

 **处理步骤**

 请确认传入正确的快捷方式文件URI。

---
*Updated: 2026-04-22 06:41:32*
