# image_pixel_map_mdk.h

> **分区**: API参考  |  **API级别**: API 23 (HarmonyOS 6.0)

**Slug**: `capi-image-pixel-map-mdk-h`

**DocID**: `6764e683629c4b94ac241f9818a6bf5a`

**NodeID**: `00020177579591076121874fa8691375`

---

image_pixel_map_mdk.h

概述

声明可以锁定并访问pixelmap数据的方法，声明解锁的方法。推荐使用
pixelmap_native.h
。

引用文件：
 <multimedia/image_framework/image_pixel_map_mdk.h>

库：
 libpixelmap_ndk.z.so

系统能力：
 SystemCapability.Multimedia.Image.Core

起始版本：
 10

相关模块：

Image

汇总

[h2]结构体

名称

typedef关键字

描述

OhosPixelMapInfos

OhosPixelMapInfos

用于定义PixelMap的相关信息。

NativePixelMap_

NativePixelMap

定义native层像素位图信息。表示native层PixelMap数据类型名称。

OhosPixelMapCreateOps

-

用于定义创建PixelMap设置选项的相关信息。

[h2]枚举

名称

typedef关键字

描述

anonymous enum

-

PixelMap透明度类型的枚举。

anonymous enum

-

PixelMap编辑类型的枚举。

OH_PixelMap_AntiAliasingLevel

OH_PixelMap_AntiAliasingLevel

Pixelmap缩放时采用的缩放算法。

[h2]函数

名称

描述

int32_t OH_PixelMap_CreatePixelMap(napi_env env, OhosPixelMapCreateOps info, void* buf, size_t len, napi_value* res)

创建PixelMap对象。当前只支持输入流为BGRA格式的流。

该接口传入的buf不支持stride。

该接口不支持DMA内存。

int32_t OH_PixelMap_CreatePixelMapWithStride(napi_env env, OhosPixelMapCreateOps info, void* buf, size_t len, int32_t rowStride, napi_value* res)

创建PixelMap对象。

当前只支持输入流为BGRA格式的流。pixelmap内存在RGBA格式下，默认为DMA内存（图片512*512以上）。

int32_t OH_PixelMap_CreateAlphaPixelMap(napi_env env, napi_value source, napi_value* alpha)

根据Alpha通道的信息，来生成一个仅包含Alpha通道信息的PixelMap对象。

NativePixelMap* OH_PixelMap_InitNativePixelMap(napi_env env, napi_value source)

初始化NativePixelMap对象。

int32_t OH_PixelMap_GetBytesNumberPerRow(const NativePixelMap* native, int32_t* num)

获取PixelMap对象每行字节数。

int32_t OH_PixelMap_GetIsEditable(const NativePixelMap* native, int32_t* editable)

获取PixelMap对象是否可编辑的状态。

int32_t OH_PixelMap_IsSupportAlpha(const NativePixelMap* native, int32_t* alpha)

获取PixelMap对象是否支持Alpha通道。

int32_t OH_PixelMap_SetAlphaAble(const NativePixelMap* native, int32_t alpha)

设置PixelMap对象的Alpha通道。

int32_t OH_PixelMap_GetDensity(const NativePixelMap* native, int32_t* density)

获取PixelMap对象像素密度。

int32_t OH_PixelMap_SetDensity(const NativePixelMap* native, int32_t density)

设置PixelMap对象像素密度。

int32_t OH_PixelMap_SetOpacity(const NativePixelMap* native, float opacity)

设置PixelMap对象的透明度。

int32_t OH_PixelMap_Scale(const NativePixelMap* native, float x, float y)

设置PixelMap对象的缩放。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_Scale
。

int32_t OH_PixelMap_ScaleWithAntiAliasing(const NativePixelMap* native, float x, float y, OH_PixelMap_AntiAliasingLevel level)

根据指定的缩放算法和输入的宽高对图片进行缩放。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_ScaleWithAntiAliasing
。

int32_t OH_PixelMap_Translate(const NativePixelMap* native, float x, float y)

设置PixelMap对象的偏移。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_Translate
。

int32_t OH_PixelMap_Rotate(const NativePixelMap* native, float angle)

设置PixelMap对象的旋转。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_Rotate
。

int32_t OH_PixelMap_Flip(const NativePixelMap* native, int32_t x, int32_t y)

设置PixelMap对象的翻转。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_Flip
。

int32_t OH_PixelMap_Crop(const NativePixelMap* native, int32_t x, int32_t y, int32_t width, int32_t height)

设置PixelMap对象的裁剪。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_Crop
。

int32_t OH_PixelMap_GetImageInfo(const NativePixelMap* native, OhosPixelMapInfos *info)

获取PixelMap对象图像信息。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_GetImageInfo
。

int32_t OH_PixelMap_AccessPixels(const NativePixelMap* native, void** addr)

获取native PixelMap对象数据的内存地址，并锁定该内存。

int32_t OH_PixelMap_UnAccessPixels(const NativePixelMap* native)

释放native PixelMap对象数据的内存锁，用于匹配方法
OH_PixelMap_AccessPixels
。

枚举类型说明

[h2]PixelMap透明度类型

enum anonymous enum

描述

PixelMap 透明度类型的枚举。

起始版本：
 10

枚举项

描述

OHOS_PIXEL_MAP_ALPHA_TYPE_UNKNOWN = 0

未知的格式。

OHOS_PIXEL_MAP_ALPHA_TYPE_OPAQUE = 1

不透明的格式。

OHOS_PIXEL_MAP_ALPHA_TYPE_PREMUL = 2

预乘的格式。

OHOS_PIXEL_MAP_ALPHA_TYPE_UNPREMUL = 3

预除的格式。

[h2]PixelMap编辑类型

enum anonymous enum

描述

PixelMap编辑类型的枚举。

起始版本：
 10

枚举项

描述

OHOS_PIXEL_MAP_READ_ONLY = 0

只读的格式。

OHOS_PIXEL_MAP_EDITABLE = 1

可编辑的格式。

[h2]OH_PixelMap_AntiAliasingLevel

enum OH_PixelMap_AntiAliasingLevel

描述

Pixelmap缩放时采用的缩放算法。

起始版本：
 12

枚举项

描述

OH_PixelMap_AntiAliasing_NONE = 0

最近邻插值算法。

OH_PixelMap_AntiAliasing_LOW = 1

双线性插值算法。

OH_PixelMap_AntiAliasing_MEDIUM = 2

双线性插值算法，同时开启Mipmap。缩小图片时建议使用。

OH_PixelMap_AntiAliasing_HIGH = 3

三次插值算法。

函数说明

[h2]OH_PixelMap_CreatePixelMap()

int32_t OH_PixelMap_CreatePixelMap(napi_env env, OhosPixelMapCreateOps info,void* buf, size_t len, napi_value* res)

描述

创建PixelMap对象。当前只支持输入流为BGRA格式的流。

该接口传入的buf不支持stride。

该接口不支持DMA内存。

起始版本：
 10

参数：

参数项

描述

napi_env env

napi的环境指针。

OhosPixelMapCreateOps
 info

PixelMap数据设置项。

void* buf

图片的buffer数据。

size_t len

图片大小信息。

napi_value* res

应用层的PixelMap对象的指针。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。

 IMAGE_RESULT_DECODE_FAILED：解码失败。

 IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像头解码失败。

 IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。

 IMAGE_RESULT_CREATE_ENCODER_FAILED：创建编码器失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。

 IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_DECODE_ABNORMAL：图像解码失败。

 IMAGE_RESULT_DECODE_FAILED：解码失败。

 IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。

 IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。

 IMAGE_RESULT_INIT_ABNORMAL：图像初始化失败。

 IMAGE_RESULT_CROP：裁剪失败。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

 IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。

IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。

 IMAGE_RESULT_ENCODE_FAILED：图像添加像素位图失败。

 IMAGE_RESULT_HW_DECODE_UNSUPPORT：图像不支持硬件解码。

 IMAGE_RESULT_HW_DECODE_FAILED：硬件解码失败。

 IMAGE_RESULT_INDEX_INVALID：ipc失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

 IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。

 IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。

[h2]OH_PixelMap_CreatePixelMapWithStride()

int32_t OH_PixelMap_CreatePixelMapWithStride(napi_env env, OhosPixelMapCreateOps info,void* buf, size_t len, int32_t rowStride, napi_value* res)

描述

创建PixelMap对象。

当前只支持输入流为BGRA格式的流。pixelmap内存在RGBA格式下，默认为DMA内存（图片512*512以上）。

起始版本：
 12

参数：

参数项

描述

napi_env env

napi的环境指针。

OhosPixelMapCreateOps
 info

PixelMap数据设置项。

void* buf

图片的buffer数据。

size_t len

图片buffer大小信息。

int32_t rowStride

图片跨距信息。跨距，图像每行占用的真实内存大小，单位为字节。跨距 = width * 单位像素字节数 + padding，padding为每行为内存对齐做的填充区域。

napi_value* res

应用层的PixelMap对象的指针。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

 IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数���失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效或图像数据不支持。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

[h2]OH_PixelMap_CreateAlphaPixelMap()

int32_t OH_PixelMap_CreateAlphaPixelMap(napi_env env, napi_value source, napi_value* alpha)

描述

根据Alpha通道的信息，来生成一个仅包含Alpha通道信息的PixelMap对象。

起始版本：
 10

参数：

参数项

描述

napi_env env

napi的环境指针。

napi_value source

应用层的PixelMap对象。

napi_value* alpha

alpha通道的指针。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。

 IMAGE_RESULT_DECODE_FAILED：解码失败。

 IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像头解码失败。

 IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。

 IMAGE_RESULT_CREATE_ENCODER_FAILED：创建编码器失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。

 IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_DECODE_ABNORMAL：图像解码失败。

 IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。

 IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。

 IMAGE_RESULT_INIT_ABNORMAL：图像初始化失败。

 IMAGE_RESULT_CROP：裁剪失败。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

 IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。

IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。

 IMAGE_RESULT_ENCODE_FAILED：图像添加像素位图失败。

 IMAGE_RESULT_HW_DECODE_UNSUPPORT：图像不支持硬件解码。

 IMAGE_RESULT_HW_DECODE_FAILED：硬件解码失败。

 IMAGE_RESULT_INDEX_INVALID：ipc失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

 IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。

 IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。

[h2]OH_PixelMap_InitNativePixelMap()

NativePixelMap* OH_PixelMap_InitNativePixelMap(napi_env env, napi_value source)

描述

初始化NativePixelMap对象。

起始版本：
 10

参数：

参数项

描述

napi_env env

napi的环境指针。

napi_value source

应用层的PixelMap对象。

返回：

类型

说明

NativePixelMap
*

操作成功则返回NativePixelMap的指针；如果操作失败，则返回错误码。

[h2]OH_PixelMap_GetBytesNumberPerRow()

int32_t OH_PixelMap_GetBytesNumberPerRow(const NativePixelMap* native, int32_t* num)

描述

获取PixelMap对象每行字节数。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

int32_t* num

PixelMap对象的每行字节数指针。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

[h2]OH_PixelMap_GetIsEditable()

int32_t OH_PixelMap_GetIsEditable(const NativePixelMap* native, int32_t* editable)

描述

获取PixelMap对象是否可编辑的状态。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

int32_t* editable

PixelMap对象是否可编辑的指针。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

[h2]OH_PixelMap_IsSupportAlpha()

int32_t OH_PixelMap_IsSupportAlpha(const NativePixelMap* native, int32_t* alpha)

描述

获取PixelMap对象是否支持Alpha通道。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

int32_t* alpha

是否支持Alpha的指针。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

[h2]OH_PixelMap_SetAlphaAble()

int32_t OH_PixelMap_SetAlphaAble(const NativePixelMap* native, int32_t alpha)

描述

设置PixelMap对象的Alpha通道。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

int32_t alpha

Alpha通道。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

[h2]OH_PixelMap_GetDensity()

int32_t OH_PixelMap_GetDensity(const NativePixelMap* native, int32_t* density)

描述

获取PixelMap对象像素密度。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

int32_t* density

像素密度指针。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

[h2]OH_PixelMap_SetDensity()

int32_t OH_PixelMap_SetDensity(const NativePixelMap* native, int32_t density)

描述

设置PixelMap对象像素密度。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

int32_t density

像素密度。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

[h2]OH_PixelMap_SetOpacity()

int32_t OH_PixelMap_SetOpacity(const NativePixelMap* native, float opacity)

描述

设置PixelMap对象的透明度。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

float opacity

透明度。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

[h2]OH_PixelMap_Scale()

int32_t OH_PixelMap_Scale(const NativePixelMap* native, float x, float y)

描述

设置PixelMap对象的缩放。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_Scale
。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

float x

宽度的缩放比例。

float y

高度的缩放比例。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。

 IMAGE_RESULT_DECODE_FAILED：解码失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。

 IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。

 IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。

 IMAGE_RESULT_INIT_ABNORMAL：图像初始化失败。

 IMAGE_RESULT_CROP：裁剪失败。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

 IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。

IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

 IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。

 IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。

[h2]OH_PixelMap_ScaleWithAntiAliasing()

int32_t OH_PixelMap_ScaleWithAntiAliasing(const NativePixelMap* native, float x, float y,OH_PixelMap_AntiAliasingLevel level)

描述

根据指定的缩放算法和输入的宽高对图片进行缩放。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_ScaleWithAntiAliasing
。

起始版本：
 12

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

float x

宽度的缩放比例。

float y

高度的缩放比例。

OH_PixelMap_AntiAliasingLevel
 level

缩放算法。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

 IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。

IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

[h2]OH_PixelMap_Translate()

int32_t OH_PixelMap_Translate(const NativePixelMap* native, float x, float y)

描述

设置PixelMap对象的偏移。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_Translate
。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

float x

水平偏移量。

float y

垂直偏移量。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。

 IMAGE_RESULT_DECODE_FAILED：解码失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。

 IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。

 IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。

 IMAGE_RESULT_CROP：裁剪失败。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

 IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败��

IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

 IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。

 IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。

[h2]OH_PixelMap_Rotate()

int32_t OH_PixelMap_Rotate(const NativePixelMap* native, float angle)

描述

设置PixelMap对象的旋转。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_Rotate
。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

float angle

旋转角度。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。

 IMAGE_RESULT_DECODE_FAILED：解码失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。

 IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。

 IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。

 IMAGE_RESULT_CROP：裁剪失败。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

 IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。

IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

 IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。

 IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。

[h2]OH_PixelMap_Flip()

int32_t OH_PixelMap_Flip(const NativePixelMap* native, int32_t x, int32_t y)

描述

设置PixelMap对象的翻转。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_Flip
。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

int32_t x

根据水平方向x轴进行图片翻转。

int32_t y

根据垂直方向y轴进行图片翻转。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。

 IMAGE_RESULT_DECODE_FAILED：解码失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。

 IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。

 IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。

 IMAGE_RESULT_CROP：裁剪失败。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

 IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。

IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

 IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。

 IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。

[h2]OH_PixelMap_Crop()

int32_t OH_PixelMap_Crop(const NativePixelMap* native, int32_t x, int32_t y, int32_t width, int32_t height)

描述

设置PixelMap对象的裁剪。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_Crop
。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

int32_t x

目标图片左上角的x坐标。

int32_t y

目标图片左上角的y坐标。

int32_t width

裁剪区域的宽度。

int32_t height

裁剪区域的高度。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。

 IMAGE_RESULT_DECODE_FAILED：解码失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。

 IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。

 IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。

 IMAGE_RESULT_CROP：裁剪失败。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

 IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。

IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

 IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。

 IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。

[h2]OH_PixelMap_GetImageInfo()

int32_t OH_PixelMap_GetImageInfo(const NativePixelMap* native, OhosPixelMapInfos *info)

描述

获取PixelMap对象图像信息。

从API version 12开始，推荐使用新接口
OH_PixelmapNative_GetImageInfo
。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

OhosPixelMapInfos
 *info

图像信息指针。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。

 IMAGE_RESULT_DECODE_FAILED：解码失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。

 IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。

 IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。

 IMAGE_RESULT_CROP：裁剪失败。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

 IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。

IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

 IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。

 IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。

[h2]OH_PixelMap_AccessPixels()

int32_t OH_PixelMap_AccessPixels(const NativePixelMap* native, void** addr)

描述

获取native PixelMap对象数据的内存地址，并锁定该内存。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

void** addr

用于指向的内存地址的双指针对象。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。

 IMAGE_RESULT_DECODE_FAILED：解码失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。

 IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。

 IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。

 IMAGE_RESULT_CROP：裁剪失败。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

 IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。

IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

 IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。

 IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。

[h2]OH_PixelMap_UnAccessPixels()

int32_t OH_PixelMap_UnAccessPixels(const NativePixelMap* native)

描述

释放native PixelMap对象数据的内存锁，用于匹配方法
OH_PixelMap_AccessPixels
。

起始版本：
 10

参数：

参数项

描述

const 
NativePixelMap
* native

NativePixelMap的指针。

返回：

类型

说明

int32_t

IRNdkErrCode
：

IMAGE_RESULT_SUCCESS：操作成功。

IMAGE_RESULT_BAD_PARAMETER：参数错误。

IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。

 IMAGE_RESULT_INVALID_PARAMETER：参数无效。

 IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。

 IMAGE_RESULT_DECODE_FAILED：解码失败。

 IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。

 IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。

 IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。

 IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。

 IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。

 IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。

 IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。

 IMAGE_RESULT_CROP：裁剪失败。

 IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。

 IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。

IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。

 IMAGE_RESULT_DATA_UNSUPPORT：属性无效。

 IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。

 IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。

---
*2026-04-22T15:55:03.631Z*