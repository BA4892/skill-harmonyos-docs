# Class (HttpAuthHandler)

> **分区**: API参考  |  **Slug**: `arkts-basic-components-web-httpauthhandler`  |  **DocID**: `0c12ba047beb4568a0d8afb8a9b6f82c`

---

# Class (HttpAuthHandler)

 Web组件返回的http auth认证请求确认或取消和使用缓存密码认证功能对象。示例代码参考[onHttpAuthRequest事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onhttpauthrequest9)。

   
该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

  本Class首批接口从API version 9开始支持。

  示例效果请以真机运行为准。

  
    #### constructor9+

constructor()

 HttpAuthHandler的构造函数。

 **系统能力：** SystemCapability.Web.Webview.Core

   #### cancel9+

cancel(): void

 通知Web组件用户取消HTTP认证操作。

 **系统能力：** SystemCapability.Web.Webview.Core

   #### confirm9+

confirm(userName: string, password: string): boolean

 使用用户名和密码进行HTTP认证操作。

 **系统能力：** SystemCapability.Web.Webview.Core

 **参数：**

  参数名 类型 必填 说明   userName string 是 HTTP认证用户名。  password string 是 HTTP认证密码。     **返回值：**

  类型 说明   boolean 认证成功返回true，失败返回false。       #### isHttpAuthInfoSaved9+

isHttpAuthInfoSaved(): boolean

 通知Web组件用户使用服务器缓存的账号密码认证。

 **系统能力：** SystemCapability.Web.Webview.Core

 **返回值：**

  类型 说明   boolean 存在密码认证成功返回true，其他返回false。

---
*Updated: 2026-04-22 06:44:44*
