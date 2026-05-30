# image_mdk.h

> **分区**: API参考  |  **Slug**: `capi-image-mdk-h`  |  **DocID**: `a53e02428b26415f8ffb09bf9b7400ee`

---

# image_mdk.h

                 #### 概述

     声明访问图像矩形、大小、格式和组件数据的函数。

     **引用文件：** <multimedia/image_framework/image_mdk.h>

     **库：** libimage_ndk.z.so

     **系统能力：** SystemCapability.Multimedia.Image.Core

     **起始版本：** 10

     **相关模块：** [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

                  #### 汇总

                  #### [h2]结构体

                                   名称         typedef关键字         描述                                       [OhosImageRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagerect)         -         定义图像矩形信息。                         [ImageNative_](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-imagenative-)         ImageNative         为图像接口定义native层图像对象。                         [OhosImageComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagecomponent)         -         定义图像组成信息。                                            #### [h2]枚举

                                   名称         描述                                       [图像格式](#图像格式)         图像格式枚举值。                         [图像颜色通道类型](#图像颜色通道类型)         图像颜色通道类型枚举值。                                            #### [h2]函数

                                   名称         描述                                       [ImageNative* OH_Image_InitImageNative(napi_env env, napi_value source)](#oh_image_initimagenative)         从输入的JavaScript Native API图像对象中解析native ImageNative对象。                         [int32_t OH_Image_ClipRect(const ImageNative* native, struct OhosImageRect* rect)](#oh_image_cliprect)         获取native ImageNative对象OhosImageRect信息。                         [int32_t OH_Image_Size(const ImageNative* native, struct OhosImageSize* size)](#oh_image_size)         获取native ImageNative对象的OhosImageSize信息。                         [int32_t OH_Image_Format(const ImageNative* native, int32_t* format)](#oh_image_format)         获取native ImageNative对象的图像格式。                         [int32_t OH_Image_GetComponent(const ImageNative* native, int32_t componentType, struct OhosImageComponent* componentNative)](#oh_image_getcomponent)         从native ImageNative对象中获取OhosImageComponent。                         [int32_t OH_Image_Release(ImageNative* native)](#oh_image_release)                   释放ImageNative native对象。

          这个方法无法释放JavaScript Native API Image对象，而是释放被[OH_Image_InitImageNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-mdk-h#oh_image_initimagenative)解析的ImageNative native对象。

                                            #### 枚举类型说明

                  #### [h2]图像格式

     enum anonymous enum     **描述**

     图像格式枚举值。

     **起始版本：** 10

                                   枚举项         描述                                       OHOS_IMAGE_FORMAT_YCBCR_422_SP = 1000         YCBCR422 semi-planar格式。                         OHOS_IMAGE_FORMAT_JPEG = 2000         JPEG编码格式。                                            #### [h2]图像颜色通道类型

     enum anonymous enum     **描述**

     图像颜色通道类型枚举值。

     **起始版本：** 10

                                   枚举项         描述                                       OHOS_IMAGE_COMPONENT_FORMAT_YUV_Y = 1         亮度信息。                         OHOS_IMAGE_COMPONENT_FORMAT_YUV_U = 2         色度信息。                         OHOS_IMAGE_COMPONENT_FORMAT_YUV_V = 3         色差值信息。                         OHOS_IMAGE_COMPONENT_FORMAT_JPEG = 4         JPEG格式。                                            #### 函数说明

                  #### [h2]OH_Image_InitImageNative()

     ImageNative* OH_Image_InitImageNative(napi_env env, napi_value source)     **描述**

     从输入的JavaScript Native API图像对象中解析native ImageNative对象。

     **起始版本：** 10

     **参数：**

                                   参数项         描述                                       napi_env env         表示指向JNI环境的指针。                         napi_value source         表示JavaScript Native API图像对象。                               **返回：**

                                   类型         说明                                       [ImageNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-imagenative-)*         如果操作成功返回ImageNative指针对象，如果操作失败返回空指针。                               **参考：**

     [OH_Image_Release](#oh_image_release)

                  #### [h2]OH_Image_ClipRect()

     int32_t OH_Image_ClipRect(const ImageNative* native, struct OhosImageRect* rect)     **描述**

     获取native ImageNative对象OhosImageRect信息。

     **起始版本：** 10

     **参数：**

                                   参数项         描述                                       const [ImageNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-imagenative-)* native         表示指向ImageNative native层对象的指针。                         struct [OhosImageRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagerect)* rect         表示作为转换结果的OhosImageRect对象指针。                               **返回：**

                                   类型         说明                                       int32_t                   [IRNdkErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-mdk-common-h#irndkerrcode)：

          IMAGE_RESULT_SUCCESS：操作成功。

          IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

          IMAGE_RESULT_INVALID_PARAMETER：参数无效。

          IMAGE_RESULT_SURFACE_GET_PARAMETER_FAILED：从surface获取参数失败。

          IMAGE_RESULT_BAD_PARAMETER：参数错误。

                                            #### [h2]OH_Image_Size()

     int32_t OH_Image_Size(const ImageNative* native, struct OhosImageSize* size)     **描述**

     获取native ImageNative对象的OhosImageSize信息。

     如果ImageNative对象所存储的是相机预览流数据，即YUV图像数据，那么获取到的OhosImageSize中的宽高分别对应YUV图像的宽高；如果ImageNative对象所存储的是相机拍照流数据，即JPEG图像，由于已经是编码后的数据，OhosImageSize中的宽等于JPEG数据大小，高等于1。

     ImageNative对象所存储的数据是预览流还是拍照流，取决于应用将receiver中的surfaceId传给相机的previewOutput还是captureOutput。相机预览与拍照最佳实践请参考[预览流二次处理(C/C++)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-preview-imagereceiver)与[拍照(C/C++)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-shooting)。

     **起始版本：** 10

     **参数：**

                                   参数项         描述                                       const [ImageNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-imagenative-)* native         表示ImageNative native对象的指针。                         struct [OhosImageSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagesize)* size         表示作为转换结果的OhosImageSize对象的指针。                               **返回：**

                                   类型         说明                                       int32_t                   [IRNdkErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-mdk-common-h#irndkerrcode)：

          IMAGE_RESULT_SUCCESS：操作成功。

          IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

          IMAGE_RESULT_INVALID_PARAMETER：参数无效。

          IMAGE_RESULT_SURFACE_GET_PARAMETER_FAILED：从surface获取参数失败。

          IMAGE_RESULT_BAD_PARAMETER：参数错误。

                                            #### [h2]OH_Image_Format()

     int32_t OH_Image_Format(const ImageNative* native, int32_t* format)     **描述**

     获取native ImageNative对象的图像格式。

     **起始版本：** 10

     **参数：**

                                   参数项         描述                                       const [ImageNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-imagenative-)* native         表示ImageNative native对象的指针。                         int32_t* format         表示作为转换结果的图像格式对象的指针。                               **返回：**

                                   类型         说明                                       int32_t                   [IRNdkErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-mdk-common-h#irndkerrcode)：

          IMAGE_RESULT_SUCCESS：操作成功。

          IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

          IMAGE_RESULT_INVALID_PARAMETER：参数无效。

          IMAGE_RESULT_SURFACE_GET_PARAMETER_FAILED：从surface获取参数失败。

          IMAGE_RESULT_BAD_PARAMETER：参数错误。

                                            #### [h2]OH_Image_GetComponent()

     int32_t OH_Image_GetComponent(const ImageNative* native, int32_t componentType, struct OhosImageComponent* componentNative)     **描述**

     从native ImageNative对象中获取OhosImageComponent。

     **起始版本：** 10

     **参数：**

                                   参数项         描述                                       const [ImageNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-imagenative-)* native         表示ImageNative native对象的指针。                         int32_t componentType         表示所需组件的组件类型。                         struct [OhosImageComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagecomponent)* componentNative         表示转换结果的OhosImageComponent对象的指针。                               **返回：**

                                   类型         说明                                       int32_t                   [IRNdkErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-mdk-common-h#irndkerrcode)：

          IMAGE_RESULT_SUCCESS：操作成功。

          IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

          IMAGE_RESULT_INVALID_PARAMETER：参数无效。

          IMAGE_RESULT_SURFACE_GET_PARAMETER_FAILED：从surface获取参数失败。

          IMAGE_RESULT_BAD_PARAMETER：参数错误。

                                            #### [h2]OH_Image_Release()

     int32_t OH_Image_Release(ImageNative* native)     **描述**

     释放ImageNative native对象。

     这个方法无法释放JavaScript Native API Image对象，而是释放被[OH_Image_InitImageNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-mdk-h#oh_image_initimagenative)解析的ImageNative native对象。

     **起始版本：** 10

     **参数：**

                                   参数项         描述                                       [ImageNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-imagenative-)* native         表示ImageNative native对象的指针。                               **返回：**

                                   类型         说明                                       int32_t                   [IRNdkErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-mdk-common-h#irndkerrcode)：

          IMAGE_RESULT_SUCCESS：操作成功。

          IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

          IMAGE_RESULT_INVALID_PARAMETER：参数无效。

          IMAGE_RESULT_BAD_PARAMETER：参数错误。

                               **参考：**

     [OH_Image_InitImageNative](#oh_image_initimagenative)

---
*Updated: 2026-04-22 06:41:00*
