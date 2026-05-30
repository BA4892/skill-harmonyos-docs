# CommonEventData

> **分区**: API参考  |  **Slug**: `js-apis-inner-commonevent-commoneventdata`  |  **DocID**: `da7c36f2214b491ca7874be40a4ac370`

---

# CommonEventData

 表示公共事件的数据。

   本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

    #### 属性

**元服务API：** 从API version 11开始，该接口支持在元服务中使用。

 **系统能力：** SystemCapability.Notification.CommonEvent

  名称 类型 只读 可选 说明   event string 否 否 表示当前接收的公共事件名称。  bundleName string 否 是 表示包名称，默认为空字符串。  code number 否 是 表示订阅者接收到的公共事件数据（number类型）。该字段取值与发布者使用[commonEventManager.publish](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagerpublish-1)发布公共事件时，通过[CommonEventPublishData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-commonevent-commoneventpublishdata)中的code字段传递的数据一致。默认值为0。  data string 否 是 表示订阅者接收到的公共事件数据（string类型）。该字段取值与发布者使用[commonEventManager.publish](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagerpublish-1)发布公共事件时，通过[CommonEventPublishData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-commonevent-commoneventpublishdata)中的data字段传递的数据一致。  parameters {[key: string]: any} 否 是 表示订阅者接收到的公共事件的附加信息。该字段取值与发布者使用[commonEventManager.publish](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagerpublish-1)发布公共事件时，通过[CommonEventPublishData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-commonevent-commoneventpublishdata)中的parameters字段传递的数据一致。

---
*Updated: 2026-04-22 06:49:06*
