# @correctness/avsession-metadata-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-avsession-metadata-check`  |  **DocID**: `b6f65f5f41c343d48f75f86514b2ecb1`  |  **NodeID**: `0002017757901225583977864a2d12bd`

---

# @correctness/avsession-metadata-check

 建议音视频应用接入AVSession场景下，提供基础的媒体会话元数据和媒体会话播放状态，包含封面、标题、歌曲作者/副标题、时长、播放状态（暂停、播放）、播放位置。

 改善[音视频播放](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-access-scene#设置元数据)体验场景下，建议优先修改。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@correctness/avsession-metadata-check": "warn"
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import { BusinessError } from '@kit.BasicServicesKit';
import { avSession } from '@kit.AVSessionKit';
let tag = "createNewSession";
let context: Context = getContext(this);
let metadata: avSession.AVMetadata = {
  assetId: "121278",
  // Title
  title: "lose yourself",
  artist: "Eminem",
  // Lyrics generator
  author: "ST",
  album: "Slim shady",
  writer: "",
  composer: "ST",
  // Subtitle
  subtitle: "8 Mile",
  // Duration
  duration: 2222,
  // Cover art
  mediaImage: "https://www.example.com/example.jpg",
  description: "Rap",
  // The LRC format contains two types of elements: time tag + lyrics, and ID tag.
  // Example: [00:25.44]xxx\r\n[00:26.44]xxx\r\n
  lyric: "Lyrics in LRC format",
  previousAssetId: "121277",
  nextAssetId: "121279"
};
let playbackState: avSession.AVPlaybackState = {
  // Playing state.
  state:avSession.PlaybackState.PLAYBACK_STATE_PLAY,
  speed: 1.0,
  // Playback position.
  position:{elapsedTime:10, updateTime:(new Date()).getTime()},
  bufferedTime:1000,
  loopMode:avSession.LoopMode.LOOP_MODE_SINGLE,
  isFavorite:true
};
avSession.createAVSession(context, tag, "audio", (err: BusinessError, data: avSession.AVSession) => {
  if (err) {
    console.error(`CreateAVSession BusinessError: code: ${err.code}, message: ${err.message}`);
  } else {
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
  }
});
```
  #### 反例

```
import { BusinessError } from '@kit.BasicServicesKit';
import { avSession } from '@kit.AVSessionKit';
let tag = "createNewSession";
let context: Context = getContext(this);
let metadata: avSession.AVMetadata = {
  assetId: "121278",
  // Title
  title: "lose yourself",
  artist: "Eminem",
  // Lyrics generator
  author: "ST",
  album: "Slim shady",
  writer: "",
  composer: "ST",
  // Subtitle
  subtitle: "8 Mile",
  description: "Rap",
  // The LRC format contains two types of elements: time tag + lyrics, and ID tag.
  // Example: [00:25.44]xxx\r\n[00:26.44]xxx\r\n
  lyric: "Lyrics in LRC format",
  previousAssetId: "121277",
  nextAssetId: "121279"
};
let playbackState: avSession.AVPlaybackState = {
  // Playing state.
  state:avSession.PlaybackState.PLAYBACK_STATE_PLAY,
  speed: 1.0,
  // Playback position.
  position:{elapsedTime:10, updateTime:(new Date()).getTime()},
  bufferedTime:1000,
  loopMode:avSession.LoopMode.LOOP_MODE_SINGLE,
  isFavorite:true
};
// warning
avSession.createAVSession(context, tag, "audio", (err: BusinessError, data: avSession.AVSession) => {
  if (err) {
    console.error(`CreateAVSession BusinessError: code: ${err.code}, message: ${err.message}`);
  } else {
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
  }
});
```
  #### 规则集

plugin:@correctness/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:41*
