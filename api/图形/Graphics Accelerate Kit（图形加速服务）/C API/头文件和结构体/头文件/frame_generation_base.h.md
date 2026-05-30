# frame_generation_base.h

> **分区**: API参考  |  **Slug**: `frame__generation__base_8h`  |  **DocID**: `b9f259620f7047fbbafeda8cb59c8a48`

---

# frame_generation_base.h

  #### 概述

声明不区分图形API平台的超帧接口。

 **引用文件：** <graphics_game_sdk/frame_generation_base.h>

 **库：** libframegeneration.so

 **系统能力：** SystemCapability.GraphicsGame.RenderAccelerate

 **起始版本：** 5.0.0(12)

 **相关模块：** [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

   #### 汇总

  #### [h2]结构体

 名称 描述   struct  [FG_Mat4x4](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___mat4x4) 此结构体描述列主序4x4矩阵。列主序是指在连续的线性内存地址中，优先按列遍历矩阵元素。  struct  [FG_AlgorithmModeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___algorithm_mode_info) 此结构体描述超帧算法模式信息。  struct  [FG_Dimension2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dimension2_d) 此结构体描述2D图像分辨率，以像素为单位。  struct  [FG_ResolutionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___resolution_info) 此结构体描述超帧输入输出图像的分辨率。  struct  [FG_Vec3D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___vec3_d) 此结构体描述超帧三维向量。  struct  [FG_PerFrameExtendedCameraInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___per_frame_extended_camera_info) 此结构体描述相机扩展信息。当视图投影矩阵的平移分量非常大时（超过十万），可以提供更加详细的相机信息以获得更加准确的超帧预测效果。  struct [FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info) 此结构体描述超帧集成的信息。包括显示模式，是否需要额外缓存深度和颜色纹理，以及是否需要翻转颜色纹理。       #### [h2]类型定义

 名称 描述   typedef struct [FG_Mat4x4](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___mat4x4) [FG_Mat4x4](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_mat4x4) 此结构体描述列主序4x4矩阵。列主序是指在连续的线性内存地址中，优先按列遍历矩阵元素。  typedef enum [FG_PredictionMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_predictionmode-1) [FG_PredictionMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_predictionmode) 此枚举描述超帧预测算法模式。  typedef enum [FG_MeMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_memode-1) [FG_MeMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_memode) 此枚举描述超帧运动估计算法模式，支持基础模式和增强模式。  typedef struct [FG_AlgorithmModeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___algorithm_mode_info) [FG_AlgorithmModeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_algorithmmodeinfo) 此结构体描述超帧算法模式信息。  typedef enum [FG_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_errorcode-1) [FG_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_errorcode) 此枚举描述超帧接口调用错误码。  typedef enum [FG_CvvZSemantic](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_cvvzsemantic-1) [FG_CvvZSemantic](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_cvvzsemantic) 此枚举描述经过相机投影变换后，齐次裁剪空间Z/W范围及深度测试模式。  typedef enum [FG_PresentMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_presentmode) [FG_PresentMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_presentmode) 定义预测帧呈现模式，该模式包括两种：游戏端预测帧呈现和系统端预测帧呈现。  typedef struct [FG_Dimension2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dimension2_d) [FG_Dimension2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_dimension2d) 此结构体描述2D图像分辨率，以像素为单位。  typedef struct [FG_ResolutionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___resolution_info) [FG_ResolutionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_resolutioninfo) 此结构体描述超帧输入输出图像的分辨率。  typedef struct [FG_Vec3D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___vec3_d) [FG_Vec3D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___vec3_d) 此结构体描述超帧三维向量。  typedef struct [FG_PerFrameExtendedCameraInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___per_frame_extended_camera_info) [FG_PerFrameExtendedCameraInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___per_frame_extended_camera_info) 此结构体描述相机扩展信息。当视图投影矩阵的平移分量非常大时（超过十万），可以提供更加详细的相机信息以获得更加准确的超帧预测效果。  typedef struct [FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info) 此结构体描述超帧集成的信息。包括显示模式，是否需要额外缓存深度和颜色纹理，以及是否需要翻转颜色纹理。       #### [h2]枚举

 名称 描述   [FG_PredictionMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_predictionmode-1) {

 FG_PREDICTION_MODE_INTERPOLATION = 0,

 FG_PREDICTION_MODE_EXTRAPOLATION = 1

 }

  此枚举描述超帧预测算法模式。  [FG_MeMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_memode-1) {

 FG_ME_MODE_BASIC = 0,

 FG_ME_MODE_ENHANCED = 1

 }

  此枚举描述超帧运动估计算法模式，支持基础模式和增强模式。  [FG_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_errorcode-1) {

 FG_SUCCESS = 0,

 FG_INVALID_PARAMETER = 401,

 FG_CONTEXT_NOT_CONFIG = 1009500001,

 FG_CONTEXT_NOT_ACTIVE = 1009500002,

 FG_COLLECTING_PREVIOUS_FRAMES = 1009500003

 }

  此枚举描述超帧接口调用错误码。  [FG_CvvZSemantic](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_cvvzsemantic-1) {

 FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z = 0,

 FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_REVERSE_Z = 1,

 FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_REVERSE_Z = 2,

 FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z = 3

 }

  此枚举描述经过相机投影变换后，齐次裁剪空间Z/W范围及深度测试模式。  [FG_PresentMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_presentmode) {

 FG_PRESENT_BY_GAME = 0,

 FG_PRESENT_BY_SYSTEM = 1

 }

  定义预测帧呈现模式，该模式包括两种：游戏端预测帧呈现和系统端预测帧呈现。

---
*Updated: 2026-04-22 06:40:37*
