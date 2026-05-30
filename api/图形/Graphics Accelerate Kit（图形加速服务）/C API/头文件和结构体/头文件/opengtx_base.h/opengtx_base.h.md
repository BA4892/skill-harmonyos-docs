# opengtx_base.h

> **分区**: API参考  |  **Slug**: `opengtx__base_8h`  |  **DocID**: `a37dcf26c36a4e48b392ca2861501b91`

---

# opengtx_base.h

  #### 概述

声明不区分OpenGL ES和Vulkan图形API平台的OpenGTX接口。

 **引用文件：** <graphics_game_sdk/opengtx_base.h>

 **库：** libopengtx.so

 **系统能力：** SystemCapability.GraphicsGame.RenderAccelerate

 **起始版本：** 5.0.0(12)

 **相关模块：** [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

   #### 汇总

  #### [h2]结构体

 名称 描述   struct  [OpenGTX_ConfigDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___config_description) 此结构体描述OpenGTX属性配置。  struct  [OpenGTX_GameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___game_scene_info) 此结构体描述游戏场景信息，游戏应用获取到场景后传递此参数。  struct  [OpenGTX_FrameRenderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___frame_render_info) 此结构体描述帧渲染信息，游戏应用获取到帧属性后传递此参数。该参数中的相机矩阵通常用于优化渲染层降负载方案的画质效果。  struct  [OpenGTX_NetworkInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_info) 此结构体描述当前设备网络信息，游戏应用获取到网络信息后传递此参数。  struct  [OpenGTX_ResolutionValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___resolution_value) 此结构体描述游戏应用的分辨率值。  struct  [OpenGTX_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___vector3) 此结构体描述OpenGTX三维向量。  struct  [OpenGTX_NetworkLatency](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_latency) 此结构体描述当前设备网络延迟信息，游戏应用获取到网络延迟后传递此参数。该参数通常用于针对性优化网络延迟。       #### [h2]类型定义

 名称 描述   typedef enum [OpenGTX_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_errorcode-1) [OpenGTX_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_errorcode) 此枚举描述OpenGTX接口调用错误码。  typedef enum [OpenGTX_LTPO_Mode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_ltpo_mode-1) [OpenGTX_LTPO_Mode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_ltpo_mode) 此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。  typedef enum [OpenGTX_EngineType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_enginetype-1) [OpenGTX_EngineType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_enginetype) 此枚举描述游戏应用的底层游戏引擎类型。  typedef enum [OpenGTX_GameType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_gametype-1) [OpenGTX_GameType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_gametype) 此枚举描述游戏应用的类型。  typedef enum [OpenGTX_SceneID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_sceneid-1) [OpenGTX_SceneID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_sceneid) 此枚举描述OpenGTX算法的游戏场景类型。  typedef enum [OpenGTX_PictureQualityMaxLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_picturequalitymaxlevel-1) [OpenGTX_PictureQualityMaxLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_picturequalitymaxlevel) 此枚举描述游戏应用的图像质量。  typedef enum [OpenGTX_TempLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_templevel-1) [OpenGTX_TempLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_templevel) 此枚举描述设备的温度级别。  typedef struct [OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context) [OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context) 此结构体描述OpenGTX上下文。  typedef struct [OpenGTX_ConfigDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___config_description) [OpenGTX_ConfigDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_configdescription) 此结构体描述OpenGTX属性配置。  typedef struct [OpenGTX_GameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___game_scene_info) [OpenGTX_GameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_gamesceneinfo) 此结构体描述游戏场景信息，游戏应用获取到场景后传递此参数。  typedef struct [OpenGTX_FrameRenderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___frame_render_info) [OpenGTX_FrameRenderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_framerenderinfo) 此结构体描述帧渲染信息，游戏应用获取到帧属性后传递此参数。该参数中的相机矩阵通常用于优化渲染层降负载方案的画质效果。  typedef struct [OpenGTX_NetworkInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_info) [OpenGTX_NetworkInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_networkinfo) 此结构体描述当前设备网络信息，游戏应用获取到网络信息后传递此参数。  typedef struct [OpenGTX_ResolutionValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___resolution_value) [OpenGTX_ResolutionValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_resolutionvalue) 此结构体描述游戏应用的分辨率值。  typedef struct [OpenGTX_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___vector3) [OpenGTX_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_vector3) 此结构体描述OpenGTX三维向量。  typedef struct [OpenGTX_NetworkLatency](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_latency) [OpenGTX_NetworkLatency](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_networklatency) 此结构体描述当前设备网络延迟信息，游戏应用获取到网络延迟后传递此参数。该参数通常用于针对性优化网络延迟。  typedef void(* [OpenGTX_DeviceInfoCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_deviceinfocallback)) ([OpenGTX_TempLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_templevel-1)) 设备的温度信息回调。       #### [h2]枚举

 名称 描述   [OpenGTX_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_errorcode-1) {

 OPENGTX_SUCCESS = 0,

 OPENGTX_INVALID_PARAMETER = 401,

 OPENGTX_CONTEXT_NOT_CONFIG = 1009502001,

 OPENGTX_CONTEXT_NOT_ACTIVE = 1009502002

 }

  此枚举描述OpenGTX接口调用错误码。  [OpenGTX_LTPO_Mode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_ltpo_mode-1) {

 SCENE_MODE = 0x0001,

 TOUCH_MODE = 0x0010,

 ADAPTIVE_MODE = 0x0100

 }

  此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。  [OpenGTX_EngineType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_enginetype-1) {

 UNITY = 1,

 UNREAL = 2,

 MESSIAH = 3,

 COCOS = 4,

 OTHERS_ENGINE = 100

 }

  此枚举描述游戏应用的底层游戏引擎类型。  [OpenGTX_GameType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_gametype-1) {

 MOBA = 1,

 RPG = 2,

 FPS = 3,

 RAC = 4,

 OTHERS_TYPE = 100

 }

  此枚举描述游戏应用的类型。  [OpenGTX_SceneID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_sceneid-1) {

 LOGIN = 1,

 GAME_INTERFACE = 2,

 LOADING = 3,

 PLAYING = 4,

 SPECTATOR = 5,

 DEATH = 6,

 HEAVY_LOAD = 7,

 OTHERS_SCENE = 100

 }

  此枚举描述OpenGTX算法的游戏场景类型。  [OpenGTX_PictureQualityMaxLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_picturequalitymaxlevel-1) {

 SD = 1,

 HD = 2,

 FHD = 3,

 QHD = 4,

 UHD = 5

 }

  此枚举描述游戏应用的图像质量。  [OpenGTX_TempLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_templevel-1) {

 TEMP_LEVEL1 = 1,

 TEMP_LEVEL2 = 2,

 TEMP_LEVEL3 = 3,

 TEMP_LEVEL4 = 4,

 TEMP_LEVEL5 = 5,

 TEMP_LEVEL6 = 6

 }

  此枚举描述设备的温度级别。       #### [h2]函数

 名称 描述   [OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context)* [HMS_OpenGTX_CreateContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_createcontext)([OpenGTX_DeviceInfoCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_deviceinfocallback) deviceInfoCallback) 创建OpenGTX上下文实例，每次调用会新建[OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context)对象，并返回指向[OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context)对象的指针。  [OpenGTX_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_errorcode-1) [HMS_OpenGTX_Activate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_activate)([OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context)* context) 激活OpenGTX上下文实例。使用OpenGTX上下文实例前需要激活实例。  [OpenGTX_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_errorcode-1) [HMS_OpenGTX_Deactivate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_deactivate)([OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context)* context) 去激活OpenGTX上下文实例，可通过[HMS_OpenGTX_Activate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_activate)重新激活。  [OpenGTX_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_errorcode-1) [HMS_OpenGTX_SetConfiguration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_setconfiguration)([OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context)* context, const [OpenGTX_ConfigDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___config_description)* config) 初始化OpenGTX上下文实例，配置OpenGTX实例属性。  [OpenGTX_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_errorcode-1) [HMS_OpenGTX_DispatchFrameRenderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_dispatchframerenderinfo)([OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context)* context, const [OpenGTX_FrameRenderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___frame_render_info)* frameRenderInfo) 设置OpenGTX运行所需的场景渲染关键信息，每帧变化均需要更新。  [OpenGTX_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_errorcode-1) [HMS_OpenGTX_DispatchGameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_dispatchgamesceneinfo)([OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context)* context, const [OpenGTX_GameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___game_scene_info)* gameSceneInfo) 设置OpenGTX运行所需的游戏场景信息。  [OpenGTX_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_errorcode-1) [HMS_OpenGTX_DispatchNetworkInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_dispatchnetworkinfo)([OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context)* context, const [OpenGTX_NetworkInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_info)* networkInfo) 设置OpenGTX运行所需的网络延迟信息。  [OpenGTX_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_errorcode-1) [HMS_OpenGTX_DestroyContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#hms_opengtx_destroycontext)([OpenGTX_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_context)** context) 销毁OpenGTX上下文实例并释放内存资源。

---
*Updated: 2026-04-22 06:40:38*
