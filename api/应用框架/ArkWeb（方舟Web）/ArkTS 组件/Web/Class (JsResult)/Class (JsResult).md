# Class (JsResult)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-basic-components-web-jsresult`

**DocID**: `578980f83d2f460a90d59a02517e20af`

**NodeID**: `000201775796216197075234d0ca4348`

---

Class (JsResult)

Web组件返回的弹窗确认或弹窗取消功能对象。示例代码参考
onAlert事件
。

该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

本Class首批接口从API version 8开始支持。

示例效果请以真机运行为准。

constructor

constructor()

JsResult的构造函数。

系统能力：
 SystemCapability.Web.Webview.Core

handleCancel

handleCancel(): void

通知Web组件用户取消弹窗操作。

系统能力：
 SystemCapability.Web.Webview.Core

handleConfirm

handleConfirm(): void

通知Web组件用户确认弹窗操作。

系统能力：
 SystemCapability.Web.Webview.Core

handlePromptConfirm
9+

handlePromptConfirm(result: string): void

通知Web组件用户确认弹窗操作及对话框内容。

系统能力：
 SystemCapability.Web.Webview.Core

参数：

参数名

类型

必填

说明

result

string

是

用户输入的对话框内容。

---
*2026-04-22T15:53:58.752Z*