# Class (PermissionRequest)

> **分区**: API参考  |  **Slug**: `arkts-basic-components-web-permissionrequest`  |  **DocID**: `fc56f14b8f2e46f7a456d02f959ba8e4`

---

# Class (PermissionRequest)

 Web组件返回授权或拒绝权限功能的对象。示例代码参考[onPermissionRequest事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onpermissionrequest9)。

   
该组件首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

  本Class首批接口从API version 9开始支持。

  示例效果请以真机运行为准。

  
    #### constructor9+

constructor()

 PermissionRequest的构造函数。

 **系统能力：** SystemCapability.Web.Webview.Core

   #### deny9+

deny(): void

 拒绝网页所请求的权限。

 **系统能力：** SystemCapability.Web.Webview.Core

   #### getOrigin9+

getOrigin(): string

 获取网页来源。

 **系统能力：** SystemCapability.Web.Webview.Core

 **返回值：**

  类型 说明   string 当前请求权限网页的来源。       #### getAccessibleResource9+

getAccessibleResource(): Array<string>

 获取网页所请求的权限资源列表，资源列表类型参考[ProtectedResourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-e#protectedresourcetype9)。

 **系统能力：** SystemCapability.Web.Webview.Core

 **返回值：**

  类型 说明   Array<string> 网页所请求的权限资源列表。       #### grant9+

grant(resources: Array<string>): void

 对网页访问的给定权限进行授权。

 **系统能力：** SystemCapability.Web.Webview.Core

 **参数：**

  参数名 类型 必填 说明   resources Array<string> 是 授予网页请求的权限的资源列表。

---
*Updated: 2026-04-22 06:44:52*
