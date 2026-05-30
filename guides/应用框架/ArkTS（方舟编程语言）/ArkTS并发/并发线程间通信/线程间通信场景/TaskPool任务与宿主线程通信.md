# TaskPool任务与宿主线程通信

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `taskpool-communicates-with-mainthread`  |  **DocID**: `47d363479b204d1f97b361ec36d9fa61`  |  **NodeID**: `0002017757957888847657b19b91fb7e`

---

# TaskPool任务与宿主线程通信

 如果Task不仅需要返回最终执行结果，还需定时通知宿主线程状态和数据变化，或分段返回大量数据（如从数据库读取大量数据），可按以下方式实现。

 下面以多个图片加载任务结果实时返回为例说明。

 
实现接收Task消息的方法。

    ```
import { taskpool } from '@kit.ArkTS';
import { IconItemSource } from './IconItemSource';

function notice(data: number): void {
  console.info('子线程任务已执行完，共加载图片: ', data);
}
```
  在需要执行的Task中，添加sendData()接口将消息发送给宿主线程。在宿主线程通过onReceiveData()接口接收消息。这样宿主线程就可以通过notice()接口接收到Task发送的数据。

    ```
export class IconItemSource {
  image: string | Resource = '';
  text: string | Resource = '';

  constructor(image: string | Resource = '', text: string | Resource = '') {
    this.image = image;
    this.text = text;
  }
}
```
    ```
import { taskpool } from '@kit.ArkTS';
import { IconItemSource } from './IconItemSource';

function notice(data: number): void {
  console.info('子线程任务已执行完，共加载图片: ', data);
}

// 通过Task的sendData方法，即时通知宿主线程信息
@Concurrent
export function loadPictureSendData(count: number): IconItemSource[] {
  let iconItemSourceList: IconItemSource[] = [];
  // 遍历添加6*count个IconItem的数据
  for (let index = 0; index < count; index++) {
    const numStart: number = index * 6;
    // 此处循环使用6张图片资源
    iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 1}`));
    iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 2}`));
    iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 3}`));
    iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 4}`));
    iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 5}`));
    iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 6}`));

    taskpool.Task.sendData(iconItemSourceList.length);
  }
  return iconItemSourceList;
}

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            let iconItemSourceList: IconItemSource[];
            let lodePictureTask: taskpool.Task = new taskpool.Task(loadPictureSendData, 30);
            // 设置notice方法接收Task发送的消息
            lodePictureTask.onReceiveData(notice);
            taskpool.execute(lodePictureTask).then((res: object) => {
              iconItemSourceList = res as IconItemSource[];
            })
            this.message = 'success';
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

---
*Updated: 2026-04-20 01:49:17*
