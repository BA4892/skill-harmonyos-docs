# 使用SoundPlayer开发系统音效播放功能

> **分区**: Guides  |  **Slug**: `using-soundplayer-for-playback`  |  **DocID**: `c9262394d54f4a72a851375fd04ac89d`  |  **NodeID**: `0002017768396966040308005db1eef9`

---

# 使用SoundPlayer开发系统音效播放功能

       从API version 23开始，支持系统音效播放。

    SoundPlayer提供系统音效播放功能，适用于拍照或录像提示音，比如在开始拍照、开始录像或结束录像时播放提示音。

              #### 支持的音效类型

     支持的音效类型[SystemSoundType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-systemsoundmanager#systemsoundtype)信息如下表所示。可通过systemSoundManager.SystemSoundType.PHOTO_SHUTTER等具体类型，作为[load](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-systemsoundplayer#load)、[play](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-systemsoundplayer#play)或[unload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-systemsoundplayer#unload)方法的入参。

           
                        | 播放音效类型          | 值          | 说明         
                               | PHOTO_SHUTTER          | 0          | 拍照音效。         
                 | VIDEO_RECORDING_BEGIN          | 1          | 视频录制开始音效。         
                 | VIDEO_RECORDING_END          | 2          | 视频录制结束音效。         
             

                       #### 开发步骤

     以下各步骤示例为片段代码，可通过点击示例代码右下方的链接获取[完整示例](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/SystemSoundPlayer)。

     
             在调用SystemSoundPlayer的接口前，需要先通过[createSystemSoundPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-systemsoundmanager#systemsoundmanagercreatesystemsoundplayer)创建实例。

       ```
import { systemSoundManager } from '@kit.AudioKit';
// ...

// SystemSoundPlayer对象。
let systemSoundPlayer: systemSoundManager.SystemSoundPlayer | null = null;

// ...
  systemSoundManager.createSystemSoundPlayer().then((systemSoundPlayerInstance) => {
    console.info('Succeeded in creating the system sound player.');
    systemSoundPlayer = systemSoundPlayerInstance;
  }).catch((err: BusinessError) => {
    console.error(`Failed to create the system sound player. Code: ${err.code}, message: ${err.message}`);
  });
```
             调用[load](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-systemsoundplayer#load)接口，加载指定类型音效资源。

       ```
import { systemSoundManager } from '@kit.AudioKit';
// ...

// 音效类型。
let systemSoundType: systemSoundManager.SystemSoundType = systemSoundManager.SystemSoundType.PHOTO_SHUTTER;

// ...
  systemSoundPlayer?.load(systemSoundType).then(() => {
    console.info('Succeeded in calling the load method.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to call the load method. Code: ${err.code}, message: ${err.message}`);
  });
```
             调用[play](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-systemsoundplayer#play)接口，播放已加载的音效资源。

       ```
import { systemSoundManager } from '@kit.AudioKit';
// ...

// 音效类型。
let systemSoundType: systemSoundManager.SystemSoundType = systemSoundManager.SystemSoundType.PHOTO_SHUTTER;

// ...
  systemSoundPlayer?.play(systemSoundType).then(() => {
    console.info('Succeeded in calling the play method.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to call the play method. Code: ${err.code}, message: ${err.message}`);
  });
```
             调用[unload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-systemsoundplayer#unload)接口，卸载之前已加载的音效资源。

       ```
import { systemSoundManager } from '@kit.AudioKit';
// ...

// 音效类型。
let systemSoundType: systemSoundManager.SystemSoundType = systemSoundManager.SystemSoundType.PHOTO_SHUTTER;

// ...
  systemSoundPlayer?.unload(systemSoundType).then(() => {
    console.info('Succeeded in calling the unload method.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to call the unload method. Code: ${err.code}, message: ${err.message}`);
  });
```
             调用[release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-systemsoundplayer#release)接口，释放系统音效播放器。

       ```
systemSoundPlayer?.release().then(() => {
  console.info('Succeeded in calling the release method.');
}).catch((err: BusinessError) => {
  console.error(`Failed to call the release method. Code: ${err.code}, message: ${err.message}`);
});
```

---
*Updated: 2026-04-22 06:34:41*
