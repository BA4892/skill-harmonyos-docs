# 使用AudioHaptic开发音振协同播放功能(ArkTs)

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `using-audiohaptic-for-playback`  |  **DocID**: `2a5518cf8d3f4873bda2c685eaa87f49`  |  **NodeID**: `00020177579552692874216f99b7821b`

---

# 使用AudioHaptic开发音振协同播放功能(ArkTs)

       AudioHaptic提供音频与振动协同播放及管理的方法，适用于需要在播放音频时同步发起振动的场景，如来电铃声随振、键盘按键反馈、消息通知反馈等。

              #### 开发指导

     使用AudioHaptic播放音频并同步开启振动，涉及到音频及振动资源的管理、音频时延模式及音频流使用类型的配置、音振播放器的创建及管理等。本开发指导将以一次音振协同播放的过程为例，向开发者讲解如何使用AudioHaptic进行音振协同播放，建议配合[audioHaptic](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic)的API说明阅读。

                  #### [h2]权限申请

     如果应用创建的AudioHapticPlayer需要触发振动，则需要校验应用是否拥有该权限：ohos.permission.VIBRATE。

     
      - [声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。
      - [向用户申请授权](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-user-authorization)。
     
                  #### [h2]开发步骤及注意事项

     以下各步骤示例为片段代码，可通过示例代码右下方链接获取[完整示例](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRendererSampleJS)。

     
             获取音振管理器实例，并注册音频及振动资源，资源支持情况可以查看[AudioHapticManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#audiohapticmanager)。

                                 开发者可通过如下两种方式注册资源：

         
          - 方式1：使用[registerSource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#registersource)接口，通过文件URI来注册资源。
          - 方式2（推荐）：从API version 20开始，支持使用[registerSourceFromFd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#registersourcefromfd20)接口，通过文件描述符来注册资源，更便于开发者使用。
         
                      ```
import { audio, audioHaptic } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

let audioHapticManagerInstance: audioHaptic.AudioHapticManager = audioHaptic.getAudioHapticManager();

// 单个应用最多支持同时注册128个资源，超过之后将会注册失败（返回注册的资源ID为负数）。
// 推荐应用合理控制注册资源数量，对于不再需要使用的资源，建议及时取消注册。

// ...
  // 方法1：使用registerSource接口注册资源。
  let audioUri = 'data/audioTest.wav'; // 此处仅作示例，实际使用时需要将文件替换为应用目标音频资源的Uri。
  let hapticUri = 'data/hapticTest.json'; // 此处仅作示例，实际使用时需要将文件替换为应用目标振动资源的Uri。
  let idForUri = 0;

  audioHapticManagerInstance.registerSource(audioUri, hapticUri).then((value: number) => {
    console.info(`Promise returned to indicate that the source id of the registered source ${value}.`);
    idForUri = value;
    // ...
  }).catch((err: BusinessError) => {
    console.error(`Failed to register source ${err}`);
    // ...
  });
  // ...
  // 方法2:使用registerSourceFromFd接口注册资源。
  // 此处仅作示例,实际使用时需要将文件替换为应用rawfile目录下的对应文件。
  let audioFile = context.resourceManager.getRawFdSync('audioTest.ogg');
  let audioFd: audioHaptic.AudioHapticFileDescriptor = {
    fd: audioFile.fd,
    offset: audioFile.offset,
    length: audioFile.length,
  };
  // 此处仅作示例,实际使用时需要将文件替换为应用rawfile目录下的对应文件。
  let hapticFile = context.resourceManager.getRawFdSync('hapticTest.json');
  let hapticFd: audioHaptic.AudioHapticFileDescriptor = {
    fd: hapticFile.fd,
    offset: hapticFile.offset,
    length: hapticFile.length,
  };
  audioHapticManagerInstance.registerSourceFromFd(audioFd, hapticFd).then((value: number) => {
    console.info('Succeeded in doing registerSourceFromFd.');
    idForFd = value;
    // ...
  }).catch((err: BusinessError) => {
    console.error(`Failed to registerSourceFromFd. Code: ${err.code}, message: ${err.message}`);
    // ...
  });
```
             设置音振播放器参数，各参数作用可以查看[AudioHapticManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#audiohapticmanager)。

       ```
let latencyMode: audioHaptic.AudioLatencyMode = audioHaptic.AudioLatencyMode.AUDIO_LATENCY_MODE_FAST;
audioHapticManagerInstance.setAudioLatencyMode(idForFd, latencyMode);

let usage: audio.StreamUsage = audio.StreamUsage.STREAM_USAGE_NOTIFICATION;
audioHapticManagerInstance.setStreamUsage(idForFd, usage);
```
             调用[createPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#createplayer)方法，创建AudioHapticPlayer实例。

       ```
let options: audioHaptic.AudioHapticPlayerOptions = {muteAudio: false, muteHaptics: false};
let audioHapticPlayer: audioHaptic.AudioHapticPlayer | undefined = undefined;
// ...
  audioHapticManagerInstance.createPlayer(idForFd, options).then((value: audioHaptic.AudioHapticPlayer) => {
    console.info(`Create the audio haptic player successfully.`);
    audioHapticPlayer = value;
    // ...
  }).catch((err: BusinessError) => {
    console.error(`Failed to create player ${err}`);
    // ...
  });
```
             调用[start](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#start)方法，开启音频播放并同步开启振动。

       ```
audioHapticPlayer.start().then(() => {
  console.info(`Promise returned to indicate that start playing successfully.`);
  // ...
}).catch((err: BusinessError) => {
  console.error(`Failed to start playing. ${err}`);
  // ...
});
```
             调用[stop](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#stop)方法，停止音频播放并同步停止振动。

       ```
audioHapticPlayer.stop().then(() => {
  console.info(`Promise returned to indicate that stop playing successfully.`);
  // ...
}).catch((err: BusinessError) => {
  console.error(`Failed to stop playing. ${err}`);
  // ...
});
```
             调用[release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#release)方法，释放AudioHapticPlayer实例。

       ```
audioHapticPlayer.release().then(() => {
  console.info(`Promise returned to indicate that release the audio haptic player successfully.`);
  // ...
}).catch((err: BusinessError) => {
  console.error(`Failed to release the audio haptic player. ${err}`);
  // ...
});
```
             调用[unregisterSource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#unregistersource)方法，将已注册的音频及振动资源移除注册。

       ```
// 对于不再需要使用的资源，建议应用及时取消注册，避免出现资源泄漏或资源数量超上限等问题。
audioHapticManagerInstance.unregisterSource(idForFd).then(() => {
  console.info(`Promise returned to indicate that unregister source successfully`);
  // ...
}).catch((err: BusinessError) => {
  console.error(`Failed to unregister source ${err}`);
  // ...
});
```

---
*Updated: 2026-04-20 01:45:29*
