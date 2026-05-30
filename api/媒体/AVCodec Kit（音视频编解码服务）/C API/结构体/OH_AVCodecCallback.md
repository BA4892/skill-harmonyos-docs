# OH_AVCodecCallback

> **分区**: API参考  |  **Slug**: `capi-codecbase-oh-avcodeccallback`  |  **DocID**: `3ca2aa6ca0d54ca49c402031ed3e4c75`

---

# OH_AVCodecCallback

       ```
typedef struct OH_AVCodecCallback {...} OH_AVCodecCallback
```
              #### 概述

     OH_AVCodec中所有异步回调函数指针的集合。将该结构体的实例注册到OH_AVCodec实例中，并处理回调上报的信息，以保证OH_AVCodec的正常运行。

     使用指导请参见[视频编码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding)中的“Surface模式步骤-4或Buffer模式步骤-3”。

     **起始版本：** 11

     **相关模块：** [CodecBase](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase)

     **所在头文件：** [native_avcodec_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h)

                  #### 汇总

                  #### [h2]成员变量

                                   名称         描述                                       [OH_AVCodecOnError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#oh_avcodeconerror) onError         监控编解码器操作错误。                         [OH_AVCodecOnStreamChanged](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#oh_avcodeconstreamchanged) onStreamChanged         监控编解码器流变化。                         [OH_AVCodecOnNeedInputBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#oh_avcodeconneedinputbuffer) onNeedInputBuffer         监控编解码器需要输入数据。                         [OH_AVCodecOnNewOutputBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#oh_avcodeconnewoutputbuffer) onNewOutputBuffer         监控编解码器已生成输出数据。

---
*Updated: 2026-04-22 06:40:52*
