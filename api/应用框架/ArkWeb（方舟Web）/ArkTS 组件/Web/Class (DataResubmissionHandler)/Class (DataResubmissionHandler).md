# Class (DataResubmissionHandler)

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `arkts-basic-components-web-dataresubmissionhandler`

**DocID**: `97133bbd384e4db6b569b1ee424bb6d6`

**NodeID**: `000201775796216197900b1dceec48df`

---

Class (DataResubmissionHandler)

通过DataResubmissionHandler可以重新提交表单数据或取消提交表单数据。

该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

本Class首批接口从API version 9开始支持。

示例效果请以真机运行为准。

constructor
9+

constructor()

DataResubmissionHandler的构造函数。

系统能力：
 SystemCapability.Web.Webview.Core

resend
9+

resend(): void

重新发送表单数据。

系统能力：
 SystemCapability.Web.Webview.Core

示例：

// xxx.ets
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
 controller: webview.WebviewController = new webview.WebviewController();

 build() {
 Column() {
 Web({ src: 'www.example.com', controller: this.controller })
 .onDataResubmitted((event) => {
 console.info('onDataResubmitted');
 event.handler.resend();
 })
 }
 }
}

cancel
9+

cancel(): void

取消重新发送表单数据。

系统能力：
 SystemCapability.Web.Webview.Core

示例：

// xxx.ets
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
 controller: webview.WebviewController = new webview.WebviewController();

 build() {
 Column() {
 Web({ src: 'www.example.com', controller: this.controller })
 .onDataResubmitted((event) => {
 console.info('onDataResubmitted');
 event.handler.cancel();
 })
 }
 }
}

---
*2026-04-22T15:53:58.747Z*