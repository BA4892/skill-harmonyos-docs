# ImageEffect_FilterNames

> **分区**: API参考  |  **Slug**: `capi-imageeffect-imageeffect-filternames`  |  **DocID**: `9fab76c8cf83414faace1bc8ad8852e7`

---

# ImageEffect_FilterNames

 ```
typedef struct ImageEffect_FilterNames {...} ImageEffect_FilterNames
```
  #### 概述

滤镜名信息。

 **起始版本：** 12

 **相关模块：** [ImageEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect)

 **所在头文件：** [image_effect_filter.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h)

   #### 汇总

  #### [h2]成员变量

**支持C++语言语法的声明如下：**

  名称 描述   uint32_t size = 0 滤镜名个数。  const char **nameList = nullptr 滤镜名列表。     **支持C语言语法的声明如下：**

  名称 描述   uint32_t size 滤镜名个数。  const char **nameList 滤镜名列表。       #### [h2]成员函数

 名称 typedef关键字 描述   [OH_EffectFilterInfo *OH_EffectFilterInfo_Create()](#oh_effectfilterinfo_create) OH_EffectFilterInfo_Create() 创建OH_EffectFilterInfo实例，调用[OH_EffectFilterInfo_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-imageeffect-filternames#oh_effectfilterinfo_release)进行资源释放。

 **起始版本：** 12

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

   [ImageEffect_ErrorCode OH_EffectFilterInfo_SetFilterName(OH_EffectFilterInfo *info, const char *name)](#oh_effectfilterinfo_setfiltername) OH_EffectFilterInfo_SetFilterName() 设置滤镜名。

 **起始版本：** 12

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

   [ImageEffect_ErrorCode OH_EffectFilterInfo_GetFilterName(OH_EffectFilterInfo *info, char **name)](#oh_effectfilterinfo_getfiltername) OH_EffectFilterInfo_GetFilterName() 获取滤镜名。

 **起始版本：** 12

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

   [ImageEffect_ErrorCode OH_EffectFilterInfo_SetSupportedBufferTypes(OH_EffectFilterInfo *info, uint32_t size,ImageEffect_BufferType *bufferTypeArray)](#oh_effectfilterinfo_setsupportedbuffertypes) OH_EffectFilterInfo_SetSupportedBufferTypes() 设置滤镜所支持的内存类型。

 **起始版本：** 12

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

   [ImageEffect_ErrorCode OH_EffectFilterInfo_GetSupportedBufferTypes(OH_EffectFilterInfo *info, uint32_t *size,ImageEffect_BufferType **bufferTypeArray)](#oh_effectfilterinfo_getsupportedbuffertypes) OH_EffectFilterInfo_GetSupportedBufferTypes() 获取滤镜所支持的内存类型。

 **起始版本：** 12

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

   [ImageEffect_ErrorCode OH_EffectFilterInfo_SetSupportedFormats(OH_EffectFilterInfo *info, uint32_t size,ImageEffect_Format *formatArray)](#oh_effectfilterinfo_setsupportedformats) OH_EffectFilterInfo_SetSupportedFormats() 设置滤镜所支持的像素格式。

 **起始版本：** 12

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

   [ImageEffect_ErrorCode OH_EffectFilterInfo_GetSupportedFormats(OH_EffectFilterInfo *info, uint32_t *size,ImageEffect_Format **formatArray)](#oh_effectfilterinfo_getsupportedformats) OH_EffectFilterInfo_GetSupportedFormats() 获取滤镜所支持的像素格式。

 **起始版本：** 12

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

   [ImageEffect_ErrorCode OH_EffectFilterInfo_Release(OH_EffectFilterInfo *info)](#oh_effectfilterinfo_release) OH_EffectFilterInfo_Release() 销毁OH_EffectFilterInfo实例。

 **起始版本：** 12

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

        #### 成员函数说明

  #### [h2]OH_EffectFilterInfo_Create()

OH_EffectFilterInfo *OH_EffectFilterInfo_Create() **描述**

 创建OH_EffectFilterInfo实例，调用[OH_EffectFilterInfo_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-imageeffect-filternames#oh_effectfilterinfo_release)进行资源释放。

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

 **起始版本：** 12

 **返回：**

  类型 说明   [OH_EffectFilterInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-oh-effectfilterinfo) 返回一个指向OH_EffectFilterInfo实例的指针，创建失败时返回空指针。       #### [h2]OH_EffectFilterInfo_SetFilterName()

ImageEffect_ErrorCode OH_EffectFilterInfo_SetFilterName(OH_EffectFilterInfo *info, const char *name) **描述**

 设置滤镜名。

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_EffectFilterInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-oh-effectfilterinfo) *info 滤镜信息指针。  const char *name 滤镜名，例如：OH_EFFECT_BRIGHTNESS_FILTER。     **返回：**

  类型 说明   [ImageEffect_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode) [EFFECT_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果方法调用成功。

  [EFFECT_ERROR_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果入参为空指针。

        #### [h2]OH_EffectFilterInfo_GetFilterName()

ImageEffect_ErrorCode OH_EffectFilterInfo_GetFilterName(OH_EffectFilterInfo *info, char **name) **描述**

 获取滤镜名。

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_EffectFilterInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-oh-effectfilterinfo) *info 滤镜信息指针。  char **name 指向char数组的指针，返回滤镜名。     **返回：**

  类型 说明   [ImageEffect_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode) [EFFECT_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果方法调用成功。

  [EFFECT_ERROR_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果入参为空指针。

        #### [h2]OH_EffectFilterInfo_SetSupportedBufferTypes()

ImageEffect_ErrorCode OH_EffectFilterInfo_SetSupportedBufferTypes(OH_EffectFilterInfo *info, uint32_t size,ImageEffect_BufferType *bufferTypeArray) **描述**

 设置滤镜所支持的内存类型。

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_EffectFilterInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-oh-effectfilterinfo) *info 滤镜信息指针。  uint32_t size 滤镜所支持内存类型[ImageEffect_BufferType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_buffertype)个数。  ImageEffect_BufferType *bufferTypeArray 滤镜所支持内存类型[ImageEffect_BufferType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_buffertype)数组。     **返回：**

  类型 说明   [ImageEffect_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode) [EFFECT_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果方法调用成功。

  [EFFECT_ERROR_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果入参为空指针。

        #### [h2]OH_EffectFilterInfo_GetSupportedBufferTypes()

ImageEffect_ErrorCode OH_EffectFilterInfo_GetSupportedBufferTypes(OH_EffectFilterInfo *info, uint32_t *size,ImageEffect_BufferType **bufferTypeArray) **描述**

 获取滤镜所支持的内存类型。

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_EffectFilterInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-oh-effectfilterinfo) *info 滤镜信息指针。  uint32_t *size 滤镜所支持内存类型[ImageEffect_BufferType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_buffertype)个数。  ImageEffect_BufferType **bufferTypeArray 滤镜所支持内存类型[ImageEffect_BufferType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_buffertype)数组。     **返回：**

  类型 说明   [ImageEffect_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode) [EFFECT_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果方法调用成功。

  [EFFECT_ERROR_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果入参为空指针。

        #### [h2]OH_EffectFilterInfo_SetSupportedFormats()

ImageEffect_ErrorCode OH_EffectFilterInfo_SetSupportedFormats(OH_EffectFilterInfo *info, uint32_t size,ImageEffect_Format *formatArray) **描述**

 设置滤镜所支持的像素格式。

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_EffectFilterInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-oh-effectfilterinfo) *info 滤镜信息指针。  uint32_t size 滤镜所支持像素格式[ImageEffect_Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_format)个数。  ImageEffect_Format *formatArray 滤镜所支持像素格式[ImageEffect_Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_format)数组。     **返回：**

  类型 说明   [ImageEffect_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode) [EFFECT_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果方法调用成功。

  [EFFECT_ERROR_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果入参为空指针。

        #### [h2]OH_EffectFilterInfo_GetSupportedFormats()

ImageEffect_ErrorCode OH_EffectFilterInfo_GetSupportedFormats(OH_EffectFilterInfo *info, uint32_t *size,ImageEffect_Format **formatArray) **描述**

 获取滤镜所支持的像素格式。

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_EffectFilterInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-oh-effectfilterinfo) *info 滤镜信息指针。  uint32_t *size 滤镜所支持像素格式[ImageEffect_Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_format)个数。  ImageEffect_Format **formatArray 滤镜所支持像素格式[ImageEffect_Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-filter-h#imageeffect_format)数组。     **返回：**

  类型 说明   [ImageEffect_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode) [EFFECT_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果方法调用成功。

  [EFFECT_ERROR_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果入参为空指针。

        #### [h2]OH_EffectFilterInfo_Release()

ImageEffect_ErrorCode OH_EffectFilterInfo_Release(OH_EffectFilterInfo *info) **描述**

 销毁OH_EffectFilterInfo实例。

 **系统能力：** SystemCapability.Multimedia.ImageEffect.Core

 **起始版本：** 12

 **参数：**

  参数项 描述   [OH_EffectFilterInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-oh-effectfilterinfo) *info 滤镜信息指针。     **返回：**

  类型 说明   [ImageEffect_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode) [EFFECT_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果方法调用成功。

  [EFFECT_ERROR_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-effect-errors-h#imageeffect_errorcode)如果入参为空指针。

---
*Updated: 2026-04-22 06:41:20*
