# Worker同步调用宿主线程的接口

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `worker-invoke-mainthread-interface`  |  **DocID**: `c18aaf8e4d0c460bb613546416365981`  |  **NodeID**: `000201775795788884838f6dd83fe106`

---

# Worker同步调用宿主线程的接口

 如果一个接口已在宿主线程中实现，Worker可以通过以下方式调用该接口。

 以下示例展示了Worker同步调用宿主线程接口的方法，创建worker的方法可参考[创建worker的注意事项](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-introduction#创建worker的注意事项)。

 
首先，在宿主线程实现需要调用的接口，并创建Worker对象，在Worker对象上注册需要调用的对象。

    ```
import worker from '@ohos.worker';
import { IconItemSource } from './IconItemSource';

// 创建Worker对象
const workerInstance: worker.ThreadWorker = new worker.ThreadWorker('../workers/Worker');

class PicData {
  public iconItemSourceList: IconItemSource[] = [];

  public setUp(): string {
    for (let index = 0; index < 20; index++) {
      const numStart: number = index * 6;
      // 此处循环使用6张图片资源
      this.iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 1}`));
      this.iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 2}`));
      this.iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 3}`));
      this.iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 4}`));
      this.iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 5}`));
      this.iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 6}`));

    }
    return 'setUpIconItemSourceList success!';
  }
}

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('HelloWorld')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
        .onClick(() => {
          let picData = new PicData();
          // 在Worker上注册需要调用的对象
          workerInstance.registerGlobalCallObject('picData', picData);
          workerInstance.postMessage('run setUp in picData');
          this.message = 'success';
        })
    }
    .height('100%')
    .width('100%')
  }
}
```
  然后，在Worker中通过callGlobalCallObjectMethod接口可以调用宿主线程中的getMessage()方法。

    ```
import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';
import { CopyEntry } from '../Sendable/CopyEntry';

const workerPort: ThreadWorkerGlobalScope = worker.workerPort;

try {
  // 调用方法无入参
  let res: string = workerPort.callGlobalCallObjectMethod('picData', 'setUp', 0) as string;
  console.error('worker: ', res);
} catch (error) {
  // 异常处理
  console.error('worker: error code is ' + error.code + ' error message is ' + error.message);
}
```

---
*Updated: 2026-04-20 01:49:41*
