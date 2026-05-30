# Class (VerifyPinHandler)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-basic-components-web-verifypinhandler`

**DocID**: `a5abc2e8dc3c4d53a85c177038ba48e2`

**NodeID**: `000201775796216197228f6eff2cbce6`

---

Class (VerifyPinHandler)

Web组件返回的pin码认证用户处理功能对象。示例代码参考
onVerifyPin
。

该组件从API version 22开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

本Class首批接口从API version 22开始支持。

示例效果请以真机运行为准。

constructor
22+

constructor()

VerifyPinHandler的构造函数。

系统能力：
 SystemCapability.Web.Webview.Core

confirm
22+

confirm(result: PinVerifyResult): void

通知Web组件PIN码认证结果。

系统能力：
 SystemCapability.Web.Webview.Core

参数：

参数名

类型

必填

说明

result

PinVerifyResult

是

PIN码认证结果。

---
*2026-04-22T15:55:02.383Z*