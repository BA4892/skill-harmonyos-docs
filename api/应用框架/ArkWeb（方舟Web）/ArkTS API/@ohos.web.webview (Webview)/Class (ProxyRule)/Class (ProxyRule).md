# Class (ProxyRule)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-apis-webview-proxyrule`

**DocID**: `d0242c18c80b4c019e5bf72846b01452`

**NodeID**: `00020177579621619707338e7412d605`

---

Class (ProxyRule)

insertProxyRule
中使用的代理规则。

本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

本Class首批接口从API version 15开始支持。

示例效果请以真机运行为准。

getSchemeFilter
15+

getSchemeFilter(): ProxySchemeFilter

获取代理规则中的ProxySchemeFilter信息。

系统能力：
 SystemCapability.Web.Webview.Core

返回值：

类型

说明

ProxySchemeFilter

代理规则中的ProxySchemeFilter信息。

示例：

完整示例代码参考
removeProxyOverride
。

getUrl
15+

getUrl(): string

获取代理规则中的代理的Url信息。

系统能力：
 SystemCapability.Web.Webview.Core

返回值：

类型

说明

string

代理规则中的代理的Url信息。

示例：

完整示例代码参考
removeProxyOverride
。

---
*2026-04-22T15:53:58.720Z*