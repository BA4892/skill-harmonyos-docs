# UI装饰器总览

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `arkts-decorator-overview`  |  **DocID**: `9c6aef581cbc4dd6b6a1c7acfc3f5f2a`  |  **NodeID**: `00020177579578888446660f6d7c4e0d`

---

# UI装饰器总览

 在声明式UI开发范式中，UI是程序状态的运行结果，状态的变化会驱动UI的刷新。ArkUI提供了一套装饰器机制，使开发者能够便捷地定义和管理状态变量，实现数据与UI的联动。

 ArkUI包含的V2状态管理装饰器列表如下：

  
| V2状态管理装饰器  | 装饰器说明  
  | [@ComponentV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-custom-components#componentv2)  | 创建自定义组件。  
 | [@Local](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-local)  | 组件内部状态。  
 | [@Param](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-param)  | 组件外部输入。  
 | [@Once](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-once)  | 初始化同步一次。  
 | [@Event](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-event)  | 规范组件输出。  
 | [@Provider](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-provider-and-consumer)  | 与后代状态双向同步。  
 | [@Consumer](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-provider-and-consumer)  | 与祖先状态双向同步。  
 | [@Monitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-monitor)  | 状态变量修改异步监听。  
 | [@SyncMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-syncmonitor)  | 状态变量修改同步监听。  
 | [@Computed](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-computed)  | 计算属性。  
 | [@ObservedV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-observedv2-and-trace)  | 标记类可观察。  
 | [@Trace](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-observedv2-and-trace)  | 标记类属性可观察。  
 | [@Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-type)  | 标记类属性的类型。  
 | [@ReusableV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-reusablev2)  | 标记组件可复用。  
  

  ArkUI包含的V1状态管理装饰器列表如下：

  
| V1状态管理装饰器  | 装饰器说明  
  | [@Component](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-custom-components#component)  | 创建自定义组件。  
 | [@State](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state)  | 基础状态变量。  
 | [@Prop](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-prop)  | 建立父子状态单向同步。  
 | [@Link](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-link)  | 建立父子状态双向同步。  
 | [@ObjectLink](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink)  | 嵌套类对象属性变化观察。  
 | [@Provide](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume)  | 与后代状态双向同步。  
 | [@Consume](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume)  | 与祖先状态双向同步。  
 | [@Watch](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-watch)  | 状态变量变化监听。  
 | [@StorageLink](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-appstorage#storagelink)  | 与AppStorage中对应的属性建立双向数据同步。  
 | [@StorageProp](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-appstorage#storageprop)  | 与AppStorage中对应的属性建立单向数据同步。  
 | [@LocalStorageLink](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-localstorage#localstoragelink)  | 与LocalStorage中对应的属性建立双向数据同步。  
 | [@LocalStorageProp](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-localstorage#localstorageprop)  | 与LocalStorage中对应的属性建立单向数据同步。  
 | [@Observed](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink)  | 标记类可观察。  
 | [@Track](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-track)  | 类对象属性级更新。  
 | [@Reusable](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-reusable)  | 标记组件可复用。  
  

  ArkUI包含的通用UI装饰器列表如下：

  
| 通用装饰器  | 装饰器说明  
  | [@Builder](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builder)  | 自定义构建函数。  
 | [@LocalBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-localbuilder)  | 维持组件关系。  
 | [@BuilderParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builderparam)  | 引用@Builder函数。  
 | [@Styles](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-style)  | 定义组件重用样式。  
 | [@Extend](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-extend)  | 定义扩展组件样式。  
 | [@AnimatableExtend](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-animatable-extend)  | 定义可动画属性。  
 | [@Require](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-require)  | 校验构造传参。  
 | [@Env](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-env-system-property)  | 环境变量。

---
*Updated: 2026-04-20 01:48:06*
