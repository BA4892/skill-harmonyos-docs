# TriggerInfo

> **分区**: API参考  |  **Slug**: `js-apis-inner-wantagent-triggerinfo`  |  **DocID**: `e0688675452348669b98991333bcedfa`

---

# TriggerInfo

       作为[trigger](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-wantagent#wantagenttrigger)的入参定义触发WantAgent所需要的信息。

                     本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

                       #### 导入模块

     ```
import { wantAgent } from '@kit.AbilityKit';
```
                  #### 属性

     **元服务API**：从API version 12开始，该接口支持在元服务中使用。

     **系统能力**：SystemCapability.Ability.AbilityRuntime.Core

                                   名称         类型         只读         可选         说明                                       code         number         否         否         表示传递的公共事件数据，仅当WantAgent实例的[OperationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-wantagent#operationtype)类型是'SEND_COMMON_EVENT'时有效。该字段与发布者使用[commonEventManager.publish](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagerpublish-1)发布公共事件时，传递[CommonEventPublishData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-commonevent-commoneventpublishdata#属性)公共事件数据中的code字段含义一致。                         want         [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want)         否         是         对象间信息传递的载体，可以用于应用组件间的信息传递。                         permission         string         否         是         表示公共事件订阅者的权限。仅当WantAgent实例的[OperationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-wantagent#operationtype)类型是'SEND_COMMON_EVENT'时，该字段生效。若权限为null，则接收方无需具备任何权限。                         extraInfo         { [key: string]: any }         否         是         额外数据。                         extraInfos11+         Record<string, Object>         否         是         额外数据。推荐使用该属性替代extraInfo，设置该属性后，extraInfo不再生效。

---
*Updated: 2026-04-22 06:45:21*
