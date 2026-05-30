# Sendable对象冻结

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `sendable-freeze`  |  **DocID**: `84f563374c584bc48f957b601cda9253`  |  **NodeID**: `0002017757957888849386ab7cec095a`

---

# Sendable对象冻结

 Sendable对象支持冻结操作。冻结后，对象变为只读，不能修改属性。因此，多个并发实例间访问时无需加锁。可以通过调用[Object.freeze](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)接口冻结对象。

   不支持在.ets文件中使用Object.freeze接口。

    #### 使用示例

提供ts文件封装Object.freeze方法。

    ```
// helper.ts
export function freezeObj(obj: any) {
  Object.freeze(obj);
}
```
  调用freeze方法冻结对象，然后将其发送到子线程。

    ```
// SendableFreeze.ets
import { freezeObj } from './helper';
import { worker } from '@kit.ArkTS';
 
@Sendable
export class GlobalConfig {
  // 一些配置属性与方法
  init() {
    // 初始化相关逻辑
    freezeObj(this); // 初始化完成后冻结当前对象
  }
}
 
@Entry
@Component
struct Index {
  build() {
    Column() {
      Text("Sendable freezeObj Test")
        .id('HelloWorld')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .onClick(() => {
          let gConfig = new GlobalConfig();
          gConfig.init();
          const workerInstance = new worker.ThreadWorker('entry/ets/workers/Worker.ets', { name: "Worker1" });
          workerInstance.postMessage(gConfig);
        })
    }
    .height('100%')
    .width('100%')
  }
}
```
  子线程直接操作对象，不加锁。

    ```
// Worker.ets
import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';
import { GlobalConfig } from '../pages/Index';

const workerPort: ThreadWorkerGlobalScope = worker.workerPort;
workerPort.onmessage = (e: MessageEvents) => {
  let gConfig: GlobalConfig = e.data;
  // 使用gConfig对象
}
```

---
*Updated: 2026-04-20 01:50:10*
