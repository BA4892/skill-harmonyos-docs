# ArkTS API错误码

> **分区**: API参考  |  **Slug**: `enterprisespace-error-code`  |  **DocID**: `aeafcc5fd6734d13bd90f8f897d9f141`

---

# ArkTS API错误码

   以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。若您的问题仍无法解决，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。

    #### 1020300001 系统服务异常

**错误信息**

 System service exception.

 **错误描述**

 系统服务异常。

 **可能原因**

 无效空间ID，或者未知文件处理类型。

 **处理步骤**

 尝试重试操作或请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

   #### 1020300002 请求参数无效

**错误信息**

 Parameter error.

 **错误描述**

 请求参数无效。

 **可能原因**

 必填参数为空或者参数类型错误。

 **处理步骤**

 请确认参数符合要求。

   #### 1020400001 系统服务异常

**错误信息**

 System service exception.

 **错误描述**

 系统服务异常。

 **可能原因**

 系统服务繁忙，或者网络异常。

 **处理步骤**

 尝试重试操作或请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

   #### 1020400002 请求参数无效

**错误信息**

 Parameter error.

 **错误描述**

 请求参数无效。

 **可能原因**

 必填参数为空或者参数类型错误。

 **处理步骤**

 请确认参数符合要求。

   #### 1020400003 工作空间无效

**错误信息**

 Invalid workspace.

 **错误描述**

 工作空间无效。

 **可能原因**

 
工作空间不存在。

  工作空间已存在。

  工作空间类型不支持。

  当前工作空间数量等于2个，无法继续创建。

  企业账号不存在。

  
 **处理步骤**

 请按照[WorkspaceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#workspaceinfo)确认工作空间信息符合要求。

   #### 1020400004 企业认证失败

**错误信息**

 Authentication failed.

 **错误描述**

 企业认证失败。

 **可能原因**

 
- 企业认证超时。
- 认证服务器不存在。
- 认证服务异常。

 **处理步骤**

 检查认证服务器配置。

   #### 1020400005 配置信息未设置

**错误信息**

 Configuration not set.

 **错误描述**

 配置信息未设置。

 **可能原因**

 查询配置信息时，配置信息未设置。

 **处理步骤**

 确认配置信息已设置。

   #### 1020400006 SA进程异常退出，导致连接中断

**错误信息**

 Session disconnected.

 **错误描述**

 SA进程异常退出，导致连接中断。

 **可能原因**

 当存在应用订阅了空间事件时，服务进程异常退出。

 **处理步骤**

 应用重新订阅空间相关事件。

   #### 1020400007 企业空间未开启

**错误信息**

 Enterprise workspace not enabled.

 **错误描述**

 企业空间未开启。

 **可能原因**

 企业管理员未使能企业空间功能。

 **处理步骤**

 企业管理员使能企业空间功能。

   #### 1020400008 账号名或密码无效

**错误信息**

 Invalid account name or password.

 **错误描述**

 无效的账号名或密码。

 **可能原因**

 企业认证时，输入错误的账号名或密码。

 **处理步骤**

 检查账号名和密码是否正确。

   #### 1020400009 企业账号已锁定

**错误信息**

 The account is locked.

 **错误描述**

 企业账号已锁定。

 **可能原因**

 企业认证服务器中账号已锁定。

 **处理步骤**

 等待企业认证服务器中账号解锁。

   #### 1020400010 企业认证服务器不可达

**错误信息**

 Enterprise authentication server unreachable.

 **错误描述**

 企业认证服务器不可达。

 **可能原因**

 
- 网络未连接。
- 企业认证服务器异常。

 **处理步骤**

 
- 检查设备与企业认证服务器的网络是否连通。
- 检查企业认证服务器是否异常。

   #### 1020400011 禁止创建账号

**错误信息**

 Account creation is not permitted.

 **错误描述**

 禁止创建账号。

 **可能原因**

 企业管理员设置禁止用户添加账号。

 **处理步骤**

 企业管理员设置允许用户添加账号。

   #### 1020400012 全盘加密未开启

**错误信息**

 Full disk encryption is not enabled.

 **错误描述**

 全盘加密未开启。

 **可能原因**

 企业管理员设置关闭全盘加密。

 **处理步骤**

 企业管理员设置开启全盘加密。

---
*Updated: 2026-04-22 06:41:35*
