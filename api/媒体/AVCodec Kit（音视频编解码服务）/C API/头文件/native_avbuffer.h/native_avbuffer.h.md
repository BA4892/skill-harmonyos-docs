# native_avbuffer.h

> **分区**: API参考  |  **Slug**: `capi-native-avbuffer-h`  |  **DocID**: `bd32f4bc42c64416b57bb992aafbb5b3`

---

# native_avbuffer.h

                 #### 概述

     声明了媒体数据结构AVBuffer的函数接口。

     **引用文件：** <multimedia/player_framework/native_avbuffer.h>

     **库：** libnative_media_core.so

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **起始版本：** 11

     **相关模块：** [Core](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core)

     **相关示例：** [AVCodec](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec)

                  #### 汇总

                  #### [h2]结构体

                                   名称         typedef关键字         描述                                       [OH_AVBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avbuffer)         OH_AVBuffer         为媒体内存接口定义native层对象。                         [OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer)         OH_NativeBuffer         为图形内存接口定义native层对象。                                            #### [h2]函数

                                   名称         描述                                       [OH_AVBuffer *OH_AVBuffer_Create(int32_t capacity)](#oh_avbuffer_create)         创建OH_AVBuffer实例。需要注意的是，返回值指向的创建OH_AVBuffer的实例需要开发者主动调用接口释放，请参阅[OH_AVBuffer_Destroy](#oh_avbuffer_destroy)。                         [OH_AVErrCode OH_AVBuffer_Destroy(OH_AVBuffer *buffer)](#oh_avbuffer_destroy)         释放OH_AVBuffer实例指针的资源，同一个buffer不允许重复销毁。                         [OH_AVErrCode OH_AVBuffer_GetBufferAttr(OH_AVBuffer *buffer, OH_AVCodecBufferAttr *attr)](#oh_avbuffer_getbufferattr)         获取数据缓冲区的pts、size、offset、flags高频属性参数。                         [OH_AVErrCode OH_AVBuffer_SetBufferAttr(OH_AVBuffer *buffer, const OH_AVCodecBufferAttr *attr)](#oh_avbuffer_setbufferattr)         设置数据缓冲区的pts、size、offset、flags高频属性参数。                         [OH_AVFormat *OH_AVBuffer_GetParameter(OH_AVBuffer *buffer)](#oh_avbuffer_getparameter)         获取除基础属性外的其他参数，信息在OH_AVFormat中承载。需要注意的是，返回值指向的创建OH_AVFormat的实例需要开发者主动释放，请参阅[OH_AVFormat_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avformat-h#oh_avformat_destroy)。                         [OH_AVErrCode OH_AVBuffer_SetParameter(OH_AVBuffer *buffer, const OH_AVFormat *format)](#oh_avbuffer_setparameter)         设置除基础属性外的其他参数，信息在OH_AVFormat中承载。                         [uint8_t *OH_AVBuffer_GetAddr(OH_AVBuffer *buffer)](#oh_avbuffer_getaddr)         获取数据缓冲区的虚拟地址。                         [int32_t OH_AVBuffer_GetCapacity(OH_AVBuffer *buffer)](#oh_avbuffer_getcapacity)         获取数据缓冲区的容量（字节数）。                         [OH_NativeBuffer *OH_AVBuffer_GetNativeBuffer(OH_AVBuffer *buffer)](#oh_avbuffer_getnativebuffer)         获取OH_NativeBuffer实例的指针。需要注意的是，返回值指向的创建OH_NativeBuffer的实例需要开发者主动调用接口释放，请参阅[OH_NativeBuffer_Unreference](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-buffer-h#oh_nativebuffer_unreference)。                                            #### 函数说明

                  #### [h2]OH_AVBuffer_Create()

     OH_AVBuffer *OH_AVBuffer_Create(int32_t capacity)     **描述**

     创建OH_AVBuffer实例。需要注意的是，返回值指向的创建OH_AVBuffer的实例需要开发者主动调用接口释放，请参阅[OH_AVBuffer_Destroy](#oh_avbuffer_destroy)。

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **起始版本：** 11

     **参数：**

                                   参数项         描述                                       int32_t capacity         创建内存的大小，单位字节。                               **返回：**

                                   类型         说明                                       [OH_AVBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avbuffer) *                   如果创建成功，则返回OH_AVBuffer实例的指针，如果失败，则返回NULL。

          可能的失败原因：

          1.capacity <= 0。

          2.出现内部错误，系统没有资源等。

                                            #### [h2]OH_AVBuffer_Destroy()

     OH_AVErrCode OH_AVBuffer_Destroy(OH_AVBuffer *buffer)     **描述**

     释放OH_AVBuffer实例指针的资源，同一个buffer不允许重复销毁。

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **起始版本：** 11

     **参数：**

                                   参数项         描述                                       [OH_AVBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avbuffer) *buffer         指向OH_AVBuffer实例的指针。                               **返回：**

                                   类型         说明                                       [OH_AVErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-averrors-h#oh_averrcode)                   AV_ERR_OK：操作成功。

          AV_ERR_INVALID_VAL：输入的buffer为空指针或者buffer格式校验失败。

          AV_ERR_OPERATE_NOT_PERMIT：输入的buffer不是用户创建的。

                                            #### [h2]OH_AVBuffer_GetBufferAttr()

     OH_AVErrCode OH_AVBuffer_GetBufferAttr(OH_AVBuffer *buffer, OH_AVCodecBufferAttr *attr)     **描述**

     获取数据缓冲区的pts、size、offset、flags高频属性参数。

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **起始版本：** 11

     **参数：**

                                   参数项         描述                                       [OH_AVBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avbuffer) *buffer         指向OH_AVBuffer实例的指针。                         [OH_AVCodecBufferAttr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avcodecbufferattr) *attr         指向OH_AVCodecBufferAttr实例的指针。                               **返回：**

                                   类型         说明                                       [OH_AVErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-averrors-h#oh_averrcode)                   AV_ERR_OK：操作成功。

          AV_ERR_INVALID_VAL：可能的原因：

          1. 输入的buffer或attr为空指针。

          2. buffer结构校验失败。

                                            #### [h2]OH_AVBuffer_SetBufferAttr()

     OH_AVErrCode OH_AVBuffer_SetBufferAttr(OH_AVBuffer *buffer, const OH_AVCodecBufferAttr *attr)     **描述**

     设置数据缓冲区的pts、size、offset、flags高频属性参数。

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **起始版本：** 11

     **参数：**

                                   参数项         描述                                       [OH_AVBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avbuffer) *buffer         指向OH_AVBuffer实例的指针。                         [const OH_AVCodecBufferAttr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avcodecbufferattr) *attr         指向OH_AVCodecBufferAttr实例的指针。                               **返回：**

                                   类型         说明                                       [OH_AVErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-averrors-h#oh_averrcode)                   AV_ERR_OK：操作成功。

          AV_ERR_INVALID_VAL：可能的原因：

          1. 输入的buffer或attr为空指针。

          2. buffer结构校验失败。

          3. 输入buffer中内存的size或offset是无效值。

                                            #### [h2]OH_AVBuffer_GetParameter()

     OH_AVFormat *OH_AVBuffer_GetParameter(OH_AVBuffer *buffer)     **描述**

     获取除基础属性外的其他参数，信息在OH_AVFormat中承载。需要注意的是，返回值指向的创建OH_AVFormat的实例需要开发者主动释放，请参阅[OH_AVFormat_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avformat-h#oh_avformat_destroy)。

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **起始版本：** 11

     **参数：**

                                   参数项         描述                                       [OH_AVBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avbuffer) *buffer         指向OH_AVBuffer实例的指针。                               **返回：**

                                   类型         说明                                       [OH_AVFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avformat) *                   AV_ERR_OK：操作成功。

          AV_ERR_INVALID_VAL：可能的原因：

          1. 输入的buffer为空指针。

          2. 输入buffer的meta为空指针。

          3. buffer结构校验失败。

                                            #### [h2]OH_AVBuffer_SetParameter()

     OH_AVErrCode OH_AVBuffer_SetParameter(OH_AVBuffer *buffer, const OH_AVFormat *format)     **描述**

     设置除基础属性外的其他参数，信息在OH_AVFormat中承载。

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **起始版本：** 11

     **参数：**

                                   参数项         描述                                       [OH_AVBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avbuffer) *buffer         指向OH_AVBuffer实例的指针。                         [const OH_AVFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avformat) *format         指向OH_AVFormat实例的指针。                               **返回：**

                                   类型         说明                                       [OH_AVErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-averrors-h#oh_averrcode)                   AV_ERR_OK：操作成功。

          AV_ERR_INVALID_VAL：可能的原因：

          1. 输入的buffer或format为空指针。

          2. 输入buffer的meta为空指针。

          3. buffer结构校验失败。

                                            #### [h2]OH_AVBuffer_GetAddr()

     uint8_t *OH_AVBuffer_GetAddr(OH_AVBuffer *buffer)     **描述**

     获取数据缓冲区的虚拟地址。

     不同场景下，对是否可以获取虚拟地址的支持情况不同，请见表格：

     **编码：**

                                   模式         填充数据的方式         是否可以获取虚拟地址                                       Surface模式         OnNeedInputBuffer输入         ×                         Surface模式         OnNewOutputBuffer输出         √                         Buffer模式         OnNeedInputBuffer输入         √                         Buffer模式         OnNewOutputBuffer输出         √                               **解码：**

                                   模式         填充数据的方式         是否可以获取虚拟地址                                       Surface模式         OnNeedInputBuffer输入         √                         Surface模式         OnNewOutputBuffer输出         ×                         Buffer模式         OnNeedInputBuffer输入         √                         Buffer模式         OnNewOutputBuffer输出         √                               **系统能力：** SystemCapability.Multimedia.Media.Core

     **起始版本：** 11

     **参数：**

                                   参数项         描述                                       [OH_AVBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avbuffer) *buffer         指向OH_AVBuffer实例的指针。                               **返回：**

                                   类型         说明                                       uint8_t *                   如果成功，则返回数据缓冲区的虚拟地址，如果失败，则返回NULL。

          可能的失败原因：

          1.输入的buffer为空指针。

          2.OH_AVBuffer结构校验失败。

          3.出现内部错误。

                                            #### [h2]OH_AVBuffer_GetCapacity()

     int32_t OH_AVBuffer_GetCapacity(OH_AVBuffer *buffer)     **描述**

     获取数据缓冲区的容量（字节数）。

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **起始版本：** 11

     **参数：**

                                   参数项         描述                                       [OH_AVBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avbuffer) *buffer         指向OH_AVBuffer实例的指针。                               **返回：**

                                   类型         说明                                       int32_t                   如果成功，则返回数据缓冲区的容量，如果失败，则返回-1。

          可能的失败原因：

          1.输入的buffer为空指针。

          2.OH_AVBuffer结构校验失败。

          3.出现内部错误。

                                            #### [h2]OH_AVBuffer_GetNativeBuffer()

     OH_NativeBuffer *OH_AVBuffer_GetNativeBuffer(OH_AVBuffer *buffer)     **描述**

     获取OH_NativeBuffer实例的指针。需要注意的是，返回值指向的创建OH_NativeBuffer的实例需要开发者主动调用接口释放，请参阅[OH_NativeBuffer_Unreference](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-buffer-h#oh_nativebuffer_unreference)。

     **系统能力：** SystemCapability.Multimedia.Media.Core

     **起始版本：** 11

     **参数：**

                                   参数项         描述                                       [OH_AVBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avbuffer) *buffer         指向OH_AVBuffer实例的指针。                               **返回：**

                                   类型         说明                                       [OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer) *                   如果成功，则返回OH_NativeBuffer实例的指针，如果失败，则返回NULL。

          可能的失败原因：

          1.输入的buffer为空指针。

          2.OH_AVBuffer结构校验失败。

          3.出现内部错误。

---
*Updated: 2026-04-22 06:40:56*
