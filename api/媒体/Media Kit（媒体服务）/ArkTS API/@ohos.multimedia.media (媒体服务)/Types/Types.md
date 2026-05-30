# Types

> **分区**: API参考  |  **Slug**: `arkts-apis-media-t`  |  **DocID**: `cff5c8b868f94ab682656fd132429a4c`

---

# Types

                        本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

                       #### SoundPool10+

     type SoundPool = _SoundPool

     音频池，提供了系统声音的加载、播放、音量设置、循环设置、停止播放、资源卸载等功能。

     **系统能力：** SystemCapability.Multimedia.Media.SoundPool

                                   类型         说明                                       [_SoundPool](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-soundpool#soundpool)         音频池，提供了系统声音的加载、播放、音量设置、循环设置、停止播放、资源卸载等功能。                                            #### PlayParameters10+

     type PlayParameters = _PlayParameters

     表示音频池播放参数设置。

     **系统能力：** SystemCapability.Multimedia.Media.SoundPool

                                   类型         说明                                       [_PlayParameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-soundpool#playparameters)         表示音频池播放参数设置。                                            #### AVPlayerState9+

     type AVPlayerState = 'idle' | 'initialized' | 'prepared' | 'playing' | 'paused' | 'completed' | 'stopped' | 'released' | 'error'

     [AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)的状态机，可通过state属性主动获取当前状态，也可通过监听[stateChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#onstatechange9)事件上报当前状态，状态机之间的切换规则，可参考[音频播放开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avplayer-for-playback)。

     **元服务API：** 从API version 11开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.AVPlayer

                                   类型         说明                                       'idle'                   闲置状态，AVPlayer刚被创建[createAVPlayer()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-f#mediacreateavplayer9)或者调用了[reset()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#reset9)方法之后，进入idle状态。

          首次创建[createAVPlayer()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-f#mediacreateavplayer9)，所有属性都为默认值。

          调用[reset()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#reset9)方法，url9+ 或 fdSrc9+或dataSrc10+属性及loop属性会被重置，其他用户设置的属性将被保留。

                         'initialized'         资源初始化，在idle 状态设置 url9+ 或 fdSrc9+属性，AVPlayer会进入initialized状态，此时可以配置窗口、音频等静态属性。                         'prepared'         已准备状态，在initialized状态调用[prepare()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#prepare9)方法，AVPlayer会进入prepared状态，此时播放引擎的资源已准备就绪。                         'playing'         正在播放状态，在prepared/paused/completed状态调用[play()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#play9)方法，AVPlayer会进入playing状态。                         'paused'         暂停状态，在playing状态调用pause方法，AVPlayer会进入paused状态。                         'completed'         播放至结尾状态，当媒体资源播放至结尾时，如果用户未设置循环播放（loop = true），AVPlayer会进入completed状态，此时调用[play()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#play9)会进入playing状态和重播，调用[stop()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#stop9)会进入stopped状态。                         'stopped'         停止状态，在prepared/playing/paused/completed状态调用[stop()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#stop9)方法，AVPlayer会进入stopped状态，此时播放引擎只会保留属性，但会释放内存资源，可以调用[prepare()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#prepare9)重新准备，也可以调用[reset()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#reset9)重置，或者调用[release()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#release9)彻底销毁。                         'released'         销毁状态，销毁与当前AVPlayer关联的播放引擎，无法再进行状态转换，调用[release()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#release9)方法后，会进入released状态，结束流程。                         'error'                   错误状态，当**播放引擎**发生**不可逆的错误**（详见[Media错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-media)），则会转换至当前状态，可以调用[reset()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#reset9)重置，也可以调用[release()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#release9)销毁重建。

          **注意：**

          区分error状态和 [on('error')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#onerror9) ：

          1、进入error状态时，会触发on('error')监听事件，可以通过on('error')事件获取详细错误信息；

          2、处于error状态时，播放服务进入不可播控的状态，要求客户端设计容错机制，使用[reset()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#reset9)重置或者[release()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#release9)销毁重建；

          3、如果客户端收到on('error')，但未进入error状态：

          原因1：客户端未按状态机调用API或传入参数错误，被AVPlayer拦截提醒，需要客户端调整代码逻辑；

          原因2：播放过程发现码流问题，导致容器、解码短暂异常，不影响连续播放和播控操作的，不需要客户端设计容错机制。

                                            #### OnTrackChangeHandler12+

     type OnTrackChangeHandler = (index: number, isSelected: boolean) => void

     track变更事件回调方法。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.AVPlayer

     **参数：**

                                   参数名         类型         必填         说明                                       index         number         是         当前变更的track索引。                         isSelected         boolean         是         当前变更的track索引是否被选中。true表示处于选中状态，false表示处于非选中状态。                                            #### OnAVPlayerStateChangeHandle12+

     type OnAVPlayerStateChangeHandle = (state: AVPlayerState, reason: StateChangeReason) => void

     播放状态机切换事件回调方法。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.AVPlayer

     **参数：**

                                   参数名         类型         必填         说明                                       state         [AVPlayerState](#avplayerstate9)         是         当前播放状态。                         reason         [StateChangeReason](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-e#statechangereason9)         是         当前播放状态的切换原因。                                            #### OnBufferingUpdateHandler12+

     type OnBufferingUpdateHandler = (infoType: BufferingInfoType, value: number) => void

     播放缓存事件回调方法。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.AVPlayer

     **参数：**

                                   参数名         类型         必填         说明                                       infoType         [BufferingInfoType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-e#bufferinginfotype8)         是         缓存时间类型。                         value         number         是         缓存时间类型的值。                                            #### OnVideoSizeChangeHandler12+

     type OnVideoSizeChangeHandler = (width: number, height: number) => void

     视频播放宽高变化事件回调方法。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.AVPlayer

     **参数：**

                                   参数名         类型         必填         说明                                       width         number         是         视频宽度，单位为像素（px）。                         height         number         是         视频高度，单位为像素（px）。                                            #### OnSuperResolutionChanged 18+

     type OnSuperResolutionChanged = (enabled: boolean) => void

     视频超分开关事件回调方法。若通过[PlaybackStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#playbackstrategy12)正确使能超分，超分算法状态变化时会通过此回调上报，视频起播时也会上报超分初始开启/关闭状态。若未使能超分，不会触发该回调。

     出现以下两种情况，超分算法会自动关闭。

     
      - 目前超分算法最高仅支持30帧及以下的视频。若视频帧率超过30帧，或者在倍速播放等场景下导致输入帧率超出超分算法处理能力，超分会自动关闭。
      - 目前超分算法支持输入分辨率范围为[320x320, 1920x1080]，单位为像素。若播放过程中输入视频分辨率超出此范围，超分算法会自动关闭。
     
     **元服务API：** 从API version 18开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.AVPlayer

     **参数：**

                                   参数名         类型         必填         说明                                       enabled         boolean         是         表示当前超分是否开启。true表示超分开启，false表示超分关闭。                                            #### OnSeiMessageHandle18+

     type OnSeiMessageHandle = (messages: Array<SeiMessage>, playbackPosition?: number) => void

     获取SEI信息，使用场景：订阅SEI信息事件，回调返回SEI详细信息。

     **元服务API：** 从API version 18开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.AVPlayer

     **参数：**

                                   参数名         类型         必填         说明                                       messages         Array<[SeiMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#seimessage18)>         是         SEI信息。                         playbackPosition         number         否         获取当前播放位置（单位：毫秒）。                                            #### OnPlaybackRateDone20+

     type OnPlaybackRateDone = (rate: number) => void

     播放速率设置完成事件回调方法。

     **元服务API：** 从API version 20开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.AVPlayer

     **参数：**

                                   参数名         类型         必填         说明                                       rate         number         是         播放速率。                                            #### OnFrameFetched23+

     type OnFrameFetched = (frameInfo: FrameInfo, err?: BusinessError<void>) => void

     批量获取缩略图回调函数。

     **模型约束：** 此接口仅可在Stage模型下使用。

     **系统能力：** SystemCapability.Multimedia.Media.AVMetadataExtractor

     **参数：**

                                   参数名         类型         必填         说明                                       frameInfo         [FrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#frameinfo23)         是         返回的缩略图信息。                         err         BusinessError<void>         否         获取缩略图时发生错误，默认值为null。                                            #### AVRecorderState9+

     type AVRecorderState = 'idle' | 'prepared' | 'started' | 'paused' | 'stopped' | 'released' | 'error'

     音视频录制的状态机。可通过state属性获取当前状态。

     **元服务API：** 从API version 12 开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.AVRecorder

                                   类型         说明                                       'idle'         闲置状态。此时可以调用[AVRecorder.prepare()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#prepare9)方法设置录制参数，进入prepared状态。AVRecorder刚被创建，或者在任何非released状态下调用[AVRecorder.reset()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#reset9)方法，均进入idle状态。                         'prepared'         参数设置完成。此时可以调用[AVRecorder.start()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#start9)方法开始录制，进入started状态。                         'started'         正在录制。此时可以调用[AVRecorder.pause()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#pause9)方法暂停录制，进入paused状态。也可以调用[AVRecorder.stop()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#stop9)方法结束录制，进入stopped状态。                         'paused'         录制暂停。此时可以调用[AVRecorder.resume()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#resume9)方法继续录制，进入started状态。也可以调用[AVRecorder.stop()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#stop9)方法结束录制，进入stopped状态。                         'stopped'         录制停止。此时可以调用[AVRecorder.prepare()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#prepare9)方法设置录制参数，重新进入prepared状态。                         'released'         录制资源释放。此时不能再进行任何操作。在任何其他状态下，均可以通过调用[AVRecorder.release()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#release9)方法进入released状态。                         'error'         错误状态。当AVRecorder实例发生不可逆错误，会转换至当前状态。切换至error状态时会伴随[AVRecorder.on('error')事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#onerror9)，该事件会上报详细错误原因。在error状态时，用户需要调用[AVRecorder.reset()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#reset9)方法重置AVRecorder实例，或者调用[AVRecorder.release()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#release9)方法释放资源。                                            #### OnAVRecorderStateChangeHandler12+

     type OnAVRecorderStateChangeHandler = (state: AVRecorderState, reason: StateChangeReason) => void

     录制状态机切换事件回调方法。

     **元服务API：** 从API version 12开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.AVRecorder

     **参数：**

                                   参数名         类型         必填         说明                                       state         [AVRecorderState](#avrecorderstate9)         是         当前录制状态。                         reason         [StateChangeReason](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-e#statechangereason9)         是         当前录制状态的切换原因。                                            #### SourceOpenCallback18+

     type SourceOpenCallback = (request: MediaSourceLoadingRequest) => number

     由应用实现此回调函数，应用需处理传入的资源打开请求，并返回所打开资源对应的唯一句柄。

                         客户端在处理完请求后应立刻返回。

                **元服务API：** 从API version 18开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **参数：**

                                   参数名         类型         必填         说明                                       request         [MediaSourceLoadingRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-mediasourceloadingrequest)         是         打开请求参数，包含请求资源的具体信息和数据推送方式。                               **返回值：**

                                   类型         说明                                       number                   当前资源打开请求的句柄。大于0表示请求成功，小于或等于0表示请求失败。

          - request对象对应句柄唯一。

                               **示例：**

     ```
import { HashMap } from '@kit.ArkTS';
import { media } from '@kit.MediaKit';

let uuid: number = 1;
let requests: HashMap<number, media.MediaSourceLoadingRequest> = new HashMap();

let sourceOpenCallback: media.SourceOpenCallback = (request: media.MediaSourceLoadingRequest) => {
  console.info(`Opening resource: ${request.url}`);
  // 成功打开资源，返回唯一的句柄, 保证uuid和request对应。
  uuid += 1;
  requests.set(uuid, request);
  return uuid;
};
```
                  #### SourceReadCallback18+

     type SourceReadCallback = (uuid: number, requestedOffset: number, requestedLength: number) => void

     由应用实现此回调函数，应用需记录读取请求，并在数据充足时通过对应的MediaSourceLoadingRequest对象的[respondData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-mediasourceloadingrequest#responddata18)方法推送数据。

                         客户端在处理完请求后应立刻返回。

                **元服务API：** 从API version 18开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **参数：**

                                   参数名         类型         必填         说明                                       uuid         number         是         资源句柄的标识。                         requestedOffset         number         是         当前媒体数据相对于资源起始位置的偏移量。                         requestedLength         number         是         当前请求的长度。值为-1时，表示到达资源末尾，此时推送完成后需通过[finishLoading](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-mediasourceloadingrequest#finishloading18)方法通知播放器推送结束。                               **示例：**

     ```
let sourceReadCallback: media.SourceReadCallback = (uuid: number, requestedOffset: number, requestedLength: number) => {
  console.info(`Reading resource with handle ${uuid}, offset: ${requestedOffset}, length: ${requestedLength}`);
  // 判断uuid是否合法、存储read请求，不要在read请求阻塞去推送数据和头信息。
};
```
                  #### SourceCloseCallback18+

     type SourceCloseCallback = (uuid: number) => void

     由应用实现此回调函数，应用应释放相关资源。

                         客户端在处理完请求后应立刻返回。

                **元服务API：** 从API version 18开始，该接口支持在元服务中使用。

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **参数：**

                                   参数名         类型         必填         说明                                       uuid         number         是         资源句柄的标识。                               **示例：**

     ```
import { HashMap } from '@kit.ArkTS';

let requests: HashMap<number, media.MediaSourceLoadingRequest> = new HashMap();

let sourceCloseCallback: media.SourceCloseCallback = (uuid: number) => {
  console.info(`Closing resource with handle ${uuid}`);
  // 清除当前uuid相关资源。
  requests.remove(uuid);
};
```
                  #### PlaybackMetrics23+

     type PlaybackMetrics = Record<PlaybackMetricsKey, Object>

     提供播放器指标信息键值对的容器定义。

     **系统能力：** SystemCapability.Multimedia.Media.Core

                                   类型         说明                                       Record<[PlaybackMetricsKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-e#playbackmetricskey23), Object>         表示值类型为键值对，其中key和value的类型与范围请参考[PlaybackMetricsKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-e#playbackmetricskey23)。                                            #### AudioState(deprecated)

     type AudioState = 'idle' | 'playing' | 'paused' | 'stopped' | 'error'

     音频播放的状态机。可通过state属性获取当前状态。

                         从API version 6开始支持，从API version 9开始废弃，建议使用[AVPlayerState](#avplayerstate9)替代。

                **系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

                                   类型         说明                                       'idle'         音频播放空闲，dataload/reset成功后处于此状态。                         'playing'         音频正在播放，play成功后处于此状态。                         'paused'         音频暂停播放，pause成功后处于此状态。                         'stopped'         音频播放停止，stop/播放结束后处于此状态。                         'error'         错误状态。                                            #### VideoPlayState(deprecated)

     type VideoPlayState = 'idle' | 'prepared' | 'playing' | 'paused' | 'stopped' | 'error'

     视频播放的状态机，可通过state属性获取当前状态。

                         从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayerState](#avplayerstate9)替代。

                **系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

                                   类型         说明                                       'idle'         视频播放空闲。                         'prepared'         视频播放准备。                         'playing'         视频正在播放。                         'paused'         视频暂停播放。                         'stopped'         视频播放停止。                         'error'         错误状态。

---
*Updated: 2026-04-22 06:41:06*
