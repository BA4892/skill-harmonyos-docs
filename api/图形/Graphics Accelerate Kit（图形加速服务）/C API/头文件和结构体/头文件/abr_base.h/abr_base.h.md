# abr_base.h

> **分区**: API参考  |  **Slug**: `abr__base_8h`  |  **DocID**: `65033b344b9f4a20bc44fb37cf57401e`

---

# abr_base.h

  #### 概述

声明不区分图形API平台的ABR（自适应稳态渲染）接口。

 **引用文件：** <graphics_game_sdk/abr_base.h>

 **库：** libabr.so

 **系统能力：** SystemCapability.GraphicsGame.RenderAccelerate

 **起始版本：** 5.0.0(12)

 **相关模块：** [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

   #### 汇总

  #### [h2]结构体

 名称 描述   struct  [ABR_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___vector3) 此结构体描述ABR三维向量。  struct  [ABR_CameraData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___camera_data) 此结构体描述游戏应用每帧的相机运动数据，ABR会结合相机运动数据自适应调整FrameBuffer（帧缓冲，下文简称Buffer）分辨率因子。       #### [h2]类型定义

 名称 描述   typedef struct [ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context) [ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context) 此结构体描述ABR上下文。  typedef enum [ABR_RenderAPI_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_renderapi_type-1) [ABR_RenderAPI_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_renderapi_type) 此枚举描述ABR支持的图形API类型。  typedef struct [ABR_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___vector3) [ABR_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_vector3) 此结构体描述ABR三维向量。  typedef struct [ABR_CameraData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___camera_data) [ABR_CameraData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_cameradata) 此结构体描述游戏应用每帧的相机运动数据，ABR会结合相机运动数据自适应调整FrameBuffer（帧缓冲，下文简称Buffer）分辨率因子。  typedef enum [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode-1) [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode) 此枚举描述ABR接口调用错误码。       #### [h2]枚举

 名称 描述   [ABR_RenderAPI_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_renderapi_type-1) {

 RENDER_API_GLES = 0

 }

  此枚举描述ABR支持的图形API类型。RENDER_API_GLES表示OpenGL ES API。  [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode-1) {

 ABR_SUCCESS = 0,

 ABR_INVALID_PARAMETER = 401,

 ABR_CONTEXT_CONFIG_AFTER_ACTIVE = 1009501001,

 ABR_CONTEXT_NOT_CONFIG = 1009501002,

 ABR_CONTEXT_NOT_ACTIVE = 1009501003,

 ABR_METADATA_INVALID = 1009501004,

 ABR_FRAMEBUFFER_INVALID = 1009501005

 }

  此枚举描述ABR接口调用错误码。       #### [h2]函数

 名称 描述   [ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)* [HMS_ABR_CreateContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_createcontext)([ABR_RenderAPI_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_renderapi_type-1) type) 创建ABR上下文实例，每次调用会新建[ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)对象，并返回指向[ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)对象的指针。  [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode-1) [HMS_ABR_SetTargetFps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_settargetfps)([ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)* context, const uint32_t targetFps) 配置ABR上下文实例的目标帧率属性。  [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode-1) [HMS_ABR_SetScaleRange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_setscalerange)([ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)* context, const float minValue, const float maxValue) 配置ABR上下文实例的Buffer分辨率因子范围属性。  [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode-1) [HMS_ABR_Activate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_activate)([ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)* context) 激活ABR上下文实例。激活ABR上下文实例前需调用[HMS_ABR_SetTargetFps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_settargetfps)和[HMS_ABR_SetScaleRange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_setscalerange)接口进行实例属性的配置。  [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode-1) [HMS_ABR_IsActive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_isactive)([ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)* context, bool* isActive) 查询ABR上下文实例是否处于激活状态。  [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode-1) [HMS_ABR_Deactivate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_deactivate)([ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)* context) 去激活ABR上下文实例，可通过[HMS_ABR_Activate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_activate)重新激活。  [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode-1) [HMS_ABR_UpdateCameraData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_updatecameradata)([ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)* context, [ABR_CameraData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___camera_data)* data) 更新每帧相机运动数据，ABR更新相机运动数据前需调用[HMS_ABR_Activate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_activate)接口激活ABR上下文实例。  [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode-1) [HMS_ABR_GetScale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_getscale)([ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)* context, float* scale) 获取ABR Buffer分辨率因子。  [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode-1) [HMS_ABR_GetNextScale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_getnextscale)([ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)* context, float* scale) 获取下一帧的ABR Buffer分辨率因子。  [ABR_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_errorcode-1) [HMS_ABR_DestroyContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_abr_destroycontext)([ABR_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#abr_context)** context) 销毁ABR上下文实例并释放内存资源。

---
*Updated: 2026-04-22 06:40:37*
