# 管理应用与Wear Engine服务的连接状态

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `wearengine_service_status`  |  **DocID**: `682563275e6045888fffcdbf65f76d5f`  |  **NodeID**: `000201775795852716515d370aaa3bf4`

---

# 管理应用与Wear Engine服务的连接状态

                 #### 监测应用与Wear Engine服务的连接状态

     华为运动健康App在后台停止服务（如功耗过高），从而导致应用与Wear Engine服务的连接状态发生变化。对于类似这种不确定的断开情况，开发者可以通过本功能特性了解当前应用和Wear Engine的连接状态。前提是在服务断开前，开发者已经使用该功能订阅过对Wear Engine服务连接状态的监测。

     
             在使用Wear Engine服务前，请导入WearEngine与相关模块。

       ```
import { wearEngine } from '@kit.WearEngine';
import { BusinessError } from '@kit.BasicServicesKit';
```
             构造当服务连接断开时执行的回调函数。

       ```
let callback = () => {
  console.info(`The service destruction event`);
}
```
             调用[wearEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wearengine_api)中的[on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wearengine_api#wearengineon)方法，订阅监听应用与Wear Engine服务的断联事件。

       ```
try {
  wearEngine.on('serviceDie', callback);
  console.info(`Succeeded in subscribing the service destruction event.`);
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`Failed to subscribe the service destruction event. Code is ${err.code}, message is ${err.message}`);
}
```
             调用[wearEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wearengine_api)中的[off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wearengine_api#wearengineoff)方法，取消监听应用与Wear Engine服务的断联事件。需要传入订阅监听时的同一个回调函数对象。

       ```
try {
  wearEngine.off('serviceDie', callback);
  console.info(`Succeeded in unsubscribing the service destruction event.`);
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`Failed to unsubscribe the service destruction event. Code is ${err.code}, message is ${err.message}`);
}
```
     
                  #### 断开应用与Wear Engine服务的连接

     断开后，将释放Wear Engine资源，监测设备状态、收消息、收文件等功能不可用，监听服务端断联事件的回调函数不会执行，同时会清理掉之前注册的回调函数。如需重新连接，主动调用任意接口即可。

     
             在使用Wear Engine服务前，请导入WearEngine与相关模块。

       ```
import { wearEngine } from '@kit.WearEngine';
import { BusinessError } from '@kit.BasicServicesKit';
```
             调用[wearEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wearengine_api)中的[destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wearengine_api#wearenginedestroy)方法，断开应用与Wear Engine服务的连接。

       ```
wearEngine.destroy().then(() => {
  console.info(`Succeeded in destroying wear engine channel`);
}).catch((error: BusinessError) => {
  console.error(`Failed to destroy wear engine channel. Code is ${error.code}, message is ${error.message}`);
})
```

---
*Updated: 2026-04-20 01:47:00*
