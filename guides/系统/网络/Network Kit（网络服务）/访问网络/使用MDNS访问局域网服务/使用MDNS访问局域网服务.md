# 使用MDNS访问局域网服务

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `net-mdns`  |  **DocID**: `8a49bd8bb1524392ae1a6930010c668a`  |  **NodeID**: `00020177579585271629951f322c5a1c`

---

# 使用MDNS访问局域网服务

                 #### 简介

     MDNS即多播DNS（Multicast DNS），提供局域网内的本地服务添加、移除、发现、解析等能力。

     
      - 本地服务：局域网内服务的提供方，比如打印机、扫描仪等。
     
     MDNS管理的典型场景有：

     
      - 管理本地服务，通过对本地服务的创建，删除和解析等管理本地服务。
      - 发现本地服务，通过[DiscoveryService](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-mdns#discoveryservice)对象，对指定类型的本地服务状态变化进行监听。
     
                         为了保证应用的运行效率，大部分API调用都是异步的，对于异步调用的API均提供了callback和Promise两种方式，以下示例均采用promise函数，更多方式可以查阅[@ohos.net.mdns (MDNS管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-mdns)。

                以下分别介绍具体开发方式。

                         在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需在页面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

                             #### 管理本地服务

     
             设备连接WiFi。

             从@kit.NetworkKit里导入mdns、错误码、以及[common命名空间](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-common)。

       ```
// 从@kit.NetworkKit中导入mdns命名空间。
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```
             调用[addLocalService](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-mdns#mdnsaddlocalservice-1)方法，添加本地服务。

       ```
// 建立LocalService对象。
private localServiceInfo: mdns.LocalServiceInfo = {
  serviceType: '_print._tcp',
  serviceName: 'servicename',
  port: 5555,
  host: {
    address: '127.0.0.1'
  },
  serviceAttribute: [{ key: '111', value: [1] }]
};
// ...
  let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
  // addLocalService添加本地服务。
  mdns.addLocalService(context, this.localServiceInfo).then((data) => {
    // ...
    hilog.info(0x0000, 'testTag', `Local Service Added: ${JSON.stringify(data)}`);
  })
  // ...
```
             通过[resolveLocalService](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-mdns#mdnsresolvelocalservice-1)方法，解析本地网络的IP地址（非必要，根据需求使用）。

       ```
// resolveLocalService解析本地服务对象（非必要，根据需求使用）。
mdns.resolveLocalService(context, this.localServiceInfo).then((data: mdns.LocalServiceInfo) => {
  // ...
  hilog.info(0x0000, 'testTag', `Resolved Local Service: ${JSON.stringify(data)}`);
})
```
             通过[removeLocalService](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-mdns#mdnsremovelocalservice-1)方法，移除本地服务。

       ```
// removeLocalService移除本地服务。
mdns.removeLocalService(context, this.localServiceInfo).then((data: mdns.LocalServiceInfo) => {
  // ...
  hilog.info(0x0000, 'testTag', `Local Service Removed: ${JSON.stringify(data)}`);
})
```
     
                  #### 发现本地服务

     
             设备连接WiFi。

             从@kit.NetworkKit里导入mdns的命名空间。

       ```
// 从@kit.NetworkKit中导入mdns命名空间。
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```
             创建[DiscoveryService](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-mdns#mdnscreatediscoveryservice)对象，用于发现指定服务类型的MDNS服务。

       ```
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
    
// ...
// 创建DiscoveryService对象，用于发现指定服务类型的MDNS服务。
let serviceType = '_print._tcp';
let discoveryService = mdns.createDiscoveryService(context, serviceType);
```
             订阅MDNS服务发现相关状态变化。

       ```
// 订阅MDNS服务发现相关状态变化。
discoveryService.on('discoveryStart', (data: mdns.DiscoveryEventInfo) => {
  hilog.info(0x0000, 'testTag', JSON.stringify(data));
});
discoveryService.on('discoveryStop', (data: mdns.DiscoveryEventInfo) => {
  hilog.info(0x0000, 'testTag', JSON.stringify(data));
});
discoveryService.on('serviceFound', (data: mdns.LocalServiceInfo) => {
  hilog.info(0x0000, 'testTag', JSON.stringify(data));
  // ...
});
discoveryService.on('serviceLost', (data: mdns.LocalServiceInfo) => {
  hilog.info(0x0000, 'testTag', JSON.stringify(data));
  // ...
});
```
             启动搜索局域网内的MDNS服务。

       ```
// 启动搜索局域网内的MDNS服务。
discoveryService.startSearchingMDNS();
```
             停止搜索局域网内的MDNS服务。

       ```
// 停止搜索局域网内的MDNS服务。
discoveryService.stopSearchingMDNS();
```
             取消订阅的MDNS服务。

       ```
// 取消订阅的MDNS服务。
discoveryService.off('discoveryStart', (data: mdns.DiscoveryEventInfo) => {
  hilog.info(0x0000, 'testTag', JSON.stringify(data));
});
discoveryService.off('discoveryStop', (data: mdns.DiscoveryEventInfo) => {
  hilog.info(0x0000, 'testTag', JSON.stringify(data));
});
discoveryService.off('serviceFound', (data: mdns.LocalServiceInfo) => {
  hilog.info(0x0000, 'testTag', JSON.stringify(data));
  // ...
});
discoveryService.off('serviceLost', (data: mdns.LocalServiceInfo) => {
  hilog.info(0x0000, 'testTag', JSON.stringify(data));
  // ...
});
```

---
*Updated: 2026-04-20 01:46:40*
