# @correctness/avsession-buttons-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-avsession-buttons-check`  |  **DocID**: `97b0fd7aad464b61a851bfab9ed4d5bd`  |  **NodeID**: `00020177579012255838115a7d3dfc49`

---

# @correctness/avsession-buttons-check

 建议音乐、视频、听书类应用通过AVSession监听播放、暂停、停止、下一首、上一首按键事件，并响应。

 改善[音视频播放](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-access-scene#注册控制命令)体验场景下，建议优先修改。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@correctness/avsession-buttons-check": "warn"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import { BusinessError } from '@kit.BasicServicesKit';
import { avSession } from '@kit.AVSessionKit';
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
      Text(this.message)
        .onClick(async () => {
          let context = this.getUIContext().getHostContext() as Context;
          let tag = "createNewSession";
          let metadata: avSession.AVMetadata = {
            assetId: "121278",
            title: "lose yourself",
            artist: "Eminem",
            author: "ST",
            album: "Slim shady",
            writer: "",
            composer: "ST",
            duration: 2222,
            mediaImage: "https://www.example.com/example.jpg",
            subtitle: "8 Mile",
            description: "Rap",
            lyric: "lrc",
            previousAssetId: "121277",
            nextAssetId: "121279"
          };
          let playbackState: avSession.AVPlaybackState = {
            state: avSession.PlaybackState.PLAYBACK_STATE_PLAY,
            speed: 1.0,
            position: { elapsedTime: 10, updateTime: (new Date()).getTime() },
            bufferedTime: 1000,
            loopMode: avSession.LoopMode.LOOP_MODE_SINGLE,
            isFavorite: true
          };

          avSession.createAVSession(context, tag, "audio").then((data: avSession.AVSession) => {
            data.setAVMetadata(metadata, (err: BusinessError) => {
              if (err) {
                console.error(`SetAVMetadata BusinessError: code: ${err.code}, message: ${err.message}`);
              } else {
                console.info('SetAVMetadata successfully');
              }
            });
            data.setAVPlaybackState(playbackState).then(() => {
              console.info('SetAVPlaybackState successfully');
            }).catch((err: BusinessError) => {
              console.error(`SetAVPlaybackState BusinessError: code: ${err.code}, message: ${err.message}`);
            });
            // Process the play command.
            data.on('play', () => {
            });
            // Process the pause command.
            data.on('pause', () => {
            });
            // Process the stop command.
            data.on('stop', () => {
            });
            // Process the play-next command.
            data.on('playNext', () => {
            });
            // Process the play-previous command.
            data.on('playPrevious', () => {
            });
            console.info(`CreateAVSession : SUCCESS : sessionId = ${data.sessionId}`);
          }).catch((err: BusinessError) => {
            console.info(`CreateAVSession BusinessError: code: ${err.code}, message: ${err.message}`);
          })
        });
    }
    .width('100%')
    .height('100%')
  }
}
```
  #### 反例

```
import { BusinessError } from '@kit.BasicServicesKit';
import { avSession } from '@kit.AVSessionKit';
let tag = "createNewSession";
let context: Context = getContext(this);
let metadata: avSession.AVMetadata = {
  assetId: "121278",
  title: "lose yourself",
  artist: "Eminem",
  author: "ST",
  album: "Slim shady",
  writer: "",
  composer: "ST",
  duration: 2222,
  mediaImage: "https://www.example.com/example.jpg",
  subtitle: "8 Mile",
  description: "Rap",
  lyric: "lrc",
  previousAssetId: "121277",
  nextAssetId: "121279"
};
let playbackState: avSession.AVPlaybackState = {
  state: avSession.PlaybackState.PLAYBACK_STATE_PLAY,
  speed: 1.0,
  position: { elapsedTime: 10, updateTime: (new Date()).getTime() },
  bufferedTime: 1000,
  loopMode: avSession.LoopMode.LOOP_MODE_SINGLE,
  isFavorite: true
};
// Warning
avSession.createAVSession(context, tag, "audio").then((data: avSession.AVSession) => {
  data.setAVMetadata(metadata, (err: BusinessError) => {
    if (err) {
      console.error(`SetAVMetadata BusinessError: code: ${err.code}, message: ${err.message}`);
    } else {
      console.info('SetAVMetadata successfully');
    }
  });
  data.setAVPlaybackState(playbackState).then(() => {
    console.info('SetAVPlaybackState successfully');
  }).catch((err: BusinessError) => {
    console.error(`SetAVPlaybackState BusinessError: code: ${err.code}, message: ${err.message}`);
  });
  // Process the play command.
  data.on('play', () => {
  });
  // Process the pause command.
  data.on('pause', () => {
  });
  // Process the stop command.
  data.on('stop', () => {
  });
  // Process the seek command.
  data.on('seek', () => {
  });
  // Process the favorite/like command for the audio session.
  data.on('toggleFavorite', () => {
  });
  console.info(`CreateAVSession : SUCCESS : sessionId = ${data.sessionId}`);
}).catch((err: BusinessError) => {
  console.info(`CreateAVSession BusinessError: code: ${err.code}, message: ${err.message}`);
})
```
  #### 规则集

plugin:@correctness/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:40*
