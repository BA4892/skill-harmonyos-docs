# Media Kit

> **分区**: 版本发布  |  **Slug**: `js-apidiff-mediakit-6101`  |  **DocID**: `41e5385b656f4ffeaed6fe26bdec09b6`

---

# Media Kit

  操作 |  旧版本 |  新版本 |  d.ts文件 |  
  新增错误码 |  类名：AVMetadataExtractor；

 API声明：fetchMetadata(callback: AsyncCallback<AVMetadata>): void;

 差异内容：NA

  |  类名：AVMetadataExtractor；

 API声明：fetchMetadata(callback: AsyncCallback<AVMetadata>): void;

 差异内容：5411012

  |  api/@ohos.multimedia.media.d.ts |  
 新增错误码 |  类名：AVMetadataExtractor；

 API声明：fetchMetadata(): Promise<AVMetadata>;

 差异内容：NA

  |  类名：AVMetadataExtractor；

 API声明：fetchMetadata(): Promise<AVMetadata>;

 差异内容：5411012

  |  api/@ohos.multimedia.media.d.ts |  
 新增错误码 |  类名：AVMetadataExtractor；

 API声明：fetchFrameByTime(timeUs: number, options: AVImageQueryOptions, param: PixelMapParams): Promise<image.PixelMap>;

 差异内容：NA

  |  类名：AVMetadataExtractor；

 API声明：fetchFrameByTime(timeUs: number, options: AVImageQueryOptions, param: PixelMapParams): Promise<image.PixelMap>;

 差异内容：5411012

  |  api/@ohos.multimedia.media.d.ts |  
 新增错误码 |  类名：AVPlayer；

 API声明：on(type: 'error', callback: ErrorCallback): void;

 差异内容：NA

  |  类名：AVPlayer；

 API声明：on(type: 'error', callback: ErrorCallback): void;

 差异内容：5411012

  |  api/@ohos.multimedia.media.d.ts |  
 权限变更 |  类名：AVRecorder；

 API声明：prepare(config: AVRecorderConfig): Promise<void>;

 差异内容：ohos.permission.MICROPHONE

  |  类名：AVRecorder；

 API声明：prepare(config: AVRecorderConfig): Promise<void>;

 差异内容：ohos.permission.MICROPHONE This permission is required only if audio recording is involved.

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：media；

 API声明：enum SoundInterruptMode

 差异内容：enum SoundInterruptMode

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：SoundInterruptMode；

 API声明：NO_INTERRUPT = 0

 差异内容：NO_INTERRUPT = 0

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：SoundInterruptMode；

 API声明：SAME_SOUND_INTERRUPT = 1

 差异内容：SAME_SOUND_INTERRUPT = 1

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVMetadataExtractor；

 API声明：fetchFramesByTimes(timesUs: number[], queryOption: AVImageQueryOptions, param: PixelMapParams, callback: OnFrameFetched): void;

 差异内容：fetchFramesByTimes(timesUs: number[], queryOption: AVImageQueryOptions, param: PixelMapParams, callback: OnFrameFetched): void;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVMetadataExtractor；

 API声明：cancelAllFetchFrames(): void;

 差异内容：cancelAllFetchFrames(): void;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVMetadata；

 API声明：description?: string;

 差异内容：description?: string;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：media；

 API声明：enum FetchResult

 差异内容：enum FetchResult

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：FetchResult；

 API声明：FETCH_FAILED = 0

 差异内容：FETCH_FAILED = 0

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：FetchResult；

 API声明：FETCH_SUCCEEDED = 1

 差异内容：FETCH_SUCCEEDED = 1

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：FetchResult；

 API声明：FETCH_CANCELED = 2

 差异内容：FETCH_CANCELED = 2

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：media；

 API声明：interface FrameInfo

 差异内容：interface FrameInfo

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：FrameInfo；

 API声明：requestedTimeUs: number;

 差异内容：requestedTimeUs: number;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：FrameInfo；

 API声明：actualTimeUs?: number;

 差异内容：actualTimeUs?: number;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：FrameInfo；

 API声明：image?: image.PixelMap;

 差异内容：image?: image.PixelMap;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：FrameInfo；

 API声明：result: FetchResult;

 差异内容：result: FetchResult;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：media；

 API声明：type OnFrameFetched = (frameInfo: FrameInfo, err?: BusinessError<void>) => void;

 差异内容：type OnFrameFetched = (frameInfo: FrameInfo, err?: BusinessError<void>) => void;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVErrorCode；

 API声明：AVERR_IO_CLEARTEXT_NOT_PERMITTED = 5411012

 差异内容：AVERR_IO_CLEARTEXT_NOT_PERMITTED = 5411012

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：media；

 API声明：enum AVMetricsEventType

 差异内容：enum AVMetricsEventType

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVMetricsEventType；

 API声明：AV_METRICS_EVENT_STALLING = 1

 差异内容：AV_METRICS_EVENT_STALLING = 1

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：media；

 API声明：interface AVMetricsEvent

 差异内容：interface AVMetricsEvent

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVMetricsEvent；

 API声明：event: AVMetricsEventType;

 差异内容：event: AVMetricsEventType;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVMetricsEvent；

 API声明：timeStamp: number;

 差异内容：timeStamp: number;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVMetricsEvent；

 API声明：playbackPosition: number;

 差异内容：playbackPosition: number;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVMetricsEvent；

 API声明：details: Record<string, Object>;

 差异内容：details: Record<string, Object>;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVPlayer；

 API声明：getPlaybackStatisticMetrics(): Promise<PlaybackMetrics>;

 差异内容：getPlaybackStatisticMetrics(): Promise<PlaybackMetrics>;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVPlayer；

 API声明：getCurrentPresentationTimestamp(): number;

 差异内容：getCurrentPresentationTimestamp(): number;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVPlayer；

 API声明：getPlaybackRate(): Promise<number>;

 差异内容：getPlaybackRate(): Promise<number>;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVPlayer；

 API声明：onMetricsEvent(callback: Callback<Array<AVMetricsEvent>>): void;

 差异内容：onMetricsEvent(callback: Callback<Array<AVMetricsEvent>>): void;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVPlayer；

 API声明：offMetricsEvent(callback?: Callback<Array<AVMetricsEvent>>): void;

 差异内容：offMetricsEvent(callback?: Callback<Array<AVMetricsEvent>>): void;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：media；

 API声明：enum PlaybackMetricsKey

 差异内容：enum PlaybackMetricsKey

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：PlaybackMetricsKey；

 API声明：PREPARE_DURATION = 'prepare_duration'

 差异内容：PREPARE_DURATION = 'prepare_duration'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：PlaybackMetricsKey；

 API声明：RESOURCE_CONNECTION_DURATION = 'resource_connection_duration'

 差异内容：RESOURCE_CONNECTION_DURATION = 'resource_connection_duration'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：PlaybackMetricsKey；

 API声明：FIRST_FRAME_DECAPSULATION_DURATION = 'first_frame_decapsulation_duration'

 差异内容：FIRST_FRAME_DECAPSULATION_DURATION = 'first_frame_decapsulation_duration'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：PlaybackMetricsKey；

 API声明：TOTAL_PLAYING_TIME = 'total_playback_time'

 差异内容：TOTAL_PLAYING_TIME = 'total_playback_time'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：PlaybackMetricsKey；

 API声明：DOWNLOAD_REQUESTS_COUNT = 'loading_requests_count'

 差异内容：DOWNLOAD_REQUESTS_COUNT = 'loading_requests_count'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：PlaybackMetricsKey；

 API声明：TOTAL_DOWNLOAD_TIME = 'total_loading_time'

 差异内容：TOTAL_DOWNLOAD_TIME = 'total_loading_time'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：PlaybackMetricsKey；

 API声明：TOTAL_DOWNLOAD_SIZE = 'total_loading_bytes'

 差异内容：TOTAL_DOWNLOAD_SIZE = 'total_loading_bytes'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：PlaybackMetricsKey；

 API声明：STALLING_COUNT = 'stalling_count'

 差异内容：STALLING_COUNT = 'stalling_count'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：PlaybackMetricsKey；

 API声明：TOTAL_STALLING_TIME = 'total_stalling_time'

 差异内容：TOTAL_STALLING_TIME = 'total_stalling_time'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：media；

 API声明：type PlaybackMetrics = Record<PlaybackMetricsKey, Object>;

 差异内容：type PlaybackMetrics = Record<PlaybackMetricsKey, Object>;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：MediaSource；

 API声明：enableOfflineCache(enable: boolean): void;

 差异内容：enableOfflineCache(enable: boolean): void;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：MediaDescriptionKey；

 API声明：MD_KEY_MIME_TYPE = 'mime_type'

 差异内容：MD_KEY_MIME_TYPE = 'mime_type'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：MediaDescriptionKey；

 API声明：MD_KEY_REFERENCE_TRACK_IDS = 'ref_track_ids'

 差异内容：MD_KEY_REFERENCE_TRACK_IDS = 'ref_track_ids'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：MediaDescriptionKey；

 API声明：MD_KEY_TRACK_REFERENCE_TYPE = 'track_ref_type'

 差异内容：MD_KEY_TRACK_REFERENCE_TYPE = 'track_ref_type'

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：AVScreenCaptureStrategy；

 API声明：privacyMaskMode?: number;

 差异内容：privacyMaskMode?: number;

  |  api/@ohos.multimedia.media.d.ts |  
 新增API |  NA |  类名：SoundPool；

 API声明：setInterruptMode(interruptMode: media.SoundInterruptMode): void;

 差异内容：setInterruptMode(interruptMode: media.SoundInterruptMode): void;

  |  api/multimedia/soundPool.d.ts |