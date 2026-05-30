# Interface (AVSessionController)

> **分区**: API参考  |  **Slug**: `arkts-apis-avsession-avsessioncontroller`  |  **DocID**: `f07cdedfffa24f52915aea9a92d9b9d0`

---

# Interface (AVSessionController)

       AVSessionController控制器可查看会话ID，并可完成对会话发送命令及事件，获取会话元数据，播放状态信息等操作。

                     
       - 本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
       - 本Interface首批接口从API version 10开始支持。
      
                       #### 导入模块

     ```
import { avSession } from '@kit.AVSessionKit';
```
                  #### 属性

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

                                   名称         类型         只读         可选         说明                                       sessionId10+         string         是         否         AVSessionController对象唯一的会话标识。                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  private tag: string = "createNewSession";
  private sessionId: string = "";
  private AVSessionController?: avSession.AVSessionController;
  private currentAVSession?: avSession.AVSession;
  context = this.getUIContext();

  aboutToAppear(): void {

    avSession.createAVSession(this.getUIContext().getHostContext(), this.tag, "audio").then(async (data: avSession.AVSession) => {
      this.currentAVSession = data;
      this.sessionId = this.currentAVSession.sessionId;
      this.AVSessionController = await this.currentAVSession.getController();
      console.info(`Succeeded in creating AV session, sessionId: ${this.sessionId}`);
    });
  }

  build() {
    Column() {
      Text('AVSession Demo')
        .fontSize(20)
        .margin(10)
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```
                  #### getAVPlaybackState10+

     getAVPlaybackState(callback: AsyncCallback<AVPlaybackState>): void

     获取当前的远端播放状态。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<[AVPlaybackState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avplaybackstate10)>         是         回调函数，返回远端播放状态。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getAVPlaybackState((state: avSession.AVPlaybackState) => {
  console.info('Succeeded in getting AV playback state.');
});
```
                  #### getAVPlaybackState10+

     getAVPlaybackState(): Promise<AVPlaybackState>

     获取当前的远端播放状态。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<[AVPlaybackState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avplaybackstate10)>         Promise对象,返回远端播放状态。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getAVPlaybackState().then((state: avSession.AVPlaybackState) => {
  console.info('Succeeded in getting AV playback state.');
});
```
                  #### getAVMetadata10+

     getAVMetadata(): Promise<AVMetadata>

     获取会话元数据。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<[AVMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avmetadata10)>         Promise对象，返回会话元数据。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getAVMetadata().then((metadata: avSession.AVMetadata) => {
  console.info(`Succeeded in getting AV metadata, assetId: ${metadata.assetId}`);
});
```
                  #### getAVMetadata10+

     getAVMetadata(callback: AsyncCallback<AVMetadata>): void

     获取会话元数据。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<[AVMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avmetadata10)>         是         回调函数，返回会话元数据。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getAVMetadata((metadata: avSession.AVMetadata) => {
  console.info(`Succeeded in getting AV metadata, assetId: ${metadata.assetId}`);
});
```
                  #### getAVQueueTitle10+

     getAVQueueTitle(): Promise<string>

     获取当前会话播放列表的名称。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<string>         Promise对象。返回播放列表名称。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getAVQueueTitle().then((title: string) => {
  console.info(`Succeeded in getting AV queue title: ${title}`);
});
```
                  #### getAVQueueTitle10+

     getAVQueueTitle(callback: AsyncCallback<string>): void

     获取当前播放列表的名称。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<string>         是         回调函数，返回播放列表名称。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getAVQueueTitle((title: string) => {
  console.info(`Succeeded in getting AV queue title: ${title}`);
});
```
                  #### getAVQueueItems10+

     getAVQueueItems(): Promise<Array<AVQueueItem>>

     获取当前会话播放列表相关信息。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<Array<[AVQueueItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avqueueitem10)>>         Promise对象。返回播放列表队列。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getAVQueueItems().then((items: avSession.AVQueueItem[]) => {
  console.info(`Succeeded in getting AV queue items, length: ${items.length}`);
});
```
                  #### getAVQueueItems10+

     getAVQueueItems(callback: AsyncCallback<Array<AVQueueItem>>): void

     获取当前播放列表相关信息。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<Array<[AVQueueItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avqueueitem10)>>         是         回调函数，返回播放列表队列。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getAVQueueItems((items: avSession.AVQueueItem[]) => {
  console.info(`Succeeded in getting AV queue items, length: ${items.length}`);
});
```
                  #### skipToQueueItem10+

     skipToQueueItem(itemId: number): Promise<void>

     设置指定播放列表单项的ID，发送给session端处理，session端可以选择对这个单项歌曲进行播放。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       itemId         number         是         播放列表单项的ID值，用以表示选中的播放列表单项。                               **返回值：**

                                   类型         说明                                       Promise<void>         Promise对象。当播放列表单项ID设置成功，无返回结果，否则返回错误对象。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Parameter verification failed.                         6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
let queueItemId = 0;
avsessionController.skipToQueueItem(queueItemId).then(() => {
  console.info('Succeeded in skipping to queue item.');
});
```
                  #### skipToQueueItem10+

     skipToQueueItem(itemId: number, callback: AsyncCallback<void>): void

     设置指定播放列表单项的ID，发送给session端处理，session端可以选择对这个单项歌曲进行播放。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       itemId         number         是         播放列表单项的ID值，用以表示选中的播放列表单项。                         callback         AsyncCallback<void>         是         回调函数。当播放状态设置成功，err为undefined，否则返回错误对象。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Parameter verification failed.                         6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
let queueItemId = 0;
avsessionController.skipToQueueItem(queueItemId, () => {
  console.info('Succeeded in skipping to queue item.');
});
```
                  #### getOutputDevice10+

     getOutputDevice(): Promise<OutputDeviceInfo>

     获取播放设备信息。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<[OutputDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#outputdeviceinfo10)>         Promise对象，返回播放设备信息。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       600101         Session service exception.                         600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getOutputDevice().then((deviceInfo: avSession.OutputDeviceInfo) => {
  console.info('Succeeded in getting output device.');
});
```
                  #### getOutputDevice10+

     getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void

     获取播放设备信息。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<[OutputDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#outputdeviceinfo10)>         是         回调函数，返回播放设备信息。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       600101         Session service exception.                         600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getOutputDevice((deviceInfo: avSession.OutputDeviceInfo) => {
  console.info('Succeeded in getting output device.');
});
```
                  #### sendAVKeyEvent10+

     sendAVKeyEvent(event: KeyEvent): Promise<void>

     发送按键事件到控制器对应的会话。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       event         [KeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-keyevent)         是         按键事件。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Parameter verification failed.                         600101         Session service exception.                         600102         The session does not exist.                         600103         The session controller does not exist.                         600105         Invalid session command.                         600106         The session is not activated.                               **返回值：**

                                   类型         说明                                       Promise<void>         Promise对象。当事件发送成功，无返回结果，否则返回错误对象。                               **示例：**

     ```
import { Key, KeyEvent } from '@kit.InputKit';

let keyItem: Key = {code:0x49, pressedTime:2, deviceId:0};
let event:KeyEvent = {id:1, deviceId:0, actionTime:1, screenId:1, windowId:1, action:2, key:keyItem, unicodeChar:0, keys:[keyItem], ctrlKey:false, altKey:false, shiftKey:false, logoKey:false, fnKey:false, capsLock:false, numLock:false, scrollLock:false};

avsessionController.sendAVKeyEvent(event).then(() => {
  console.info('Succeeded in sending AV key event.');
});
```
                  #### sendAVKeyEvent10+

     sendAVKeyEvent(event: KeyEvent, callback: AsyncCallback<void>): void

     发送按键事件到会话。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       event         [KeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-keyevent)         是         按键事件。                         callback         AsyncCallback<void>         是         回调函数。当事件发送成功，err为undefined，否则返回错误对象。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Parameter verification failed.                         600101         Session service exception.                         600102         The session does not exist.                         600103         The session controller does not exist.                         600105         Invalid session command.                         600106         The session is not activated.                               **示例：**

     ```
import { Key, KeyEvent } from '@kit.InputKit';

let keyItem: Key = {code:0x49, pressedTime:2, deviceId:0};
let event:KeyEvent = {id:1, deviceId:0, actionTime:1, screenId:1, windowId:1, action:2, key:keyItem, unicodeChar:0, keys:[keyItem], ctrlKey:false, altKey:false, shiftKey:false, logoKey:false, fnKey:false, capsLock:false, numLock:false, scrollLock:false};
avsessionController.sendAVKeyEvent(event, () => {
  console.info('Succeeded in sending AV key event.');
});
```
                  #### getLaunchAbility10+

     getLaunchAbility(): Promise<WantAgent>

     获取应用在会话中保存的WantAgent对象。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<[WantAgent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-wantagent)>         Promise对象，返回在[setLaunchAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#setlaunchability10)保存的对象，包括应用的相关属性信息，如bundleName，abilityName，deviceId等。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getLaunchAbility().then((agent: object) => {
  console.info(`Succeeded in getting launch ability: ${agent}`);
});
```
                  #### getLaunchAbility10+

     getLaunchAbility(callback: AsyncCallback<WantAgent>): void

     获取应用在会话中保存的WantAgent对象。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<[WantAgent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-wantagent)>         是         回调函数。返回在[setLaunchAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#setlaunchability10)保存的对象，包括应用的相关属性信息，如bundleName，abilityName，deviceId等。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getLaunchAbility((agent: object) => {
  console.info(`Succeeded in getting launch ability: ${agent}`);
});
```
                  #### getRealPlaybackPositionSync10+

     getRealPlaybackPositionSync(): number

     获取当前播放位置。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       number         时间节点，毫秒数。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
let time: number = avsessionController.getRealPlaybackPositionSync();
```
                  #### isActive10+

     isActive(): Promise<boolean>

     获取会话是否被激活。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<boolean>         Promise对象，返回会话是否为激活状态，true表示被激活，false表示禁用。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.isActive().then((isActive: boolean) => {
  console.info(`Succeeded in checking active state: ${isActive}`);
});
```
                  #### isActive10+

     isActive(callback: AsyncCallback<boolean>): void

     判断会话是否被激活。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<boolean>         是         回调函数。返回会话是否为激活状态，true表示被激活，false表示禁用。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.isActive((isActive: boolean) => {
  console.info(`Succeeded in checking active state: ${isActive}`);
});
```
                  #### destroy10+

     destroy(): Promise<void>

     销毁当前控制器，销毁后当前控制器不可再用。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<void>         Promise对象。当控制器销毁成功，无返回结果，否则返回错误对象。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.destroy().then(() => {
  console.info('Succeeded in destroying.');
});
```
                  #### destroy10+

     destroy(callback: AsyncCallback<void>): void

     销毁当前控制器，销毁后当前控制器不可再用。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<void>         是         回调函数。当控制器销毁成功，err为undefined，否则返回错误对象。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.destroy(() => {
  console.info('Succeeded in destroying.');
});
```
                  #### getValidCommands10+

     getValidCommands(): Promise<Array<AVControlCommandType>>

     获取会话支持的有效命令。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<Array<[AVControlCommandType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-t#avcontrolcommandtype10)>>         Promise对象。返回有效命令的集合。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getValidCommands().then((validCommands: avSession.AVControlCommandType[]) => {
  console.info(`Succeeded in getting valid commands, size: ${validCommands.length}`);
});
```
                  #### getValidCommands10+

     getValidCommands(callback: AsyncCallback<Array<AVControlCommandType>>): void

     获取会话支持的有效命令。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<Array<[AVControlCommandType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-t#avcontrolcommandtype10)>>         是         回调函数，返回有效命令的集合。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getValidCommands((validCommands: avSession.AVControlCommandType[]) => {
  console.info(`Succeeded in getting valid commands, size: ${validCommands.length}`);
});
```
                  #### sendControlCommand10+

     sendControlCommand(command: AVControlCommand): Promise<void>

     通过控制器发送命令到其对应的会话。结果通过Promise异步回调方式返回。

                         媒体控制方在使用sendControlCommand命令前，需要确保控制对应的媒体会话注册了对应的监听，注册媒体会话相关监听的方法请参见接口[on('play')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#onplay10)、[on('pause')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#onpause10)等。

                **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       command         [AVControlCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avcontrolcommand10)         是         会话的相关命令和命令相关参数。                               **返回值：**

                                   类型         说明                                       Promise<void>         Promise对象。当命令发送成功，无返回结果，否则返回错误对象。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Parameter verification failed.                         6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600105         Invalid session command.                         6600106         The session is not activated.                         6600107         Too many commands or events.                               **示例：**

     ```
let avCommand: avSession.AVControlCommand = {command:'play'};
avsessionController.sendControlCommand(avCommand).then(() => {
  console.info('Succeeded in sending control command.');
});
```
                  #### sendControlCommand10+

     sendControlCommand(command: AVControlCommand, callback: AsyncCallback<void>): void

     通过会话控制器发送命令到其对应的会话。结果通过callback异步回调方式返回。

                         媒体控制方在使用sendControlCommand命令前，需要确保控制对应的媒体会话注册了对应的监听，注册媒体会话相关监听的方法请参见接口[on('play')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#onplay10)、[on('pause')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#onpause10)等。

                **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       command         [AVControlCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avcontrolcommand10)         是         会话的相关命令和命令相关参数。                         callback         AsyncCallback<void>         是         回调函数。当命令发送成功，err为undefined，否则返回错误对象。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Parameter verification failed.                         6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600105         Invalid session command.                         6600106         The session is not activated.                         6600107         Too many commands or events.                               **示例：**

     ```
let avCommand: avSession.AVControlCommand = {command:'play'};
avsessionController.sendControlCommand(avCommand, () => {
  console.info('Succeeded in sending control command.');
});
```
                  #### sendCommonCommand10+

     sendCommonCommand(command: string, args: {[key: string]: Object}): Promise<void>

     通过会话控制器发送自定义控制命令到其对应的会话。结果通过Promise异步回调方式返回。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       command         string         是         需要设置的自定义控制命令的名称。                         args         {[key: string]: Object}         是         需要传递的控制命令键值对。                                                   参数args支持的数据类型有：字符串、数字、布尔、对象、数组和文件描述符等，详细介绍请参见[@ohos.app.ability.Want (Want)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want)。

                **返回值：**

                                   类型         说明                                       Promise<void>         Promise对象。无返回结果。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Parameter verification failed.                         6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600105         Invalid session command.                         6600106         The session is not activated.                         6600107         Too many commands or events.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

let tag: string = "createNewSession";
let sessionId: string = "";
let controller:avSession.AVSessionController | undefined = undefined;
avSession.createAVSession(context, tag, "audio").then(async (data:avSession.AVSession)=> {
  currentAVSession = data;
  sessionId = currentAVSession.sessionId;
  controller = await currentAVSession.getController();
  console.info(`Succeeded in creating AV session, sessionId: ${sessionId}`);
});
let commandName = "my_command";
if (controller !== undefined) {
  (controller as avSession.AVSessionController).sendCommonCommand(commandName, {command : "This is my command"}).then(() => {
    console.info('Succeeded in sending common command.');
  })
}
```
                  #### sendCommonCommand10+

     sendCommonCommand(command: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void

     通过会话控制器发送自定义命令到其对应的会话。结果通过callback异步回���方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       command         string         是         需要设置的自定义控制命令的名称。                         args         {[key: string]: Object}         是         需要传递的控制命令键值对。                         callback         AsyncCallback<void>         是         回调函数。当命令发送成功，err为undefined，否则返回错误对象。                                                   参数args支持的数据类型有：字符串、数字、布尔、对象、数组和文件描述符等，详细介绍请参见[@ohos.app.ability.Want (Want)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want)。

                **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Parameter verification failed.                         6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600105         Invalid session command.                         6600106         The session is not activated.                         6600107         Too many commands or events.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';
          
let tag: string = "createNewSession";
let sessionId: string = "";
let controller:avSession.AVSessionController | undefined = undefined;
avSession.createAVSession(context, tag, "audio").then(async (data:avSession.AVSession)=> {
  currentAVSession = data;
  sessionId = currentAVSession.sessionId;
  controller = await currentAVSession.getController();
  console.info(`Succeeded in creating AV session, sessionId: ${sessionId}`);
});
let commandName = "my_command";
if (controller !== undefined) {
  (controller as avSession.AVSessionController).sendCommonCommand(commandName, {command : "This is my command"}, () => {
    console.info('Succeeded in sending common command.');
  })
}
```
                  #### sendCustomData20+

     sendCustomData(data: Record<string, Object>): Promise<void>

     发送私有数据到远端设备。使用Promise异步回调。

     **元服务API：** 从API version 20开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.AVCast

     **参数：**

                                   参数名         类型         必填         说明                                       data         Record<string, Object>         是         应用程序填充的自定义数据。服务端仅解析key为'customData'，且Object为string类型的对象。                               **返回值：**

                                   类型         说明                                       Promise<void>         Promise对象，无返回结果。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.You are advised to:1.Scheduled retry.2.Destroy the current session or session controller and re-create it.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  private tag: string = "createNewSession";
  private sessionId: string = "";
  private controller: avSession.AVSessionController | undefined = undefined;
  private currentAVSession?: avSession.AVSession;
  context = this.getUIContext();

  aboutToAppear(): void {
    avSession.createAVSession(this.getUIContext().getHostContext(), this.tag, "audio")
      .then(async (data: avSession.AVSession) => {
        this.currentAVSession = data;
        this.sessionId = this.currentAVSession.sessionId;
        this.controller = await this.currentAVSession.getController();
        console.info(`Succeeded in creating AV session, sessionId: ${this.sessionId}`);
      });

    if (this.controller !== undefined) {
      (this.controller as avSession.AVSessionController).sendCustomData({ customData: "This is my data" })
    }
  }

  build() {
    Column() {
      Text('AVSession Demo')
        .fontSize(20)
        .margin(10)
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```
                  #### getExtras10+

     getExtras(): Promise<{[key: string]: Object}>

     获取媒体提供方设置的自定义媒体数据包。使用Promise异步回调。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<{[key: string]: Object}>         Promise对象，返回媒体提供方设置的自定义媒体数据包，数据包的内容与setExtras设置的内容完全一致。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3.Parameter verification failed.                         6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600105         Invalid session command.                         6600107         Too many commands or events.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  private tag: string = "createNewSession";
  private sessionId: string = "";
  private controller: avSession.AVSessionController | undefined = undefined;
  private currentAVSession?: avSession.AVSession;
  context = this.getUIContext();

  aboutToAppear(): void {

    avSession.createAVSession(this.getUIContext().getHostContext(), this.tag, "audio")
      .then(async (data: avSession.AVSession) => {
        this.currentAVSession = data;
        this.sessionId = this.currentAVSession.sessionId;
        this.controller = await this.currentAVSession.getController();
        console.info(`Succeeded in creating AV session, sessionId: ${this.sessionId}`);
      });
    if (this.controller !== undefined) {
      (this.controller as avSession.AVSessionController).getExtras().then((extras) => {
        console.info(`Succeeded in getting extras: ${extras}`);
      });
    }
  }

  build() {
    Column() {
      Text('AVSession Demo')
        .fontSize(20)
        .margin(10)
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```
                  #### getExtras10+

     getExtras(callback: AsyncCallback<{[key: string]: Object}>): void

     获取媒体提供方设置的自定义媒体数据包。使用callback异步回调。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<{[key: string]: Object}>         是         回调函数，返回媒体提供方设置的自定义媒体数据包，数据包的内容与setExtras设置的内容完全一致。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3.Parameter verification failed.                         6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600105         Invalid session command.                         6600107         Too many commands or events.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

let tag: string = "createNewSession";
let sessionId: string = "";
let controller:avSession.AVSessionController | undefined = undefined;
avSession.createAVSession(context, tag, "audio").then(async (data:avSession.AVSession)=> {
  currentAVSession = data;
  sessionId = currentAVSession.sessionId;
  controller = await currentAVSession.getController();
  console.info(`Succeeded in creating AV session, sessionId: ${sessionId}`);
});
if (controller !== undefined) {
  (controller as avSession.AVSessionController).getExtras((extras) => {
    console.info(`Succeeded in getting extras: ${extras}`);
  });
}
```
                  #### getExtrasWithEvent18+

     getExtrasWithEvent(extraEvent: string): Promise<ExtraInfo>

     根据远端分布式事件类型，获取远端分布式媒体提供方设置的自定义媒体数据包。使用Promise异步回调。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       extraEvent         string         是                   远端分布式事件类型。可获取的事件类型来自于[setExtras](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#setextras10)。

          对Wearable设备类型，额外提供以下预设的事件类型：

          'AUDIO_GET_VOLUME'：获取远端设备音量。

          'AUDIO_GET_AVAILABLE_DEVICES'：获取远端所有可连接设备。

          'AUDIO_GET_PREFERRED_OUTPUT_DEVICE_FOR_RENDERER_INFO'：获取远端实际发声设备。

                               **返回值：**

                                   类型         说明                                       Promise<[ExtraInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-t#extrainfo18)>                   Promise对象，返回远端分布式媒体提供方设置的自定义媒体数据包。

          参数ExtraInfo支持的数据类型有：字符串、数字、布尔、对象、数组和文件描述符等，详细介绍请参见[@ohos.app.ability.Want (Want)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want)。

                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600105         Invalid session command.                               **示例：**

     ```
let controller: avSession.AVSessionController | ESObject;
const COMMON_COMMAND_STRING_1 = 'AUDIO_GET_VOLUME';
const COMMON_COMMAND_STRING_2 = 'AUDIO_GET_AVAILABLE_DEVICES';
const COMMON_COMMAND_STRING_3 = 'AUDIO_GET_PREFERRED_OUTPUT_DEVICE_FOR_RENDERER_INFO';
if (controller !== undefined) {
  controller.getExtrasWithEvent(COMMON_COMMAND_STRING_1).then(() => {
    console.info(`${[COMMON_COMMAND_STRING_1]}`);
  })

  controller.getExtrasWithEvent(COMMON_COMMAND_STRING_2).then(() => {
    console.info(`${[COMMON_COMMAND_STRING_2]}`);
  })

  controller.getExtrasWithEvent(COMMON_COMMAND_STRING_3).then(() => {
    console.info(`${[COMMON_COMMAND_STRING_3]}`);
  })
}
```
                  #### isDesktopLyricEnabled23+

     isDesktopLyricEnabled(): Promise<boolean>

     查询是否启用桌面歌词功能。使用Promise异步回调。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<boolean>         Promise对象。返回true表示启用桌面歌词功能；返回false表示不启用桌面歌词功能。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600111         The desktop lyrics feature is not supported.                               ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let tag: string = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let currentAVSession: avSession.AVSession = await avSession.createAVSession(context, tag, "audio");
          console.info(`Succeeded in creating AV session, sessionId: ${currentAVSession.sessionId}`);
          let controller: avSession.AVSessionController = await currentAVSession.getController();
          let enabled: boolean = await controller.isDesktopLyricEnabled()
          console.info(`desktop lyric enabled:${enabled}`)
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
                  #### onDesktopLyricEnabled23+

     onDesktopLyricEnabled(callback: Callback<boolean>): void

     桌面歌词功能启用状态变更的监听事件。使用callback异步回调。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         Callback<boolean>         是         回调函数。返回true表示桌面歌词功能启用；返回false表示桌面歌词功能未启用。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let tag: string = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let currentAVSession: avSession.AVSession = await avSession.createAVSession(context, tag, "audio");
          console.info(`Succeeded in creating AV session, sessionId: ${currentAVSession.sessionId}`);
          let controller: avSession.AVSessionController = await currentAVSession.getController();
          controller.onDesktopLyricEnabled((enabled: boolean) => {
            console.info(`desktop lyric enabled state : ${enabled}`);
          })
          console.info('Succeeded in setting onDesktopLyricEnabled.');
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
                  #### offDesktopLyricEnabled23+

     offDesktopLyricEnabled(callback?: Callback<boolean>): void

     取消桌面歌词启用状态变更事件监听，取消后将不再对该事件进行监听。使用callback异步回调。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         Callback<boolean>         否                   回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。

          该参数为可选参数，若不填写该参数，则认为取消所有桌面歌词功能启用状态变更事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let tag: string = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let currentAVSession: avSession.AVSession = await avSession.createAVSession(context, tag, "audio");
          console.info(`Succeeded in creating AV session, sessionId: ${currentAVSession.sessionId}`);
          let controller: avSession.AVSessionController = await currentAVSession.getController();
          controller.offDesktopLyricEnabled();
          console.info('Succeeded in setting offDesktopLyricEnabled.');
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
                  #### setDesktopLyricVisible23+

     setDesktopLyricVisible(visible: boolean): Promise<void>

     设置当前会话桌面歌词的显示状态。使用Promise异步回调。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       visible         boolean         是         是否显示桌面歌词。true表示显示；false表示不显示。                               **返回值：**

                                   类型         说明                                       Promise<void>         Promise对象，无返回结果。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600110         The desktop lyrics feature of this application is not enabled.                         6600111         The desktop lyrics feature is not supported.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let tag: string = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let currentAVSession: avSession.AVSession = await avSession.createAVSession(context, tag, "audio");
          console.info(`Succeeded in creating AV session, sessionId: ${currentAVSession.sessionId}`);
          let controller: avSession.AVSessionController = await currentAVSession.getController();
          await controller.setDesktopLyricVisible(true);
          console.info('Succeeded in setting desktop lyric visible.');
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
                  #### isDesktopLyricVisible23+

     isDesktopLyricVisible(): Promise<boolean>

     查询当前会话桌面歌词的显示状态。使用Promise异步回调。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<boolean>         Promise对象。返回true表示显示桌面歌词；返回false表示不显示桌面歌词。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600110         The desktop lyrics feature of this application is not enabled.                         6600111         The desktop lyrics feature is not supported.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let tag: string = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let currentAVSession: avSession.AVSession = await avSession.createAVSession(context, tag, "audio");
          console.info(`Succeeded in creating AV session, sessionId: ${currentAVSession.sessionId}`);
          let controller: avSession.AVSessionController = await currentAVSession.getController();
          let visible: boolean = await controller.isDesktopLyricVisible();
          console.info(`isDesktopLyricVisible: ${visible}`);
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
                  #### onDesktopLyricVisibilityChanged23+

     onDesktopLyricVisibilityChanged(callback: Callback<boolean>): void

     显示桌面歌词状态变更的监听事件。使用callback异步回调。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         Callback<boolean>         是         回调函数。返回true表示开启显示桌面歌词状态；返回false表示关闭显示桌面歌词状态。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let tag: string = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let currentAVSession: avSession.AVSession = await avSession.createAVSession(context, tag, "audio");
          console.info(`Succeeded in creating AV session, sessionId: ${currentAVSession.sessionId}`);
          let controller: avSession.AVSessionController = await currentAVSession.getController();
          controller.onDesktopLyricVisibilityChanged((visible: boolean) => {
            console.info(`desktop lyric visible state: ${visible}`);
          });
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
                  #### offDesktopLyricVisibilityChanged23+

     offDesktopLyricVisibilityChanged(callback?: Callback<boolean>): void

     取消显示桌面歌词状态变更事件监听，取消后将不再对该事件进行监听。使用callback异步回调。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         Callback<boolean>         否                   回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。

          该参数为可选参数，若不填写该参数，则认为取消所有显示桌面歌词状态变更事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let tag: string = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let currentAVSession: avSession.AVSession = await avSession.createAVSession(context, tag, "audio");
          console.info(`Succeeded in creating AV session, sessionId: ${currentAVSession.sessionId}`);
          let controller: avSession.AVSessionController = await currentAVSession.getController();
          controller.offDesktopLyricVisibilityChanged();
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
                  #### setDesktopLyricState23+

     setDesktopLyricState(state: DesktopLyricState): Promise<void>

     设置当前会话桌面歌词状态。使用Promise异步回调。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       state         [DesktopLyricState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#desktoplyricstate23)         是         桌面歌词状态。                               **返回值：**

                                   类型         说明                                       Promise<void>         Promise对象，无返回结果。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600110         The desktop lyrics feature of this application is not enabled.                         6600111         The desktop lyrics feature is not supported.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let tag: string = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let currentAVSession: avSession.AVSession = await avSession.createAVSession(context, tag, "audio");
          console.info(`Succeeded in creating AV session, sessionId: ${currentAVSession.sessionId}`);
          let controller: avSession.AVSessionController = await currentAVSession.getController();
          let state: avSession.DesktopLyricState = {
            isLocked: true,
          };
          await controller.setDesktopLyricState(state);
          console.info('Succeeded in setting desktop lyric state.');
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
                  #### getDesktopLyricState23+

     getDesktopLyricState(): Promise<DesktopLyricState>

     获取当前会话桌面歌词状态。使用Promise异步回调。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<[DesktopLyricState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#desktoplyricstate23)>         Promise对象。返回桌面歌词状态。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                         6600110         The desktop lyrics feature of this application is not enabled.                         6600111         The desktop lyrics feature is not supported.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let tag: string = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let currentAVSession: avSession.AVSession = await avSession.createAVSession(context, tag, "audio");
          console.info(`Succeeded in creating AV session, sessionId: ${currentAVSession.sessionId}`);
          let controller: avSession.AVSessionController = await currentAVSession.getController();
          let state: avSession.DesktopLyricState = await controller.getDesktopLyricState();
          console.info(`getDesktopLyricState: ${state.isLocked}`);
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
                  #### onDesktopLyricStateChanged23+

     onDesktopLyricStateChanged(callback: Callback<DesktopLyricState>): void

     桌面歌词状态变更的监听事件。使用callback异步回调。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         Callback<[DesktopLyricState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#desktoplyricstate23)>         是         回调函数。返回桌面歌词状态。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let tag: string = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let currentAVSession: avSession.AVSession = await avSession.createAVSession(context, tag, "audio");
          console.info(`Succeeded in creating AV session, sessionId: ${currentAVSession.sessionId}`);
          let controller: avSession.AVSessionController = await currentAVSession.getController();
          controller.onDesktopLyricStateChanged((state: avSession.DesktopLyricState) => {
            console.info(`desktop lyric isLocked : ${state.isLocked}`);
          })
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
                  #### offDesktopLyricStateChanged23+

     offDesktopLyricStateChanged(callback?: Callback<DesktopLyricState>): void

     取消桌面歌词状态变更事件监听，取消后将不再对该事件进行监听。使用callback异步回调。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         Callback<[DesktopLyricState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#desktoplyricstate23)>         否                   回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。

          该参数为可选参数，若不填写该参数，则认为取消所有桌面歌词状态变更事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let tag: string = "createNewSession";
          let context: Context = this.getUIContext().getHostContext() as Context;
          let currentAVSession: avSession.AVSession = await avSession.createAVSession(context, tag, "audio");
          console.info(`Succeeded in creating AV session, sessionId: ${currentAVSession.sessionId}`);
          let controller: avSession.AVSessionController = await currentAVSession.getController();
          controller.offDesktopLyricStateChanged();
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
                  #### on('metadataChange')10+

     on(type: 'metadataChange', filter: Array<keyof AVMetadata> | 'all', callback: (data: AVMetadata) => void)

     设置元数据变化的监听事件。

     每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是                   事件回调类型，支持事件'metadataChange'：当元数据需要更新时，触发该事件。

          需要更新表示对应属性值被重新设置过，不论新值与旧值是否相同。

                         filter         Array<keyof AVMetadata>|'all'         是         'all'表示关注通话状态所有字段变化；Array<keyof AVMetadata>表示关注Array中的字段变化。                         callback         (data: [AVMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avmetadata10)) => void         是         回调函数，参数data是需要更新的元数据。只包含需要更新的元数据属性，不代表当前全量的元数据。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.on('metadataChange', 'all', (metadata: avSession.AVMetadata) => {
  console.info(`on metadataChange assetId : ${metadata.assetId}`);
});

avsessionController.on('metadataChange', ['assetId', 'title', 'description'], (metadata: avSession.AVMetadata) => {
  console.info(`on metadataChange assetId : ${metadata.assetId}`);
});
```
                  #### off('metadataChange')10+

     off(type: 'metadataChange', callback?: (data: AVMetadata) => void)

     取消元数据变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'metadataChange'。                         callback         (data: [AVMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avmetadata10)) => void         否                   回调函数，参数data是需要更新的元数据。只包含需要更新的元数据属性，并不代表当前全量的元数据。

          该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('metadataChange');
```
                  #### on('playbackStateChange')10+

     on(type: 'playbackStateChange', filter: Array<keyof AVPlaybackState> | 'all', callback: (state: AVPlaybackState) => void)

     设置播放状态变化的监听事件。

     每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是                   事件回调类型，支持事件'playbackStateChange'，当播放状态需要更新时，触发该事件。

          需要更新表示对应属性值被重新设置过，不论新值与旧值是否相同。

                         filter         Array<keyof AVPlaybackState>|'all'         是                   'all'表示关注播放状态所有字段更新。

          Array<keyof AVPlaybackstate> 表示关注Array中的字段更新。

                         callback         (state: [AVPlaybackState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avplaybackstate10)) => void         是         回调函数，参数state是需要更新的播放状态。只包含需要更新的播放状态属性，并不代表当前全量的播放状态。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.on('playbackStateChange', 'all', (playbackState: avSession.AVPlaybackState) => {
  console.info(`on playbackStateChange state : ${playbackState.state}`);
});

avsessionController.on('playbackStateChange', ['state', 'speed', 'loopMode'], (playbackState: avSession.AVPlaybackState) => {
  console.info(`on playbackStateChange state : ${playbackState.state}`);
});
```
                  #### off('playbackStateChange')10+

     off(type: 'playbackStateChange', callback?: (state: AVPlaybackState) => void)

     取消播放状态变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'playbackStateChange'。                         callback         (state: [AVPlaybackState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avplaybackstate10)) => void         否                   回调函数，参数state是需要更新的播放状态。只包含需要更新的播放状态属性，并不代表当前全量的播放状态。

          该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('playbackStateChange');
```
                  #### on('callMetadataChange')11+

     on(type: 'callMetadataChange', filter: Array<keyof CallMetadata> | 'all', callback: Callback<CallMetadata>): void

     设置通话元数据变化的监听事件。

     每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         事件回调类型，支持事件'callMetadataChange'：当通话元数据变化时，触发该事件。                         filter         Array<keyof CallMetadata>|'all'         是         'all'表示关注通话元数据所有字段变化；Array<keyof CallMetadata> 表示关注Array中的字段变化。| 'all'。                         callback         Callback<[CallMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#callmetadata11)>         是         回调函数，参数callmetadata是变化后的通话元数据。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.on('callMetadataChange', 'all', (callmetadata: avSession.CallMetadata) => {
  console.info(`on callMetadataChange state : ${callmetadata.name}`);
});

avsessionController.on('callMetadataChange', ['name'], (callmetadata: avSession.CallMetadata) => {
  console.info(`on callMetadataChange state : ${callmetadata.name}`);
});
```
                  #### off('callMetadataChange')11+

     off(type: 'callMetadataChange', callback?: Callback<CallMetadata>): void

     取消设置通话元数据变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'callMetadataChange'。                         callback         Callback<[CallMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#callmetadata11)>         否                   回调函数，参数calldata是变化后的通话原数据。

          该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('callMetadataChange');
```
                  #### on('callStateChange')11+

     on(type: 'callStateChange', filter: Array<keyof AVCallState> | 'all', callback: Callback<AVCallState>): void

     设置通话状态变化的监听事件。

     每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         事件回调类型，支持事件'callStateChange'：当通话状态变化时，触发该事件。                         filter         Array<keyof AVCallState>|'all'         是         'all' 表示关注通话状态所有字段变化；Array<keyof AVCallState>表示关注Array中的字段变化。| 'all'。                         callback         Callback<[AVCallState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avcallstate11)>         是         回调函数，参数callstate是变化后的通话状态。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.on('callStateChange', 'all', (callstate: avSession.AVCallState) => {
  console.info(`on callStateChange state : ${callstate.state}`);
});

avsessionController.on('callStateChange', ['state'], (callstate: avSession.AVCallState) => {
  console.info(`on callStateChange state : ${callstate.state}`);
});
```
                  #### off('callStateChange')11+

     off(type: 'callStateChange', callback?: Callback<AVCallState>): void

     取消设置通话状态变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'callStateChange'。                         callback         Callback<[AVCallState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avcallstate11)>         否                   回调函数，参数callstate是变化后的通话状态。

          该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('callMetadataChange');
```
                  #### on('sessionDestroy')10+

     on(type: 'sessionDestroy', callback: () => void)

     会话销毁的监听事件。

     每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         事件回调类型，支持事件'sessionDestroy'：当检测到会话销毁时，触发该事件。                         callback         () => void         是         回调函数。当监听事件注册成功，err为undefined，否则为错误对象。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.on('sessionDestroy', () => {
  console.info('Succeeded in session destroy.');
});
```
                  #### off('sessionDestroy')10+

     off(type: 'sessionDestroy', callback?: () => void)

     取消监听会话的销毁事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'sessionDestroy'。                         callback         () => void         否                   回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。

          该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('sessionDestroy');
```
                  #### on('activeStateChange')10+

     on(type: 'activeStateChange', callback: (isActive: boolean) => void)

     会话的激活状态的监听事件。

     每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         事件回调类型，支持事件'activeStateChange'：当检测到会话的激活状态发生改变时，触发该事件。                         callback         (isActive: boolean) => void         是         回调函数。参数isActive表示会话是否被激活。true表示被激活，false表示禁用。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.on('activeStateChange', (isActive: boolean) => {
  console.info(`Succeeded in active state change: ${isActive}`);
});
```
                  #### off('activeStateChange')10+

     off(type: 'activeStateChange', callback?: (isActive: boolean) => void)

     取消监听会话激活状态变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'activeStateChange'。                         callback         (isActive: boolean) => void         否                   回调函数。参数isActive表示会话是否被激活。true表示被激活，false表示禁用。

          该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('activeStateChange');
```
                  #### on('validCommandChange')10+

     on(type: 'validCommandChange', callback: (commands: Array<AVControlCommandType>) => void)

     会话支持的有效命令变化监听事件。

     每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         事件回调类型，支持事件'validCommandChange'：当检测到会话的合法命令发生改变时，触发该事件。                         callback         (commands: Array<[AVControlCommandType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-t#avcontrolcommandtype10)>) => void         是         回调函数。参数commands是有效命令的集合。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.on('validCommandChange', (validCommands: avSession.AVControlCommandType[]) => {
  console.info(`Succeeded in valid command change, size: ${validCommands.length}`);
  console.info(`Succeeded in valid command change, validCommands: ${validCommands.values()}`);
});
```
                  #### off('validCommandChange')10+

     off(type: 'validCommandChange', callback?: (commands: Array<AVControlCommandType>) => void)

     取消监听会话有效命令变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'validCommandChange'。                         callback         (commands: Array<[AVControlCommandType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-t#avcontrolcommandtype10)>) => void         否                   回调函数。参数commands是有效命令的集合。

          该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('validCommandChange');
```
                  #### on('outputDeviceChange')10+

     on(type: 'outputDeviceChange', callback: (state: ConnectionState, device: OutputDeviceInfo) => void): void

     设置播放设备变化的监听事件。

     每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         事件回调类型，支持事件为'outputDeviceChange'：当播放设备变化时，触发该事件）。                         callback         (state: [ConnectionState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-e#connectionstate10), device: [OutputDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#outputdeviceinfo10)) => void         是         回调函数，参数device是设备相关信息。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.on('outputDeviceChange', (state: avSession.ConnectionState, device: avSession.OutputDeviceInfo) => {
  console.info(`on outputDeviceChange state: ${state}, device : ${device}`);
});
```
                  #### off('outputDeviceChange')10+

     off(type: 'outputDeviceChange', callback?: (state: ConnectionState, device: OutputDeviceInfo) => void): void

     取消监听分布式设备变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'outputDeviceChange'。                         callback         (state: [ConnectionState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-e#connectionstate10), device: [OutputDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#outputdeviceinfo10)) => void         否                   回调函数，参数device是设备相关信息。

          该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('outputDeviceChange');
```
                  #### on('sessionEvent')10+

     on(type: 'sessionEvent', callback: (sessionEvent: string, args: {[key: string]: Object}) => void): void

     媒体控制器设置会话自定义事件变化的监听器。

     每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         事件回调类型，支持事件'sessionEvent'：当会话事件变化时，触发该事件。                         callback         (sessionEvent: string, args: {[key: string]: Object}) => void         是         回调函数，sessionEvent为变化的会话事件名，args为事件的参数。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';
       
let tag: string = "createNewSession";
let sessionId: string = "";
let controller:avSession.AVSessionController | undefined = undefined;
avSession.createAVSession(context, tag, "audio").then(async (data:avSession.AVSession)=> {
  currentAVSession = data;
  sessionId = currentAVSession.sessionId;
  controller = await currentAVSession.getController();
  console.info(`Succeeded in creating AV session, sessionId: ${sessionId}`);
});
if (controller !== undefined) {
  (controller as avSession.AVSessionController).on('sessionEvent', (sessionEvent, args) => {
    console.info(`OnSessionEvent, sessionEvent is ${sessionEvent}, args: ${JSON.stringify(args)}`);
  });
}
```
                  #### off('sessionEvent')10+

     off(type: 'sessionEvent', callback?: (sessionEvent: string, args: {[key: string]: Object}) => void): void

     取消会话事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'sessionEvent'。                         callback         (sessionEvent: string, args: {[key: string]: Object}) => void         否         回调函数，参数sessionEvent是变化的事件名，args为事件的参数。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('sessionEvent');
```
                  #### on('queueItemsChange')10+

     on(type: 'queueItemsChange', callback: (items: Array<[AVQueueItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avqueueitem10)>) => void): void

     媒体控制器设置会话自定义播放列表变化的监听器。

     每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         事件回调类型，支持事件'queueItemsChange'：当session修改播放列表时，触发该事件。                         callback         (items: Array<[AVQueueItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avqueueitem10)>) => void         是         回调函数，items为变化的播放列表。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.on('queueItemsChange', (items: avSession.AVQueueItem[]) => {
  console.info(`OnQueueItemsChange, items length is ${items.length}`);
});
```
                  #### off('queueItemsChange')10+

     off(type: 'queueItemsChange', callback?: (items: Array<[AVQueueItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avqueueitem10)>) => void): void

     取消播放列表变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'queueItemsChange'。                         callback         (items: Array<[AVQueueItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avqueueitem10)>) => void         否                   回调函数，参数items是变化的播放列表。

          该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('queueItemsChange');
```
                  #### on('queueTitleChange')10+

     on(type: 'queueTitleChange', callback: (title: string) => void): void

     媒体控制器设置会话自定义播放列表的名称变化的监听器。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         事件回调类型，支持事件'queueTitleChange'：当session修改播放列表名称时，触发该事件。                         callback         (title: string) => void         是         回调函数，title为变化的播放列表名称。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.on('queueTitleChange', (title: string) => {
  console.info(`queueTitleChange, title is ${title}`);
});
```
                  #### off('queueTitleChange')10+

     off(type: 'queueTitleChange', callback?: (title: string) => void): void

     取消播放列表名称变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'queueTitleChange'。                         callback         (title: string) => void         否                   回调函数，参数items是变化的播放列表名称。

          该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。

                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('queueTitleChange');
```
                  #### on('extrasChange')10+

     on(type: 'extrasChange', callback: (extras: {[key: string]: Object}) => void): void

     媒体控制器设置自定义媒体数据包事件变化的监听器。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         事件回调类型，支持事件'extrasChange'：当媒体提供方设置自定义媒体数据包时，触发该事件。                         callback         (extras: {[key: string]: Object}) => void         是         回调函数，extras为媒体提供方新设置的自定义媒体数据包，该自定义媒体数据包与dispatchSessionEvent方法设置的数据包完全一致。                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

let tag: string = "createNewSession";
let sessionId: string = "";
let controller:avSession.AVSessionController | undefined = undefined;
avSession.createAVSession(context, tag, "audio").then(async (data:avSession.AVSession)=> {
  currentAVSession = data;
  sessionId = currentAVSession.sessionId;
  controller = await currentAVSession.getController();
  console.info(`Succeeded in creating AV session, sessionId: ${sessionId}`);
});
if (controller !== undefined) {
  (controller as avSession.AVSessionController).on('extrasChange', (extras) => {
    console.info(`Caught extrasChange event,the new extra is: ${JSON.stringify(extras)}`);
  });
}
```
                  #### off('extrasChange')10+

     off(type: 'extrasChange', callback?: (extras: {[key: string]: Object}) => void): void

     取消自定义媒体数据包变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持事件'extrasChange'。                         callback         (extras: {[key: string]: Object}) => void         否                   注册监听事件时的回调函数。

          该参数为可选参数，若不填写该参数，则认为取消会话所有与此事件相关的监听。

                               **错误码：**

     以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       401         parameter check failed. 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.                         6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('extrasChange');
```
                  #### on('customDataChange')20+

     on(type: 'customDataChange', callback: Callback<Record<string, Object>>): void

     注册从远程设备发送的自定义数据的监听器。

     **元服务API：** 从API version 20开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.AVCast

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         事件回调类型，支持事件'customDataChange'，当媒体提供方发送自定义数据时，触发该事件。                         callback         Callback<Record<string, Object>>         是         回调函数，用于接收自定义数据。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
import { avSession } from '@kit.AVSessionKit';

let tag: string = "createNewSession";
let sessionId: string = "";
let controller:avSession.AVSessionController | undefined = undefined;
avSession.createAVSession(context, tag, "audio").then(async (data:avSession.AVSession)=> {
  currentAVSession = data;
  sessionId = currentAVSession.sessionId;
  controller = await currentAVSession.getController();
  console.info(`Succeeded in creating AV session, sessionId: ${sessionId}`);
});
if (controller !== undefined) {
  (controller as avSession.AVSessionController).on('customDataChange', (callback) => {
    console.info(`Caught customDataChange event,the new callback is: ${JSON.stringify(callback)}`);
  });
}
```
                  #### off('customDataChange')20+

     off(type: 'customDataChange', callback?: Callback<Record<string, Object>>): void

     取消自定义数据监听。

     **元服务API：** 从API version 20开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.AVCast

     **参数：**

                                   参数名         类型         必填         说明                                       type         string         是         取消对应的监听事件，支持的事件是'customDataChange'。                         callback         Callback<Record<string, Object>>         否         注册监听事件时的回调函数。该参数为可选参数，若不填写该参数，则认为取消会话所有与此事件相关的监听。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.off('customDataChange');
```
                  #### getAVPlaybackStateSync10+

     getAVPlaybackStateSync(): AVPlaybackState;

     使用同步方法获取当前会话的播放状态。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       [AVPlaybackState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avplaybackstate10)         当前会话的播放状态。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
let playbackState: avSession.AVPlaybackState = avsessionController.getAVPlaybackStateSync();
```
                  #### getAVMetadataSync10+

     getAVMetadataSync(): AVMetadata

     使用同步方法获取会话元数据。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       [AVMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avmetadata10)         会话元数据。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
let metaData: avSession.AVMetadata = avsessionController.getAVMetadataSync();
```
                  #### getAVCallState11+

     getAVCallState(): Promise<AVCallState>

     获取通话状态数据。结果通过Promise异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<[AVCallState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avcallstate11)>         Promise对象，返回通话状态。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getAVCallState().then((callstate: avSession.AVCallState) => {
  console.info(`Succeeded in getting AV call state: ${callstate.state}`);
});
```
                  #### getAVCallState11+

     getAVCallState(callback: AsyncCallback<AVCallState>): void

     获取通话状态数据。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<[AVCallState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avcallstate11)>         是         回调函数，返回通话状态。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getAVCallState((callstate: avSession.AVCallState) => {
  console.info(`Succeeded in getting AV call state: ${callstate.state}`);
});
```
                  #### getCallMetadata11+

     getCallMetadata(): Promise<CallMetadata>

     获取通话会话的元数据。结果通过Promise异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Promise<[CallMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#callmetadata11)>         Promise对象，返回会话元数据。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getCallMetadata().then((calldata: avSession.CallMetadata) => {
  console.info(`Succeeded in getting call metadata, name: ${calldata.name}`);
});
```
                  #### getCallMetadata11+

     getCallMetadata(callback: AsyncCallback<CallMetadata>): void

     获取通话会话的元数据。结果通过callback异步回调方式返回。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **参数：**

                                   参数名         类型         必填         说明                                       callback         AsyncCallback<[CallMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#callmetadata11)>         是         回调函数，返回会话元数据。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
avsessionController.getCallMetadata((calldata: avSession.CallMetadata) => {
  console.info(`Succeeded in getting call metadata, name: ${calldata.name}`);
});
```
                  #### getAVQueueTitleSync10+

     getAVQueueTitleSync(): string

     使用同步方法获取当前会话播放列表的名称。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       string         当前会话播放列表名称。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
let currentQueueTitle: string = avsessionController.getAVQueueTitleSync();
```
                  #### getAVQueueItemsSync10+

     getAVQueueItemsSync(): Array<AVQueueItem>

     使用同步方法获取当前会话播放列表相关信息。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Array<[AVQueueItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#avqueueitem10)>         当前会话播放列表队列。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
let currentQueueItems: Array<avSession.AVQueueItem> = avsessionController.getAVQueueItemsSync();
```
                  #### getOutputDeviceSync10+

     getOutputDeviceSync(): OutputDeviceInfo

     使用同步方法获取当前输出设备信息。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       [OutputDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-i#outputdeviceinfo10)         当前输出设备信息。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600103         The session controller does not exist.                               **示例：**

     ```
let currentOutputDevice: avSession.OutputDeviceInfo = avsessionController.getOutputDeviceSync();
```
                  #### isActiveSync10+

     isActiveSync(): boolean

     使用同步方法判断会话是否被激活。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       boolean         会话是否为激活状态，true表示被激活，false表示禁用。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
let isActive: boolean = avsessionController.isActiveSync();
```
                  #### getValidCommandsSync10+

     getValidCommandsSync(): Array<AVControlCommandType>

     使用同步方法获取会话支持的有效命令。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.AVSession.Core

     **返回值：**

                                   类型         说明                                       Array<[AVControlCommandType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-t#avcontrolcommandtype10)>         会话支持的有效命令的集合。                               **错误码：**

     以下错误码的详细介绍请参见[媒体会话管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-avsession)。

                                   错误码ID         错误信息                                       6600101         Session service exception.                         6600102         The session does not exist.                         6600103         The session controller does not exist.                               **示例：**

     ```
let validCommands: Array<avSession.AVControlCommandType> = avsessionController.getValidCommandsSync();
```

---
*Updated: 2026-04-22 06:40:56*
