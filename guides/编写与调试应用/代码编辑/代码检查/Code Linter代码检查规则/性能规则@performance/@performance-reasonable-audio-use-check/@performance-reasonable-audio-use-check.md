# @performance/reasonable-audio-use-check

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `ide-reasonable-audio-use-check`  |  **DocID**: `1415b5811107455ebca716bf51bfaae4`  |  **NodeID**: `0002017757901225585610de7eef3e2a`

---

# @performance/reasonable-audio-use-check

 无长时任务的应用退到后台时，禁止使用麦克风或扬声器。

 #### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/reasonable-audio-use-check": "suggestion",
  }
}
```
  #### 选项

该规则无需配置额外选项。

  #### 正例

```
import { UIAbility } from '@kit.AbilityKit';
import { audio } from '@kit.AudioKit';
import { media } from '@kit.MediaKit';
import { BusinessError } from '@kit.BasicServicesKit';

let audioStreamInfo: audio.AudioStreamInfo = {
  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。
  channels: audio.AudioChannel.CHANNEL_2, // 通道。
  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。
  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。
};
const audioRendererOptions: audio.AudioRendererOptions = {
  streamInfo: audioStreamInfo,
  rendererInfo: {
    usage: audio.StreamUsage.STREAM_USAGE_UNKNOWN,
    rendererFlags: 1
  }
}
let audioCapturerInfo: audio.AudioCapturerInfo = {
  source: audio.SourceType.SOURCE_TYPE_MIC, // 音源类型：Mic音频源。根据业务场景配置，参考SourceType。
  capturerFlags: 0 // 音频采集器标志。
};
let audioCapturerOptions: audio.AudioCapturerOptions = {
  streamInfo: audioStreamInfo,
  capturerInfo: audioCapturerInfo
};
let audioRenderer: audio.AudioRenderer
let avPlayer: media.AVPlayer
let audioCapturer: audio.AudioCapturer;

export default class EntryAbility extends UIAbility {
  // Create an AudioRenderer based on the service requirements at the foreground
  onForeground(): void {
    audio.createAudioRenderer(audioRendererOptions, ((err, data) => {
      audioRenderer = data;
    }));
    avPlayer.play();
    audio.createAudioCapturer(audioCapturerOptions, (err, data) => {
      audioCapturer = data;
    });
  }

  onBackground(): void {
    // Return to the background to stop or pause
    audioRenderer.stop((err: BusinessError) => {
    });
    avPlayer.stop();
    audioCapturer.stop((err: BusinessError) => {
    });
  }
}
```
  #### 反例

```
import { UIAbility } from '@kit.AbilityKit';
import { audio } from '@kit.AudioKit';
import { media } from '@kit.MediaKit';

let audioStreamInfo: audio.AudioStreamInfo = {
  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。
  channels: audio.AudioChannel.CHANNEL_2, // 通道。
  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。
  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。
};
const audioRendererOptions: audio.AudioRendererOptions = {
  streamInfo: audioStreamInfo,
  rendererInfo: {
    usage: audio.StreamUsage.STREAM_USAGE_UNKNOWN,
    rendererFlags: 1
  }
}
let audioCapturerInfo: audio.AudioCapturerInfo = {
  source: audio.SourceType.SOURCE_TYPE_MIC, // 音源类型：Mic音频源。根据业务场景配置，参考SourceType。
  capturerFlags: 0 // 音频采集器标志。
};
let audioCapturerOptions: audio.AudioCapturerOptions = {
  streamInfo: audioStreamInfo,
  capturerInfo: audioCapturerInfo
};
let audioRenderer: audio.AudioRenderer
let avPlayer: media.AVPlayer
let audioCapturer: audio.AudioCapturer;

export default class EntryAbility extends UIAbility {
  // Create an AudioRenderer based on the service requirements at the foreground
  onForeground(): void {
    audio.createAudioRenderer(audioRendererOptions, ((err, data) => {
      audioRenderer = data;
    }));
    avPlayer.play();
    audio.createAudioCapturer(audioCapturerOptions, (err, data) => {
      audioCapturer = data;
    });
  }

  onBackground(): void {
  }
}
```
  #### 规则集

plugin:@performance/all Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。

---
*Updated: 2026-04-22 01:08:45*
