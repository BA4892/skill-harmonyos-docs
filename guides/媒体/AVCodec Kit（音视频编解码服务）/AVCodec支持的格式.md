# AVCodec支持的格式

> **分区**: 指南  |  |  **API级别**: API 23 (HarmonyOS 6.0)  |  **Slug**: `avcodec-support-formats`  |  **DocID**: `a3d4cb728f7141b4813225e37f341412`  |  **NodeID**: `0002017757955269285985c1fd48010a`

---

# AVCodec支持的格式

       音视频的编解码能力以及文件格式封装和解封装能力的支持情况，在不同平台存在能力和规格的差异。开发者可以通过[获取支持的编解码能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtain-supported-codecs)来获取实际的支持情况和规格情况。

              #### 媒体编解码

                  #### [h2]视频解码

     当前支持的解码能力如下：

           
                        | 视频解码类型          | 视频解码格式的MIME类型         
                               | MSVIDEO122+          | [OH_AVCODEC_MIMETYPE_VIDEO_MSVIDEO1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | WMV322+          | [OH_AVCODEC_MIMETYPE_VIDEO_WMV3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | MJPEG22+          | [OH_AVCODEC_MIMETYPE_VIDEO_MJPEG](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | MPEG2          | [OH_AVCODEC_MIMETYPE_VIDEO_MPEG2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | MPEG4          | [OH_AVCODEC_MIMETYPE_VIDEO_MPEG4](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | H.263          | [OH_AVCODEC_MIMETYPE_VIDEO_H263](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | AVC(H.264)          | [OH_AVCODEC_MIMETYPE_VIDEO_AVC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | HEVC(H.265)          | [OH_AVCODEC_MIMETYPE_VIDEO_HEVC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | AV123+          | [OH_AVCODEC_MIMETYPE_VIDEO_AV1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | VP923+          | [OH_AVCODEC_MIMETYPE_VIDEO_VP9](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | VP823+          | [OH_AVCODEC_MIMETYPE_VIDEO_VP8](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | RV3023+          | [OH_AVCODEC_MIMETYPE_VIDEO_RV30](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | RV4023+          | [OH_AVCODEC_MIMETYPE_VIDEO_RV40](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | WVC123+          | [OH_AVCODEC_MIMETYPE_VIDEO_WVC1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | DVVIDEO23+          | [OH_AVCODEC_MIMETYPE_VIDEO_DVVIDEO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | RAWVIDEO23+          | [OH_AVCODEC_MIMETYPE_VIDEO_RAWVIDEO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | MPEG123+          | [OH_AVCODEC_MIMETYPE_VIDEO_MPEG1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | VVC(H.266)          | [OH_AVCODEC_MIMETYPE_VIDEO_VVC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
             

          通过MIME类型创建解码器时，如果系统平台支持硬件解码，系统平台会优先创建硬件解码器实例；如果系统平台不支持或者硬件解码器资源不足时，系统平台会创建软件解码器实例；如果系统平台无对应解码能力，会创建解码器实例失败。

     系统平台提供的解码能力和设备强相关，开发者可以通过[获取支持的编解码能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtain-supported-codecs)获取系统平台支持的软硬件解码能力和能力规格。

     例如可以通过OH_AVCODEC_MIMETYPE_VIDEO_AVC、OH_AVCODEC_MIMETYPE_VIDEO_HEVC、OH_AVCODEC_MIMETYPE_VIDEO_VVC来查询系统平台支持的H.264、H.265、H.266的硬件解码能力。

     具体开发指导请参考[视频解码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-decoding)。

                  #### [h2]视频编码

     当前支持的编码能力如下：

           
                        | 视频编码类型          | 视频编码格式的MIME类型         
                               | HEVC(H.265)          | [OH_AVCODEC_MIMETYPE_VIDEO_HEVC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | AVC(H.264)          | [OH_AVCODEC_MIMETYPE_VIDEO_AVC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
             

          如果系统平台无对应编码能力，会创建编码器实例失败。

     基于MimeType创建编码器时，可以配置为H.264(OH_AVCODEC_MIMETYPE_VIDEO_AVC)和H.265(OH_AVCODEC_MIMETYPE_VIDEO_HEVC)。

     系统平台支持情况和每种编码的能力范围，可以通过[获取支持的编解码能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtain-supported-codecs)获取。

     具体开发指导请参考[视频编码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding)。

                  #### [h2]音频解码

     当前支持的解码能力：

           
                        | 音频解码类型          | 音频解码格式的MIME类型         
                               | AAC          | [OH_AVCODEC_MIMETYPE_AUDIO_AAC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | MPEG(MP3)          | [OH_AVCODEC_MIMETYPE_AUDIO_MPEG](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | Flac          | [OH_AVCODEC_MIMETYPE_AUDIO_FLAC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | Vorbis          | [OH_AVCODEC_MIMETYPE_AUDIO_VORBIS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | AMR(amrnb、amrwb)          | [OH_AVCODEC_MIMETYPE_AUDIO_AMR_NB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)、[OH_AVCODEC_MIMETYPE_AUDIO_AMR_WB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | G711mu          | [OH_AVCODEC_MIMETYPE_AUDIO_G711MU](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | APE          | [OH_AVCODEC_MIMETYPE_AUDIO_APE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | G711a20+          | [OH_AVCODEC_MIMETYPE_AUDIO_G711A](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | ALAC22+          | [OH_AVCODEC_MIMETYPE_AUDIO_ALAC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | AC322+          | [OH_AVCODEC_MIMETYPE_AUDIO_AC3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | WMA22+(V1、V2、PRO)          | [OH_AVCODEC_MIMETYPE_AUDIO_WMAV1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)、[OH_AVCODEC_MIMETYPE_AUDIO_WMAV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)、[OH_AVCODEC_MIMETYPE_AUDIO_WMAPRO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | GSM22+          | [OH_AVCODEC_MIMETYPE_AUDIO_GSM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | GSM_MS22+          | [OH_AVCODEC_MIMETYPE_AUDIO_GSM_MS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | Audio ViVid11+          | [OH_AVCODEC_MIMETYPE_AUDIO_VIVID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | opus          | [OH_AVCODEC_MIMETYPE_AUDIO_OPUS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
             

          如果系统平台无对应解码能力，会创建解码器实例失败。

     系统平台提供的解码能力和设备强相关，开发者可以通过[获取支持的编解码能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtain-supported-codecs)获取系统平台支持的解码能力和能力规格。

     从API version 23开始支持：TWINVQ、ILBC、TRUEHD、DVAUDIO、DTS、COOK。

     具体开发指导请参考[音频解码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-decoding)。

                  #### [h2]音频编码

     当前支持的编码能力：

           
                        | 音频编码类型          | 音频编码格式的MIME类型         
                               | AAC          | [OH_AVCODEC_MIMETYPE_AUDIO_AAC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | Flac          | [OH_AVCODEC_MIMETYPE_AUDIO_FLAC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | MPEG(MP3)          | [OH_AVCODEC_MIMETYPE_AUDIO_MPEG](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | G711mu          | [OH_AVCODEC_MIMETYPE_AUDIO_G711MU](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | AMR(amrnb、amrwb)          | [OH_AVCODEC_MIMETYPE_AUDIO_AMR_NB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)、[OH_AVCODEC_MIMETYPE_AUDIO_AMR_WB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
                 | opus          | [OH_AVCODEC_MIMETYPE_AUDIO_OPUS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#变量)         
             

          如果系统平台无对应编码能力，会创建编码器实例失败。

     系统平台提供的编码能力和设备强相关，开发者可以通过[获取支持的编解码能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtain-supported-codecs)获取系统平台支持的编码能力和能力规格。

     具体开发指导请参考[音频编码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-encoding)。

                  #### 媒体数据封装与解析

                  #### [h2]媒体数据解析

     支持的解封装格式如下：

           
                        | 媒体格式          | 封装格式          | 轨道格式         
                               | 音视频          | mp4                    视频轨：AVC(H.264)、HEVC(H.265)、VVC(H.266)、MPEG4

          音频轨：AAC、MPEG(MP3)、Audio Vivid、ALAC22+

          字幕轨：WEBVTT

          辅助轨：AUXL（音频RAW信息、视频深度信息等。）

          timed metadata轨：有时间属性的描述信息，如帧级的维测信息、传感器信息等。

        
                 | 音视频          | fmp4                    视频轨：AVC(H.264)、HEVC(H.265)

          音频轨：AAC、MPEG(MP3)、Audio Vivid

        
                 | 音视频          | mkv                    视频轨：AVC(H.264)、HEVC(H.265)、MSVIDEO122+

          音频轨：AAC、MPEG(MP3)、OPUS、ADPCM_YAMAHA22+、ADPCM_G72222+、ALAC22+

        
                 | 音视频          | mpeg-ts                    视频轨：AVC(H.264)、HEVC(H.265)、MPEG2、MPEG4

          音频轨：AAC、MPEG(MP3)、Audio Vivid

        
                 | 音视频          | flv                    视频轨：AVC(H.264)、HEVC(H.265)

          音频轨：AAC

        
                 | 音视频          | mpeg-ps                    视频轨：AVC(H.264)、MPEG2

          音频轨：MPEG(MP2、MP3)、DTS23+

        
                 | 音视频          | avi                    视频轨：H.263、AVC(H.264)、MPEG2、MPEG4、MJPEG22+、MSVIDEO122+

          音频轨：AAC、MPEG(MP2、MP3)、PCM、GSM_MS22+、ADPCM_YAMAHA22+、ADPCM_G72222+、DVAUDIO23+、DTS23+

        
                 | 音视频          | 3gp22+                    视频轨：H.263、AVC(H.264)、MPEG4

          音频轨：AAC、AMR(amrnb、amrwb)

        
                 | 音视频          | 3g222+                    视频轨：H.263、AVC(H.264)、MPEG4

          音频轨：AAC、AMR(amrnb、amrwb)

        
                 | 音视频          | m4v22+                    视频轨：AVC(H.264)、HEVC(H.265)、MPEG4

          音频轨：AAC、ALAC、AC3

        
                 | 音视频          | wmv22+                    视频轨：AVC(H.264)、WMV3

          音频轨：WMAV1、WMAV2、WMAPRO

        
                 | 音视频          | rm23+、rmvb23+                    视频轨：RV30、RV40

          音频轨：AAC、AC3、COOK

        
                 | 音频          | m4a          | 音频轨：AAC、Audio Vivid、ALAC22+         
                 | 音频          | aac          | 音频轨：AAC         
                 | 音频          | mp3          | 音频轨：MPEG(MP3)         
                 | 音频          | ogg          | 音频轨：Vorbis         
                 | 音频          | flac          | 音频轨：Flac         
                 | 音频          | wav          | 音频轨：PCM、G711mu、G711a、GSM_MS22+、ADPCM_YAMAHA22+、ADPCM_G72222+、ADPCM_G72622+、DVAUDIO23+、DTS23+         
                 | 音频          | amr          | 音频轨：AMR(amrnb、amrwb)         
                 | 音频          | ape          | 音频轨：APE         
                 | 音频          | wma22+          | 音频轨：AC3、WMAV1、WMAV2、Vorbis、Flac、AMR(amrnb、amrwb)、AAC、MPEG(MP2、MP3)、GSM_MS、G711mu、G711a、PCM、ADPCM_G722、ADPCM_G726、ADPCM_IMA_WAV、ADPCM_MS、ADPCM_YAMAHA、DVAUDIO23+、DTS23+         
                 | 音频          | sunAU24+          | 音频轨：PCM、ADPCM_G722、ADPCM_G726LE、G711mu、G711a         
                 | 音频          | dts23+          | 音频轨：DTS         
                 | 外挂字幕          | srt          | 字幕轨：SRT         
                 | 外挂字幕          | webvtt          | 字幕轨：WEBVTT         
             

          DRM解密能力支持的解封装格式：mp4(H.264，H.265，AAC)、mpeg-ts(H.264，H.265，AAC)。

     具体开发指导请参考[媒体数据解析](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-video-demuxer)。

                  #### [h2]媒体数据封装

     当前支持的封装能力如下：

           
                        | 封装格式          | 视频编解码类型          | 音频编解码类型          | 封面类型         
                               | mp4          | AVC（H.264）、HEVC（H.265）          | AAC、MPEG（MP3）          | jpeg、png、bmp         
                 | m4a          | -          | AAC          | jpeg、png、bmp         
                 | mp3          | -          | MPEG（MP3）          | -         
                 | amr          | -          | AMR(amrnb、amrwb)          | -         
                 | wav          | -          | G711mu(pcm-mulaw) 、raw(pcm)          | -         
                 | aac          | -          | AAC          | -         
                 | flac          | -          | Flac          | jpeg、png、bmp         
                 | ogg23+          | -          | Vorbis、OPUS          | -         
             

                              
        - 封装格式为mp4，音频编解码类型为MPEG（MP3）时采样率需大于等于16000Hz。
        - 封装格式为mp4/m4a，音频编解码类型为AAC时声道数范围为1~7。
       
                文件级数据已定义的key如下所示：

           
                        | key          | 描述         
                               | OH_MD_KEY_CREATION_TIME          | 媒体文件创建时间的元数据，值类型为string（API14开始支持）。         
                 | OH_MD_KEY_COMMENT          | 媒体文件注释的键，值类型为string（API20开始支持）。         
                 | OH_MD_KEY_ENABLE_MOOV_FRONT          | 媒体文件moov元数据是否前置标志，值类型为int32_t（API20开始支持）。         
             

                              用户自定义的key必须以"com.openharmony."为开头。值类型可以为int32_t、float、string，从API20开始增加支持uint8_t*。

                配置选项key值说明：

     mp4封装格式：

           
                        | key          | 描述          | aac          | mp3          | H.264          | H.265          | jpg          | png          | bmp         
                               | OH_MD_KEY_AUD_SAMPLE_RATE          | 采样率          | 必须          | 必须          | -          | -          | -          | -          | -         
                 | OH_MD_KEY_AUD_CHANNEL_COUNT          | 声道数          | 必须          | 必须          | -          | -          | -          | -          | -         
                 | OH_MD_KEY_AUDIO_SAMPLE_FORMAT          | 输出音频流格式          | 可选          | 可选          | -          | -          | -          | -          | -         
                 | OH_MD_KEY_CHANNEL_LAYOUT          | 通道布局          | 可选          | 可选          | -          | -          | -          | -          | -         
                 | OH_MD_KEY_PROFILE          | 编码档次          | 可选          | -          | -          | -          | -          | -          | -         
                 | OH_MD_KEY_BITRATE          | 码率          | 可选          | 可选          | 可选          | 可选          | -          | -          | -         
                 | OH_MD_KEY_CODEC_CONFIG          | 编解码器特定数据          | 可选          | -          | 可选          | 可选          | -          | -          | -         
                 | OH_MD_KEY_WIDTH          | 宽度          | -          | -          | 必须          | 必须          | 必须          | 必须          | 必须         
                 | OH_MD_KEY_HEIGHT          | 高度          | -          | -          | 必须          | 必须          | 必须          | 必须          | 必须         
                 | OH_MD_KEY_FRAME_RATE          | 视频流帧率          | -          | -          | 可选          | 可选          | -          | -          | -         
                 | OH_MD_KEY_COLOR_PRIMARIES          | 视频色域          | -          | -          | 可选          | 可选          | -          | -          | -         
                 | OH_MD_KEY_TRANSFER_CHARACTERISTICS          | 视频传递函数          | -          | -          | 可选          | 可选          | -          | -          | -         
                 | OH_MD_KEY_MATRIX_COEFFICIENTS          | 视频矩阵系数          | -          | -          | 可选          | 可选          | -          | -          | -         
                 | OH_MD_KEY_RANGE_FLAG          | 值域标志          | -          | -          | 可选          | 可选          | -          | -          | -         
                 | OH_MD_KEY_VIDEO_IS_HDR_VIVID          | 视频轨是否为HDR VIVID          | -          | -          | -          | 可选          | -          | -          | -         
             

          mp4封装辅助轨格式：

           
                        | key          | 描述          | aac          | mp3          | H.264          | H.265         
                               | OH_MD_KEY_TRACK_TYPE          | 轨道媒体类型          | 必须          | 必须          | 必须          | 必须         
                 | OH_MD_KEY_TRACK_REFERENCE_TYPE          | 轨道引用类型          | 必须          | 必须          | 必须          | 必须         
                 | OH_MD_KEY_TRACK_DESCRIPTION          | 轨道标识          | 必须          | 必须          | 必须          | 必须         
                 | OH_MD_KEY_REFERENCE_TRACK_IDS          | 引用轨道编号          | 必须          | 必须          | 必须          | 必须         
                 | OH_MD_KEY_AUD_SAMPLE_RATE          | 采样率          | 必须          | 必须          | -          | -         
                 | OH_MD_KEY_AUD_CHANNEL_COUNT          | 声道数          | 必须          | 必须          | -          | -         
                 | OH_MD_KEY_AUDIO_SAMPLE_FORMAT          | 输出音频流格式          | 可选          | 可选          | -          | -         
                 | OH_MD_KEY_CHANNEL_LAYOUT          | 通道布局          | 可选          | 可选          | -          | -         
                 | OH_MD_KEY_PROFILE          | 编码档次          | 可选          | -          | -          | -         
                 | OH_MD_KEY_BITRATE          | 码率          | 可选          | 可选          | 可选          | 可选         
                 | OH_MD_KEY_CODEC_CONFIG          | 编解码器特定数据          | 可选          | -          | 可选          | 可选         
                 | OH_MD_KEY_WIDTH          | 宽度          | -          | -          | 必须          | 必须         
                 | OH_MD_KEY_HEIGHT          | 高度          | -          | -          | 必须          | 必须         
                 | OH_MD_KEY_FRAME_RATE          | 视频流帧率          | -          | -          | 可选          | 可选         
                 | OH_MD_KEY_COLOR_PRIMARIES          | 视频色域          | -          | -          | 可选          | 可选         
                 | OH_MD_KEY_TRANSFER_CHARACTERISTICS          | 视频传递函数          | -          | -          | 可选          | 可选         
                 | OH_MD_KEY_MATRIX_COEFFICIENTS          | 视频矩阵系数          | -          | -          | 可选          | 可选         
                 | OH_MD_KEY_RANGE_FLAG          | 值域标志          | -          | -          | 可选          | 可选         
                 | OH_MD_KEY_VIDEO_IS_HDR_VIVID          | 视频轨是否为HDR VIVID          | -          | -          | -          | 可选         
             

          m4a封装格式：

           
                        | key          | 描述          | aac          | jpg          | png          | bmp         
                               | OH_MD_KEY_AUD_SAMPLE_RATE          | 采样率          | 必须          | -          | -          | -         
                 | OH_MD_KEY_AUD_CHANNEL_COUNT          | 声道数          | 必须          | -          | -          | -         
                 | OH_MD_KEY_AUDIO_SAMPLE_FORMAT          | 输出音频流格式          | 可选          | -          | -          | -         
                 | OH_MD_KEY_CHANNEL_LAYOUT          | 通道布局          | 可选          | -          | -          | -         
                 | OH_MD_KEY_PROFILE          | 编码档次          | 可选          | -          | -          | -         
                 | OH_MD_KEY_BITRATE          | 码率          | 可选          | -          | -          | -         
                 | OH_MD_KEY_CODEC_CONFIG          | 编解码器特定数据          | 可选          | -          | -          | -         
                 | OH_MD_KEY_WIDTH          | 宽度          | -          | 必须          | 必须          | 必须         
                 | OH_MD_KEY_HEIGHT          | 高度          | -          | 必须          | 必须          | 必须         
             

          amr封装格式：

           
                        | key          | 描述          | amr_nb          | amr_wb         
                               | OH_MD_KEY_AUD_SAMPLE_RATE          | 采样率          | 必须          | 必须         
                 | OH_MD_KEY_AUD_CHANNEL_COUNT          | 声道数          | 必须          | 必须         
                 | OH_MD_KEY_AUDIO_SAMPLE_FORMAT          | 输出音频流格式          | 可选          | 可选         
                 | OH_MD_KEY_CHANNEL_LAYOUT          | 通道布局          | 可选          | 可选         
                 | OH_MD_KEY_BITRATE          | 码率          | 可选          | 可选         
             

          mp3封装格式：

           
                        | key          | 描述          | mp3          | jpg         
                               | OH_MD_KEY_AUD_SAMPLE_RATE          | 采样率          | 必须          | -         
                 | OH_MD_KEY_AUD_CHANNEL_COUNT          | 声道数          | 必须          | -         
                 | OH_MD_KEY_AUDIO_SAMPLE_FORMAT          | 输出音频流格式          | 可选          | -         
                 | OH_MD_KEY_CHANNEL_LAYOUT          | 通道布局          | 可选          | -         
                 | OH_MD_KEY_BITRATE          | 码率          | 可选          | -         
                 | OH_MD_KEY_WIDTH          | 宽度          | -          | 必须         
                 | OH_MD_KEY_HEIGHT          | 高度          | -          | 必须         
             

          wav封装格式：

           
                        | key          | 描述          | g711mu          | raw         
                               | OH_MD_KEY_AUD_SAMPLE_RATE          | 采样率          | 必须          | 必须         
                 | OH_MD_KEY_AUD_CHANNEL_COUNT          | 声道数          | 必须          | 必须         
                 | OH_MD_KEY_AUDIO_SAMPLE_FORMAT          | 输出音频流格式          | 可选          | 必须         
                 | OH_MD_KEY_CHANNEL_LAYOUT          | 通道布局          | 可选          | 可选         
                 | OH_MD_KEY_BITRATE          | 码率          | 必须          | 可选         
             

          aac封装格式：

           
                        | key          | 描述          | aac         
                               | OH_MD_KEY_AUD_SAMPLE_RATE          | 采样率          | 必须         
                 | OH_MD_KEY_AUD_CHANNEL_COUNT          | 声道数          | 必须         
                 | OH_MD_KEY_AUDIO_SAMPLE_FORMAT          | 输出音频流格式          | 可选         
                 | OH_MD_KEY_CHANNEL_LAYOUT          | 通道布局          | 可选         
                 | OH_MD_KEY_BITRATE          | 码率          | 可选         
                 | OH_MD_KEY_PROFILE          | 编码档次          | 必须         
                 | OH_MD_KEY_AAC_IS_ADTS          | 是否为ADTS格式          | 必须         
             

          flac封装格式：

           
                        | key          | 描述          | flac         
                               | OH_MD_KEY_AUD_SAMPLE_RATE          | 采样率          | 必须         
                 | OH_MD_KEY_AUD_CHANNEL_COUNT          | 声道数          | 必须         
                 | OH_MD_KEY_AUDIO_SAMPLE_FORMAT          | 输出音频流格式          | 必须         
                 | OH_MD_KEY_CHANNEL_LAYOUT          | 通道布局          | 可选         
                 | OH_MD_KEY_BITRATE          | 码率          | 可选         
                 | OH_MD_KEY_CODEC_CONFIG          | 编解码器特定数据          | 可选         
             

          ogg封装格式（从API version 23开始支持）：

           
                        | key          | 描述          | Vorbis          | OPUS         
                               | OH_MD_KEY_AUD_SAMPLE_RATE          | 采样率          | 必须          | 必须         
                 | OH_MD_KEY_AUD_CHANNEL_COUNT          | 声道数          | 必须          | 必须         
                 | OH_MD_KEY_CODEC_CONFIG          | 编解码器特定数据          | 必须          | 必须         
             

          具体开发指导请参考[媒体数据封装](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-video-muxer)。

---
*Updated: 2026-04-20 01:45:07*
