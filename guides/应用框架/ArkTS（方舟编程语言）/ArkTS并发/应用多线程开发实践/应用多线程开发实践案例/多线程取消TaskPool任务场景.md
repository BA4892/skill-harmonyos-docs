# 多线程取消TaskPool任务场景

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `multi-thread-cancel-task`  |  **DocID**: `de9b15ce591247fb831252c61a645655`  |  **NodeID**: `000201775795788884874735a0e5be77`

---

# 多线程取消TaskPool任务场景

       由于任务池[TaskPool](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool)的任务对象[Task](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool#task)不支持跨线程传递，无法在子线程中直接取消任务。从 API version 18 开始，Task新增了[任务ID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool#属性)属性，支持通过任务ID在子线程中取消任务。开发者可将已创建任务的任务ID存储在[Sendable对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable)中，需要取消任务时，通过Sendable对象在子线程中取消任务。详情可参考以下示例。

    
           定义一个Sendable类，在类属性中存储任务ID。

      ```
// sendable.ets
@Sendable
export class SendableTest {
  // 存储任务ID
  private taskId: number = 0;

  constructor(id: number) {
    this.taskId = id;
  }

  public getTaskId(): number {
    return this.taskId;
  }
}
```
           在UI主线程向TaskPool提交一个延时任务，并在子线程取消该任务。

      ```
// TaskpoolCancel.ets
import { taskpool } from '@kit.ArkTS';
import { SendableTest } from '../utils/Sendable';
import { BusinessError } from '@kit.BasicServicesKit';
import { PromptAction } from '@kit.ArkUI';

@Concurrent
function cancel(send: SendableTest) {
  // 在多线程中通过任务ID取消任务
  taskpool.cancel(send.getTaskId());
  console.info('cancel task finished');
}

@Concurrent
function delayed() {
  console.info('delayed task finished');
}

@Entry
@Component
struct TaskpoolCancel {
  @State message: string = 'CancelTaskpool';
  @State returnMessage: string = 'return...';
  @State promptAction: PromptAction = this.getUIContext().getPromptAction();

  build() {
    Row() {
      Column() {
        Button(this.message)
          .fontSize(25)
          .fontWeight(FontWeight.Bold)
          .onClick(async () => {
            let task = new taskpool.Task(delayed);
            taskpool.executeDelayed(2000, task).catch((e: BusinessError) => {
              console.error(`taskpool execute error, message is: ${e.message}`);
              // taskpool execute error, message is: taskpool:: task has been canceled.
            });
            let send = new SendableTest(task.taskId);
            taskpool.execute(cancel, send);
            this.returnMessage = 'Taskpool canceled!';
            this.promptAction.showToast({ message: this.returnMessage });
          })
        // ...
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

---
*Updated: 2026-04-20 01:49:53*
